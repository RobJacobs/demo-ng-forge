import { Component, DestroyRef, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  DialogService,
  ForgeButtonModule,
  ForgeCheckboxModule,
  ForgeDividerModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeListItemModule,
  ForgeListModule,
  ForgePaginatorModule,
  ForgePopoverModule,
  ForgeSkeletonModule,
  ForgeTextFieldModule,
  ForgeToolbarModule,
  ForgeTooltipModule
} from '@tylertech/forge-angular';
import { CellAlign, IPaginatorChangeEventData, SortDirection } from '@tylertech/forge';
import { isDefined } from '@tylertech/forge-core';
import { finalize, fromEvent, merge, Subject, takeUntil, tap } from 'rxjs';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { AppCacheService } from 'src/app/app-cache.service';
import { IPerson } from 'src/app/shared/interfaces';
import {
  BusyIndicatorService,
  ConfirmDialogComponent,
  IBusyIndicatorData,
  ITableColumnConfiguration,
  TableDetailComponent,
  TableMobileComponent,
  TableUtils
} from 'src/app/shared/components';
import { FormControlInvalidDirective, OnLoadDirective } from 'src/app/shared/directives';
import { CallbackPipe } from 'src/app/shared/pipes';
import { ITableState, TableDemoService } from './table-demo.service';
import { FilterDialogComponent, ITableDemoFilterDialogData } from './filter-dialog/filter-dialog.component';

interface IRecordsetForm {
  id: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  gender: FormControl<string>;
  occupation: FormControl<string>;
  quote: FormControl<string>;
  url: FormControl<string>;
}

@Component({
  selector: 'app-table-demo',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgePaginatorModule,
    ForgePopoverModule,
    ForgeSkeletonModule,
    ForgeTextFieldModule,
    ForgeToolbarModule,
    ForgeTooltipModule,
    TableDetailComponent,
    TableMobileComponent,
    FormControlInvalidDirective,
    CallbackPipe,
    OnLoadDirective
  ],
  templateUrl: './table-demo.component.html',
  styleUrl: './table-demo.component.scss'
})
export class TableDemoComponent implements OnInit, OnDestroy {
  private destroyRef = inject(DestroyRef);
  private ngZone = inject(NgZone);
  private router = inject(Router);
  private dialogService = inject(DialogService);
  private appDataService = inject(AppDataService);
  private busyIndicatorService = inject(BusyIndicatorService);
  public appCache = inject(AppCacheService);
  public cache = inject(TableDemoService);

  private readonly tableElementRef = viewChild<ElementRef<HTMLTableElement>>('table');
  private tableColumnResize$ = new Subject<void>();
  public isColumnResizing = false;
  private tableStateStorageKey = 'app--table-demo--table-state';
  private filtersStateStorageKey = 'app--table-demo--filters-state';
  private tableColumnDefaultWidths: (string | number)[];
  public isBusy = false;
  public isFiltering = false;
  public isEditing = false;
  public cellAlignEnum = CellAlign;

  public tableColumns: ITableColumnConfiguration[] = [
    {
      property: 'image',
      editable: false,
      sortable: false,
      resizable: false,
      orderable: false,
      optional: false,
      align: CellAlign.Center,
      width: 48,
      template: (rowIndex: number, cellElement: HTMLElement, data: any) => {
        const imgElement = document.createElement('img') as HTMLImageElement;
        imgElement.src = `mock-data/${Utils.formatNumber(data.id, '2.0-0')}-small.png`;
        imgElement.setAttribute('alt', '');
        imgElement.classList.add('forge-table-cell__image');
        cellElement.appendChild(imgElement);
        return null;
      }
    },
    { header: 'Id', property: 'id', width: 48 },
    { header: 'First', property: 'firstName', orderable: false },
    { header: 'Last', property: 'lastName', resizable: false },
    { header: 'Gender', property: 'gender' },
    { header: 'Occupation', property: 'occupation' },
    {
      header: 'Actions',
      property: 'actions',
      editable: false,
      sortable: false,
      resizable: false,
      orderable: false,
      optional: false,
      align: CellAlign.Center,
      width: 120,
      frozen: 'right',
      template: (rowIndex: number, cellElement: HTMLElement, data: IPerson) => {
        cellElement.classList.add('forge-table-body__cell__actions');
        cellElement.appendChild(
          TableUtils.createIconButton(
            'delete',
            (event: Event) => {
              this.onDelete(data.id);
            },
            'Delete person'
          )
        );
        cellElement.appendChild(
          TableUtils.createIconButton(
            'keyboard_arrow_right',
            (event: Event) => {
              this.onViewDetail(data.id);
            },
            'View person details'
          )
        );

        return null;
      }
    }
  ];

  public recordsetFormGroup = new FormGroup({
    recordsetFormArray: new FormArray<FormGroup<IRecordsetForm>>([])
  });

  public visibleColumns = (columns: ITableColumnConfiguration[]): ITableColumnConfiguration[] => {
    return Utils.sortData(
      columns.filter((c) => c.hidden !== true),
      'order',
      'number',
      'ASC'
    );
  };

  public optionalColumns = (columns: ITableColumnConfiguration[]): ITableColumnConfiguration[] => {
    return columns.filter((c) => c.optional !== false);
  };

  public headerSelectedIcon = (selectedRows: string[]): 'check_box' | 'check_box_outline_blank' | 'indeterminate_check_box' => {
    return this.cache.selectedRows?.length && this.cache.selectedRows?.length === this.cache.recordset().length
      ? 'check_box'
      : !this.cache.selectedRows?.length
        ? 'check_box_outline_blank'
        : 'indeterminate_check_box';
  };

  public isRowSelected = (selectedRows: string[], id: string): boolean => {
    return selectedRows?.findIndex((r) => r === id) !== -1 ? true : false;
  };

  public ngOnInit() {
    this.loadTableState();
    this.loadFiltersState();
    this.getRecords();
  }

  public ngOnDestroy() {
    this.tableColumnResize$.next();
    this.tableColumnResize$.complete();
  }

  public onFilter() {
    this.isFiltering = !this.isFiltering;

    const dialogData: ITableDemoFilterDialogData = {
      cache: this.cache,
      saveCallback: () => this.saveFiltersState()
    };
    this.dialogService.open(FilterDialogComponent, { data: dialogData, options: { preset: 'right-sheet' } }).afterClosed.subscribe({
      next: (result) => {
        if (result) {
          this.cache.filter.skip = 0;
          this.cache.filter.filters = this.cache.convertRecordsetFilterFormGroup();
          this.getRecords();
        }
      }
    });
  }

  public onEdit(isEditing) {
    this.isEditing = isEditing;
    this.tableColumns.find((tc) => tc.header === 'Actions').hidden = this.isEditing;
    this.tableColumns = [...this.tableColumns];

    this.recordsetFormGroup.controls.recordsetFormArray.clear();
    if (this.isEditing) {
      this.cache.recordset().forEach((person) => {
        this.recordsetFormGroup.controls.recordsetFormArray.push(this.buildRecordForm(person), { emitEvent: false });
      });
    }
  }

  public onSubmit() {
    const busyData: IBusyIndicatorData = {
      message: 'Submitting...',
      progress: 'circular'
    };
    this.busyIndicatorService.show(busyData);
    setTimeout(() => {
      this.busyIndicatorService.hide();
      this.isEditing = false;
      this.cache.recordset.set(this.recordsetFormGroup.controls.recordsetFormArray.getRawValue());
      this.recordsetFormGroup.controls.recordsetFormArray.clear();
    }, 1000);
  }

  public onDelete(id: string) {
    this.dialogService
      .open(ConfirmDialogComponent, {
        options: { persistent: true },
        data: { title: 'Delete record', message: 'Are you sure you want to delete this record?' }
      })
      .afterClosed.subscribe({
        next: (result) => {
          if (result) {
            const busyData: IBusyIndicatorData = {
              message: 'Deleting...',
              progress: 'circular'
            };
            this.busyIndicatorService.show(busyData);
            setTimeout(() => {
              this.ngZone.run(() => {
                this.cache.totalRecords--;
                const index = this.cache.recordset().findIndex((p) => p.id === id);
                this.cache.recordset.set(this.cache.recordset().toSpliced(index, 1));
                this.busyIndicatorService.hide();
              });
            }, 1000);
          }
        }
      });
  }

  public onViewDetail(id: string) {
    this.router.navigate([`people/detail/${id}`]);
  }

  public onColumnHeaderDragDrop(event: CdkDragDrop<ITableColumnConfiguration>) {
    if (event.item.data.moveable === false) {
      return;
    }
    moveItemInArray(this.tableColumns, event.previousIndex, event.currentIndex);
    this.saveTableState();
    this.tableColumns.forEach((tc, index) => (tc.order = index));
    this.tableColumns = [...this.tableColumns];
  }

  public columnHeaderSortPredicate = (index: number) => {
    return this.tableColumns[index].orderable !== false;
  };

  public onColumnHeaderResize(event: MouseEvent, columnIndex: number, column: ITableColumnConfiguration) {
    event.stopPropagation();
    event.preventDefault();
    this.tableColumnResize$.next();

    const tableElementRef = this.tableElementRef();
    let columnHeaderElement = (tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[columnIndex] as HTMLTableCellElement;
    let columnElements = (tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${columnIndex + 1})`);

    let positionX = event.clientX;
    if (columnHeaderElement) {
      this.isColumnResizing = true;
      tableElementRef?.nativeElement.querySelector('.forge-table-head__row')?.classList.add('forge-table-row--resizing');
      columnHeaderElement.classList.add('forge-table-cell--resizing');
      columnElements.forEach((c) => c.classList.add('forge-table-cell--resizing'));

      fromEvent<MouseEvent>(document.body, 'mousemove')
        .pipe(
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            column.width = columnHeaderElement.offsetWidth + (event.clientX - positionX);
            positionX = event.clientX;
          })
        )
        .subscribe();

      const theadElement = tableElementRef?.nativeElement.querySelector('thead');
      merge(fromEvent(theadElement, 'mouseup'), fromEvent(theadElement, 'mouseleave'))
        .pipe(
          finalize(() =>
            requestAnimationFrame(() => {
              this.isColumnResizing = false;
              (columnHeaderElement as any) = undefined;
              (columnElements as any) = undefined;
              this.saveTableState();
            })
          ),
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            this.tableColumnResize$.next();

            this.tableElementRef()
              ?.nativeElement.querySelectorAll('.forge-table-row--resizing')
              .forEach((el) => el.classList.remove('forge-table-row--resizing'));
            this.tableElementRef()
              ?.nativeElement.querySelectorAll('.forge-table-cell--resizing')
              .forEach((el) => el.classList.remove('forge-table-cell--resizing'));
          })
        )
        .subscribe();
    }
  }

  public onColumnsEditPopoverSelected(value: any) {
    switch (value) {
      case 'reset-column-width':
        this.tableColumnDefaultWidths.forEach((width, i) => {
          this.tableColumns[i].width = width;
        });
        this.saveTableState();
        break;
      case 'delete-table-cache':
        this.deleteTableState();
        break;
      default: {
        const tableColumn = this.tableColumns.find((c) => c.property === value.property);
        if (tableColumn) {
          // prevent hiding all columns
          if (this.tableColumns.filter((c) => !c.hidden).length) {
            tableColumn.hidden = isDefined(tableColumn.hidden) ? !tableColumn.hidden : true;
            tableColumn.sortDirection = undefined;
            this.tableColumns = [...this.tableColumns];
          }
          this.saveTableState();
        }
        break;
      }
    }
  }

  public onColumnSort(event: MouseEvent, column: ITableColumnConfiguration) {
    event.stopPropagation();

    if (
      (event.target as HTMLElement).classList.contains('forge-table-head__cell-dragger') ||
      (event.target as HTMLElement).classList.contains('forge-table-head__cell-resizer') ||
      this.isColumnResizing ||
      this.isBusy ||
      this.isEditing ||
      column.sortable === false
    ) {
      return;
    }

    this.tableColumns.filter((c) => c.property !== column.property).forEach((c) => (c.sortDirection = undefined));
    if (column.sortDirection === SortDirection.Ascending) {
      column.sortDirection = SortDirection.Descending;
    } else if (column.sortDirection === SortDirection.Descending) {
      column.sortDirection = undefined;
    } else {
      column.sortDirection = SortDirection.Ascending;
    }

    (this.cache.filter as any).sort = column.sortDirection ? { property: column.property, direction: column.sortDirection } : undefined;
    this.cache.filter.skip = 0;
    this.saveTableState();
    this.getRecords();
  }

  public onPaginatorChange(detail: IPaginatorChangeEventData) {
    this.cache.filter.skip = detail.pageIndex * detail.pageSize;
    this.cache.filter.take = detail.pageSize;
    if (detail.type === 'page-size') {
      this.saveTableState();
    }
    this.getRecords();
  }

  public onRowExpand(id: string) {
    const expandedRowIndex = this.cache.expandedRows.findIndex((r) => r === id);
    if (expandedRowIndex !== -1) {
      this.cache.expandedRows[expandedRowIndex] = undefined;
    } else {
      const recordIndex = this.cache.recordset().findIndex((r) => r.id === id);
      if (recordIndex !== -1) {
        this.cache.expandedRows[recordIndex] = id;
      }
    }
  }

  public onRowSelectHeader() {
    if (this.cache.selectedRows?.length === this.cache.recordset().length) {
      this.cache.selectedRows = [];
    } else {
      this.cache.selectedRows = this.cache.recordset().map((r) => r.id);
    }
    this.cache.selectedRows = [...this.cache.selectedRows];
  }

  public onRowSelect(id: string) {
    const selectedRowIndex = this.cache.selectedRows.findIndex((r) => r === id);
    if (selectedRowIndex !== -1) {
      this.cache.selectedRows.splice(selectedRowIndex, 1);
    } else {
      this.cache.selectedRows.push(id);
    }
    this.cache.selectedRows = [...this.cache.selectedRows];
  }

  private getRecords() {
    if (this.isBusy) {
      // TODO cancel request
      return;
    }

    this.isBusy = true;
    this.cache.recordset.set([]);
    this.recordsetFormGroup.controls.recordsetFormArray.clear();
    this.cache.expandedRows = [];
    this.cache.selectedRows = [];
    this.appDataService
      .getPeople({
        sort: this.cache.filter.sort,
        skip: this.cache.filter.skip,
        take: this.cache.filter.take,
        filters: this.cache.filter.filters
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.isBusy = false))
      )
      .subscribe({
        next: (result) => {
          this.cache.totalRecords = result.count;
          this.cache.recordset.set(result.data);
        }
      });
  }

  private buildRecordForm(person: IPerson): FormGroup<IRecordsetForm> {
    return new FormGroup<IRecordsetForm>({
      id: new FormControl<string | null>(person.id, { validators: [Validators.required] }),
      firstName: new FormControl<string | null>(person.firstName, { validators: [Validators.required] }),
      lastName: new FormControl<string | null>(person.lastName, { validators: [Validators.required] }),
      gender: new FormControl<string | null>(person.gender),
      occupation: new FormControl<string | null>(person.occupation),
      quote: new FormControl<string | null>(person.quote),
      url: new FormControl<string | null>(person.url)
    });
  }

  private loadTableState() {
    this.tableColumnDefaultWidths = this.tableColumns.map((tc) => tc.width);
    const stateRaw = localStorage.getItem(this.tableStateStorageKey);
    if (stateRaw?.length) {
      const tableState = JSON.parse(stateRaw) as ITableState;
      tableState.columns.forEach((tcs) => {
        const column = this.tableColumns.find((tc) => tc.property === tcs.property);
        if (column) {
          column.order = tcs.order;
          column.width = tcs.width;
          column.hidden = tcs.hidden;
          if (tableState.sort?.property === column.property) {
            column.sortDirection = tableState.sort.direction;
          }
        }
      });
      this.cache.filter.sort = tableState.sort;
      this.cache.filter.take = tableState.take;
    } else {
      const column = this.tableColumns.find((tc) => tc.property === this.cache.filter?.sort?.property);
      if (column) {
        column.sortDirection = this.cache.filter.sort.direction;
      }
    }
  }

  private saveTableState() {
    localStorage.setItem(
      this.tableStateStorageKey,
      JSON.stringify({
        columns: this.tableColumns.map((tc, index) => ({
          property: tc.property,
          order: index,
          width: tc.width,
          hidden: tc.hidden
        })),
        sort: this.cache.filter.sort,
        take: this.cache.filter.take
      })
    );
  }

  private deleteTableState() {
    localStorage.removeItem(this.tableStateStorageKey);
  }

  private loadFiltersState() {
    const stateRaw = localStorage.getItem(this.filtersStateStorageKey);
    if (stateRaw?.length) {
      this.cache.userFilters = JSON.parse(stateRaw);
      const defaultFilter = this.cache.userFilters?.find((f) => f.isDefault);
      if (defaultFilter) {
        this.cache.recordsetFilterFormGroup.patchValue(defaultFilter.filters);
        this.cache.filter.filters = this.cache.convertRecordsetFilterFormGroup();
        this.cache.activeUserFilter = defaultFilter;
      }
    }
  }

  private saveFiltersState() {
    localStorage.setItem(this.filtersStateStorageKey, JSON.stringify(this.cache.userFilters));
  }
}

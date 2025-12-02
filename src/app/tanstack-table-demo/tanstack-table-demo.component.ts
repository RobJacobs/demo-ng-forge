import { Component, DestroyRef, ElementRef, NgZone, OnDestroy, OnInit, TemplateRef, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { isDefined } from '@tylertech/forge-core';
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
  ForgeTooltipModule,
  ForgeLabelValueModule
} from '@tylertech/forge-angular';
import { CellAlign, IOption, IPaginatorChangeEventData, SortDirection } from '@tylertech/forge';
import { finalize, fromEvent, merge, Subject, takeUntil, tap } from 'rxjs';
import {
  CellContext,
  Column,
  createAngularTable,
  ExpandedState,
  FlexRender,
  flexRenderComponent,
  getCoreRowModel,
  getExpandedRowModel,
  HeaderContext,
  RowSelectionState
} from '@tanstack/angular-table';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { AppCacheService } from 'src/app/app-cache.service';
import { IPerson } from 'src/app/shared/interfaces';
import { BusyIndicatorService, ConfirmDialogComponent, IBusyIndicatorData, ITableColumnConfiguration, TableDetailComponent } from 'src/app/shared/components';
import { ComponentColumnDef, ITableState, TanStackTableDemoService } from './tanstack-table-demo.service';
import { TableCellInputComponent } from './table-cell-input/table-cell-input.component';
import { FilterDialogComponent, ITableDemoFilterDialogData } from './filter-dialog/filter-dialog.component';

export interface IRecordsetForm {
  id: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  gender: FormControl<string>;
  occupation: FormControl<string>;
  quote: FormControl<string>;
  url: FormControl<string>;
}

@Component({
  selector: 'app-tan-stack-table-demo',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeLabelValueModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgePaginatorModule,
    ForgePopoverModule,
    ForgeSkeletonModule,
    ForgeTextFieldModule,
    ForgeToolbarModule,
    ForgeTooltipModule,
    FlexRender,
    TableDetailComponent
  ],
  templateUrl: './tanstack-table-demo.component.html',
  styleUrl: './tanstack-table-demo.component.scss'
})
export class TanstackTableDemoComponent implements OnInit, OnDestroy {
  private destroyRef = inject(DestroyRef);
  private ngZone = inject(NgZone);
  private router = inject(Router);
  private dialogService = inject(DialogService);
  private appDataService = inject(AppDataService);
  private busyIndicatorService = inject(BusyIndicatorService);
  public appCache = inject(AppCacheService);
  public cache = inject(TanStackTableDemoService);

  private readonly tableElementRef = viewChild.required<ElementRef<HTMLTableElement>>('tableRef');
  private tableCellHeaderTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableCellHeader');
  private tableCellDefaultTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableCellDefault');
  private tableRowSelectHeaderTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableRowSelectHeader');
  private tableRowSelectTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableRowSelect');
  private tableRowExpandTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableRowExpand');
  private tableCellImageTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableCellImage');
  private tableCellActionsTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableCellActions');
  private tableStateStorageKey = 'app--tansatack-table-demo--table-state';
  private filtersStateStorageKey = 'app--tanstack-table-demo--filters-state';
  private tableColumnResize$ = new Subject<void>();
  private tableCellInputComponentRender = (context) => {
    return flexRenderComponent(TableCellInputComponent, {
      inputs: {
        context: context,
        control: this.recordsetFormGroup.controls.recordsetFormArray.at(context.row.index)?.get(context.column.id) as FormControl,
        isEditing: this.isEditing
      }
    });
  };

  public isBusy = false;
  public isFiltering = false;
  public isEditing = false;
  public isColumnResizing = false;
  public cellAlignEnum = CellAlign;
  public expandedRows = signal<ExpandedState>({});
  public selectedRows = signal<RowSelectionState>({});
  public genderOptions = signal<IOption[]>([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]);

  public defaultColumnDef: Partial<ComponentColumnDef> = {
    size: 0,
    minSize: 0,
    cell: () => this.tableCellDefaultTemplate()
  };
  public columnDefs: ComponentColumnDef[] = [
    {
      id: 'selector',
      header: () => {
        if (this.appCache.layoutMode === 'sm') {
          return '';
        }
        return this.tableRowSelectHeaderTemplate();
      },
      minSize: 48,
      maxSize: 48,
      enableEditing: false,
      enableOrdering: false,
      enableMobile: false,
      enableResizing: false,
      enableSorting: false,
      align: CellAlign.Center,
      cell: () => this.tableRowSelectTemplate()
    },
    {
      id: 'expander',
      minSize: 48,
      maxSize: 48,
      enableEditing: false,
      enableHiding: false,
      enableOrdering: false,
      enableMobile: false,
      enableResizing: false,
      enableSorting: false,
      align: CellAlign.Center,
      cell: () => this.tableRowExpandTemplate()
    },
    {
      id: 'image',
      minSize: 48,
      maxSize: 48,
      enableEditing: false,
      enableHiding: false,
      enableOrdering: false,
      enableResizing: false,
      enableSorting: false,
      align: CellAlign.Center,
      cell: () => this.tableCellImageTemplate()
    },
    {
      headerText: 'Id',
      header: () => this.tableCellHeaderTemplate(),
      accessorKey: 'id'
    },
    {
      headerText: 'First name',
      enableEditing: false,
      header: () => this.tableCellHeaderTemplate(),
      accessorKey: 'firstName',
      cell: (context) => this.tableCellInputComponentRender(context)
    },
    {
      headerText: 'Last name',
      header: () => this.tableCellHeaderTemplate(),
      accessorKey: 'lastName',
      cell: (context) => this.tableCellInputComponentRender(context)
    },
    {
      headerText: 'Gender',
      header: () => this.tableCellHeaderTemplate(),
      accessorKey: 'gender',
      accessorFn: (value, index) => Utils.formatString(value.gender, 'title'),
      cell: (context) => this.tableCellInputComponentRender(context),
      controlType: 'select',
      options: this.genderOptions
    },
    {
      headerText: 'Occupation',
      header: () => this.tableCellHeaderTemplate(),
      accessorKey: 'occupation',
      cell: (context) => this.tableCellInputComponentRender(context)
    },
    {
      headerText: 'Actions',
      header: () => this.tableCellHeaderTemplate(),
      id: 'actions',
      minSize: 96,
      maxSize: 96,
      enableEditing: false,
      enableHiding: false,
      enableOrdering: false,
      enableResizing: false,
      enableSorting: false,
      align: CellAlign.Center,
      cell: (context) => this.tableCellActionsTemplate()
    }
  ];

  public table = createAngularTable<IPerson>(() => ({
    data: this.cache.recordset(),
    defaultColumn: this.defaultColumnDef,
    columns: this.columnDefs,
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    onSortingChange: (value) => {
      if (this.isBusy || this.isEditing || this.isColumnResizing) {
        return;
      }
      if (typeof value === 'function') {
        this.cache.sorting.update(value);
      } else {
        this.cache.sorting.set(value);
      }
      this.saveTableState();
      this.getRecords();
    },
    onColumnSizingChange: (value) => {
      if (typeof value === 'function') {
        this.cache.columnSizing.update(value);
      } else {
        this.cache.columnSizing.set(value);
      }
    },
    onColumnVisibilityChange: (value) => {
      if (typeof value === 'function') {
        this.cache.columnVisibility.update(value);
      } else {
        this.cache.columnVisibility.set(value);
      }
    },
    onColumnOrderChange: (value) => {
      if (typeof value === 'function') {
        this.cache.columnOrder.update(value);
      } else {
        this.cache.columnOrder.set(value);
      }
      this.saveTableState();
    },
    onExpandedChange: (value) => {
      if (typeof value === 'function') {
        this.expandedRows.update(value);
      } else {
        this.expandedRows.set(value);
      }
    },
    getRowCanExpand: () => true,
    enableRowSelection: () => true,
    onRowSelectionChange: (value) => {
      if (typeof value === 'function') {
        this.selectedRows.update(value);
      } else {
        this.selectedRows.set(value);
      }
    },
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      columnOrder: this.cache.columnOrder(),
      columnPinning: this.cache.columnPinning(),
      columnSizing: this.cache.columnSizing(),
      columnVisibility: this.cache.columnVisibility(),
      expanded: this.expandedRows(),
      rowSelection: this.selectedRows(),
      sorting: this.cache.sorting()
    },
    initialState: {
      columnOrder: this.cache.columnOrder(),
      columnPinning: this.cache.columnPinning(),
      columnSizing: this.cache.columnSizing(),
      columnVisibility: this.cache.columnVisibility(),
      sorting: this.cache.sorting()
    }
  }));

  public recordsetFormGroup = new FormGroup({
    recordsetFormArray: new FormArray<FormGroup<IRecordsetForm>>([])
  });

  public mobileColumnConfigurations = (columns: Column<IPerson, unknown>[]): ITableColumnConfiguration[] => {
    const converted = columns.map((c) => {
      const column: ITableColumnConfiguration = {
        align: (c.columnDef as ComponentColumnDef).align,
        header: (c.columnDef as ComponentColumnDef).headerText,
        hidden: !c.getIsVisible(),
        editable: (c.columnDef as ComponentColumnDef).enableEditing,
        property: (c.columnDef as any).accessorKey
      };
      return column;
    });
    console.log(converted);
    return converted;
  };

  public ngOnInit() {
    this.loadTableSate();
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

    const column = this.table.getColumn('selector');
    column.toggleVisibility(!this.isEditing);

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
      this.isEditing = false;
      this.cache.recordset.set(this.recordsetFormGroup.controls.recordsetFormArray.getRawValue());
      this.recordsetFormGroup.controls.recordsetFormArray.clear();
    }, 1000);
  }

  public onDelete(context: CellContext<IPerson, unknown>) {
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
                const index = this.cache.recordset().findIndex((p) => p.id === context.row.original.id);
                this.cache.recordset.set(this.cache.recordset().toSpliced(index, 1));
              });
              this.busyIndicatorService.hide();
            }, 1000);
          }
        }
      });
  }

  public onViewDetail(context: CellContext<IPerson, unknown>) {
    this.router.navigate([`people/detail/${context.row.original.id}`]);
  }

  public onColumnHeaderDragDrop(event: CdkDragDrop<CellContext<IPerson, unknown>>) {
    const headers = this.table.getHeaderGroups().flatMap((hg) => hg.headers.map((h) => h));
    if ((headers[event.currentIndex]?.column.columnDef as ComponentColumnDef).enableOrdering === false) {
      return;
    }

    const columnOrder = headers.map((h) => h.column.id);
    moveItemInArray(columnOrder, event.previousIndex, event.currentIndex);
    this.table.setColumnOrder(columnOrder);
  }

  public columnHeaderSortPredicate = (index: number, item) => {
    const headers = this.table.getHeaderGroups().flatMap((hg) => hg.headers.map((h) => h));
    return (headers[index]?.column.columnDef as ComponentColumnDef).enableOrdering !== false;
  };

  public onColumnHeaderResize(event, context: HeaderContext<IPerson, unknown>) {
    event.stopPropagation();
    event.preventDefault();

    this.tableColumnResize$.next();

    let columnHeaderElement = (this.tableElementRef().nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[
      context.column.getIndex()
    ] as HTMLTableCellElement;
    let columnElements = (this.tableElementRef().nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${context.column.getIndex() + 1})`);

    let positionX = event.clientX;
    if (columnHeaderElement) {
      this.isColumnResizing = true;
      this.tableElementRef().nativeElement.querySelector('.forge-table-head__row')?.classList.add('forge-table-row--resizing');
      columnHeaderElement.classList.add('forge-table-cell--resizing');
      columnElements.forEach((c) => c.classList.add('forge-table-cell--resizing'));
      const theadElement = this.tableElementRef().nativeElement.querySelector('thead');

      fromEvent<MouseEvent>(document.body, 'mousemove')
        .pipe(
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            this.table.setColumnSizing((value) => {
              value = { ...value, [context.column.id]: columnHeaderElement.offsetWidth + (event.clientX - positionX) };
              return value;
            });
            positionX = event.clientX;
          })
        )
        .subscribe();

      merge(fromEvent(theadElement, 'mouseup'), fromEvent(theadElement, 'mouseleave'))
        .pipe(
          finalize(() =>
            requestAnimationFrame(() => {
              this.isColumnResizing = false;
              this.saveTableState();
              (columnHeaderElement as any) = undefined;
              (columnElements as any) = undefined;
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

  public onColumnsEditPopoverSelected(value: Column<IPerson, unknown> | string) {
    if (typeof value === 'string') {
      switch (value) {
        case 'reset-column-width':
          this.table.setColumnSizing({});
          this.saveTableState();
          break;
        case 'delete-table-cache':
          this.deleteTableState();
          break;
      }
    } else if (typeof value.toggleVisibility() === 'function') {
      value.toggleVisibility();
      this.saveTableState();
    }
  }

  public onPaginatorChange(detail: IPaginatorChangeEventData) {
    this.cache.filter.skip = detail.pageIndex * detail.pageSize;
    this.cache.filter.take = detail.pageSize;
    if (detail.type === 'page-size') {
      this.saveTableState();
    }
    this.getRecords();
  }

  public onRowExpand(context: CellContext<IPerson, unknown>) {
    context.row.toggleExpanded();
  }

  public onRowSelectHeader(context: HeaderContext<IPerson, unknown>) {
    if (this.table.getIsAllRowsSelected()) {
      this.table.toggleAllPageRowsSelected(false);
    } else {
      this.table.toggleAllRowsSelected(true);
    }
  }

  public onRowSelect(context: CellContext<IPerson, unknown>) {
    context.row.toggleSelected();
  }

  private getRecords() {
    if (this.isBusy) {
      // TODO cancel request
      return;
    }

    this.cache.filter.sort = {
      property: this.cache.sorting()[0].id,
      direction: this.cache.sorting()[0].desc ? SortDirection.Descending : SortDirection.Ascending
    };

    this.isBusy = true;
    this.cache.recordset.set([]);
    this.recordsetFormGroup.controls.recordsetFormArray.clear();
    this.table.toggleAllRowsExpanded(false);
    this.table.toggleAllRowsSelected(false);
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

  private loadTableSate() {
    const stateRaw = localStorage.getItem(this.tableStateStorageKey);
    if (stateRaw?.length) {
      const tableState = JSON.parse(stateRaw) as ITableState;
      if (tableState.columns.order?.length) {
        this.cache.columnOrder.set(tableState.columns.order);
      }
      if (tableState.columns.pinning?.left?.length || tableState.columns.pinning?.right?.length) {
        this.cache.columnPinning.set(tableState.columns.pinning);
      }
      if (isDefined(tableState.columns.sizing)) {
        this.cache.columnSizing.set(tableState.columns.sizing);
      }
      if (isDefined(tableState.columns.visibility)) {
        this.cache.columnVisibility.set(tableState.columns.visibility);
      }
      if (tableState.sorting?.length) {
        this.cache.sorting.set(tableState.sorting);
      }
      if (isDefined(tableState.take)) {
        this.cache.filter.take = tableState.take;
      }
    }
  }

  private saveTableState() {
    const tableState: ITableState = {
      columns: {},
      take: this.cache.filter.take
    };
    if (this.cache.columnOrder()?.length) {
      tableState.columns.order = this.cache.columnOrder();
    }
    if (this.cache.columnPinning().left?.length || this.cache.columnPinning().right?.length) {
      tableState.columns.pinning = this.cache.columnPinning();
    }
    if (isDefined(this.cache.columnSizing())) {
      tableState.columns.sizing = this.cache.columnSizing();
    }
    if (isDefined(this.cache.columnVisibility())) {
      tableState.columns.visibility = this.cache.columnVisibility();
    }
    if (this.cache.sorting()?.length) {
      tableState.sorting = this.cache.sorting();
    }
    localStorage.setItem(this.tableStateStorageKey, JSON.stringify(tableState));
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

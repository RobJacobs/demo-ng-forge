import { Component, DestroyRef, inject, OnInit, signal, TemplateRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize, skip } from 'rxjs';
import { CellContext } from '@tanstack/table-core';
import { debounce, isDefined } from '@tylertech/forge-core';
import { CellAlign, IOption, SortDirection } from '@tylertech/forge';
import { DialogService, ForgeCardModule, ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule } from '@tylertech/forge-angular';

import { TableFullComponent } from 'src/app/shared/components/table/table-full/table-full.component';
import { TableDetailComponent } from 'src/app/shared/components/table/table-detail/table-detail.component';
import { staticColumn, ComponentColumnDef, editCellComponent, columnIds } from 'src/app/shared/components/table/table-full/table-full.constants';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { AppCacheService } from 'src/app/app-cache.service';
import { IPerson } from 'src/app/shared/interfaces';
import { TableFullDemoService } from './table-full-demo.service';
import { TableFilterComponent } from './table-filter/table-filter.component';

@Component({
  selector: 'app-table-full-demo',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableFullComponent,
    ForgeCardModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeTooltipModule,
    TableDetailComponent
  ],
  templateUrl: './table-full-demo.component.html',
  styleUrl: './table-full-demo.component.scss'
})
export class TableFullDemoComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private dialogService = inject(DialogService);
  private tableFullComponent = viewChild.required<TableFullComponent>('tableFull');
  private tableCellActionsTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<IPerson, unknown> }>>('tableCellActions');
  private dataService = inject(AppDataService);
  private storageKey = 'app-table-full-demo--table-state';
  public appCache = inject(AppCacheService);
  public cache = inject(TableFullDemoService);

  private genderOptions = signal<IOption[]>([
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Unknown', value: 'unknown' }
  ]);

  public isBusy = signal(false);
  public isEditing = signal(false);
  public recordset = signal<IPerson[]>([]);
  public recordCount = signal(0);
  public recordsetFormArray = new FormArray([]);
  public columnDefs: ComponentColumnDef<IPerson>[] = [
    {
      id: columnIds.selector,
      ...staticColumn(),
      header: () => {
        return this.tableFullComponent().tableRowSelectHeaderTemplate();
      },
      minSize: 48,
      maxSize: 48,
      enableMobile: false,
      frozen: 'left',
      align: CellAlign.Center,
      cell: () => this.tableFullComponent().tableRowSelectTemplate()
    },
    {
      id: columnIds.expander,
      ...staticColumn(),
      minSize: 48,
      maxSize: 48,
      align: CellAlign.Center,
      cell: () => this.tableFullComponent().tableRowExpandTemplate()
    },
    {
      headerText: 'Id',
      accessorKey: 'id',
      enableHiding: false
    },
    {
      headerText: 'First name',
      accessorKey: 'firstName',
      enableColumnFilter: true,
      cell: (context) => editCellComponent(context, this.recordsetFormArray?.at(context.row.index)?.get(context.column.id) as FormControl)
    },
    {
      headerText: 'Last name',
      accessorKey: 'lastName',
      enableOrdering: false,
      enableColumnFilter: true,
      cell: (context) => editCellComponent(context, this.recordsetFormArray?.at(context.row.index)?.get(context.column.id) as FormControl)
    },
    {
      headerText: 'Gender',
      accessorKey: 'gender',
      enableColumnFilter: true,
      accessorFn: (value) => Utils.formatString(value.gender, 'title'),
      editControlType: 'select',
      filterControlType: 'select',
      options: this.genderOptions,
      cell: (context) => editCellComponent(context, this.recordsetFormArray?.at(context.row.index)?.get(context.column.id) as FormControl)
    },
    {
      headerText: 'Occupation',
      accessorKey: 'occupation',
      editControlType: 'autocomplete',
      filterControlType: 'autocomplete',
      enableColumnFilter: true,
      accessorFn: (value) => (value.occupation as any).label,
      autocompleteFilterCallback: (filterText: string, value: string) => {
        return this.recordset().map((r) => r.occupation as any);
      },
      cell: (context) => editCellComponent(context, this.recordsetFormArray?.at(context.row.index)?.get(context.column.id) as FormControl)
    },
    {
      headerText: 'Actions',
      id: columnIds.actions,
      ...staticColumn(),
      minSize: 96,
      maxSize: 96,
      frozen: 'right',
      align: CellAlign.Center,
      cell: (context) => this.tableCellActionsTemplate()
    }
  ];

  public constructor() {
    this.loadState();
    this.initializeObservers();
  }

  public ngOnInit() {
    this.getRecords();
  }

  public onDeleteRecord(event: MouseEvent, context: CellContext<IPerson, unknown>) {
    event.stopPropagation();
    event.preventDefault();
    console.log(context);
  }

  public onViewDetailRecord(event: MouseEvent, context: CellContext<IPerson, unknown>) {
    event.stopPropagation();
    event.preventDefault();
    console.log(context);
  }

  public onFilter() {
    // use this approach for side dialog filter
    // this.dialogService.open(TableFilterComponent, { options: { preset: 'right-sheet' } }).afterClosed.subscribe((result) => {
    //   console.log(result);
    // });
  }

  public onSubmit() {
    this.recordset.set(this.recordsetFormArray.getRawValue());
    this.isEditing.set(false);
  }

  public onRowClicked(data: any) {
    console.log(data);
  }

  private getRecords() {
    this.isBusy.set(true);
    this.dataService
      .getPeople({
        skip: this.cache.tableState.skip(),
        take: this.cache.tableState.take(),
        sort: {
          property: this.cache.tableState.sorting()[0]?.id,
          direction: this.cache.tableState.sorting()[0]?.desc ? SortDirection.Descending : SortDirection.Ascending
        },
        filters: this.cache.tableState.columns?.filters().map((f) => ({ property: f.id, value: f.value }))
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isBusy.set(false))
      )
      .subscribe((r) => {
        this.recordset.set(
          r.data.map((p, i) => {
            (p as any).occupation = { label: p.occupation, value: i.toString() };
            return p;
          })
        );
        this.recordCount.set(r.count);
        this.buildFormArry();
      });
  }

  private buildFormArry() {
    this.recordsetFormArray?.clear();
    this.recordset().forEach((person) => {
      this.recordsetFormArray.push(
        new FormGroup({
          id: new FormControl<string | null>(person.id, { validators: [Validators.required] }),
          firstName: new FormControl<string | null>(person.firstName, { validators: [Validators.required] }),
          lastName: new FormControl<string | null>(person.lastName, { validators: [Validators.required] }),
          gender: new FormControl<string | null>(person.gender),
          occupation: new FormControl<string | null>(person.occupation),
          quote: new FormControl<string | null>(person.quote),
          url: new FormControl<string | null>(person.url)
        })
      );
    });
  }

  private loadState() {
    const state = localStorage.getItem(this.storageKey);
    if (isDefined(state)) {
      const parsedSate = JSON.parse(state);
      if (isDefined(parsedSate.columns?.order)) {
        this.cache.tableState.columns.order.set(parsedSate.columns?.order);
      }
      if (isDefined(parsedSate.columns?.sizing)) {
        this.cache.tableState.columns.sizing.set(parsedSate.columns?.sizing);
      }
      if (isDefined(parsedSate.columns?.visibility)) {
        this.cache.tableState.columns.visibility.set(parsedSate.columns?.visibility);
      }
      if (isDefined(parsedSate.sorting)) {
        this.cache.tableState.sorting.set(parsedSate.sorting);
      }
      if (isDefined(parsedSate.take)) {
        this.cache.tableState.take.set(parsedSate.take);
      }
    }
  }

  private saveState = debounce(() => {
    console.log('save state');
    const state = {
      columns: {
        order: this.cache.tableState.columns.order(),
        sizing: this.cache.tableState.columns.sizing(),
        visibility: this.cache.tableState.columns.visibility()
      },
      sorting: this.cache.tableState.sorting(),
      take: this.cache.tableState.take()
    };
    localStorage.setItem(this.storageKey, JSON.stringify(state));
  }, 500);

  private initializeObservers() {
    toObservable(this.cache.tableState.skip)
      .pipe(skip(1))
      .subscribe(() => this.getRecords());
    toObservable(this.cache.tableState.take)
      .pipe(skip(1))
      .subscribe(() => {
        this.getRecords();
        this.saveState();
      });
    toObservable(this.cache.tableState.sorting)
      .pipe(skip(1))
      .subscribe(() => {
        this.getRecords();
        this.saveState();
      });
    toObservable(this.cache.tableState.columns.filters)
      .pipe(skip(1))
      .subscribe(() => this.getRecords());
    toObservable(this.cache.tableState.columns.order)
      .pipe(skip(1))
      .subscribe(() => this.saveState());
    toObservable(this.cache.tableState.columns.sizing)
      .pipe(skip(1))
      .subscribe(() => this.saveState());
    toObservable(this.cache.tableState.columns.visibility)
      .pipe(skip(1))
      .subscribe(() => this.saveState());
  }
}

import { Injectable, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ColumnDef, ColumnOrderState, ColumnPinningState, ColumnSizingState, SortingState, VisibilityState } from '@tanstack/angular-table';
import { CellAlign, IOption, SortDirection } from '@tylertech/forge';
import { Observable } from 'rxjs';

import { FilterOperator, IFilter, IFilterState, IPerson } from 'src/app/shared/interfaces';

export type ComponentColumnDef = ColumnDef<IPerson> & {
  dataType?: 'string' | 'number' | 'date' | 'boolean';
  controlType?: 'autocomplete' | 'datepicker' | 'checkbox' | 'select' | 'textfield';
  enableOrdering?: boolean;
  enableEditing?: boolean;
  enableMobile?: boolean;
  frozen?: 'left' | 'right';
  align?: CellAlign;
  headerText?: string;
  options?: ReturnType<typeof signal<IOption[]>>;
};

export interface IRecordsetFilterForm {
  firstName: FormGroup<{ value: FormControl<string | null>; operator: FormControl<FilterOperator | null> }>;
  lastName: FormGroup<{ value: FormControl<string | null>; operator: FormControl<FilterOperator | null> }>;
  gender: FormControl<string[] | null>;
  occupation: FormGroup<{ value: FormControl<string | null>; operator: FormControl<FilterOperator | null> }>;
}

export interface ITableFilterState {
  sort?: { property: string; direction: SortDirection };
  filters?: IFilter[];
  skip?: number;
  take?: number;
}

export interface ITableState {
  columns: {
    order?: ColumnOrderState;
    pinning?: ColumnPinningState;
    sizing?: ColumnSizingState;
    visibility?: VisibilityState;
  };
  sorting?: SortingState;
  take: number;
}

@Injectable()
export class TanStackTableDemoService {
  public filter: ITableFilterState = {
    sort: {
      property: 'lastName',
      direction: SortDirection.Ascending
    },
    filters: [] as IFilter[],
    skip: 0,
    take: 25
  };
  public userFilters: IFilterState[] = [];
  public activeUserFilter: IFilterState;
  public totalRecords = 0;
  public recordset = signal<IPerson[]>([]);

  public recordsetFilterFormGroup = new FormGroup<IRecordsetFilterForm>({
    firstName: new FormGroup({
      value: new FormControl<string | null>(null),
      operator: new FormControl<FilterOperator | null>(null)
    }),
    lastName: new FormGroup({
      value: new FormControl<string | null>(null),
      operator: new FormControl<FilterOperator | null>(null)
    }),
    gender: new FormControl<string[] | null>(null),
    occupation: new FormGroup({
      value: new FormControl<string | null>(null),
      operator: new FormControl<FilterOperator | null>(null)
    })
  });

  public columnOrder = signal<ColumnOrderState>([]);
  public columnPinning = signal<ColumnPinningState>({ left: ['selector'], right: ['actions'] });
  public columnSizing = signal<ColumnSizingState>({});
  public columnVisibility = signal<VisibilityState>({});
  public sorting = signal<SortingState>([{ desc: false, id: 'lastName' }]);

  public convertRecordsetFilterFormGroup(): IFilter[] {
    const filters: IFilter[] = [];
    if (this.recordsetFilterFormGroup.controls.firstName.value?.value?.length) {
      filters.push({
        property: 'firstName',
        value: this.recordsetFilterFormGroup.controls.firstName.value?.value,
        operator: this.recordsetFilterFormGroup.controls.firstName.value?.operator
      });
    }
    if (this.recordsetFilterFormGroup.controls.lastName.value?.value?.length) {
      filters.push({
        property: 'lastName',
        value: this.recordsetFilterFormGroup.controls.lastName.value?.value,
        operator: this.recordsetFilterFormGroup.controls.lastName.value?.operator
      });
    }
    if (this.recordsetFilterFormGroup.controls.gender.value?.length) {
      filters.push({
        property: 'gender',
        value: this.recordsetFilterFormGroup.controls.gender.value,
        operator: null,
        strict: true
      });
    }
    if (this.recordsetFilterFormGroup.controls.occupation.value?.value?.length) {
      filters.push({
        property: 'occupation',
        value: this.recordsetFilterFormGroup.controls.occupation.value?.value,
        operator: this.recordsetFilterFormGroup.controls.occupation.value?.operator
      });
    }
    return filters;
  }
}

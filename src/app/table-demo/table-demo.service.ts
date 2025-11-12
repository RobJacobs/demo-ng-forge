import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SortDirection } from '@tylertech/forge';

import { FilterOperator, IFilter, IFilterState } from 'src/app/shared/interfaces';

export interface IRecordsetForm {
  id: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  gender: FormControl<string>;
  occupation: FormControl<string>;
  quote: FormControl<string>;
  url: FormControl<string>;
}

export interface IRecordsetFilterForm {
  firstName: FormGroup<{ value: FormControl<string | null>; operator: FormControl<FilterOperator | null> }>;
  lastName: FormGroup<{ value: FormControl<string | null>; operator: FormControl<FilterOperator | null> }>;
  gender: FormControl<string[] | null>;
  occupation: FormGroup<{ value: FormControl<string | null>; operator: FormControl<FilterOperator | null> }>;
}

export interface ITableColumnState {
  property: string;
  order: string | number;
  width?: string | number;
  hidden?: boolean;
}

export interface ITableFilterState {
  sort?: { property: string; direction: SortDirection };
  filters?: IFilter[];
  skip?: number;
  take?: number;
}

export interface ITableState {
  columns: ITableColumnState[];
  sort: { property: string; direction: SortDirection };
  take: number;
}

@Injectable()
export class TableDemoService {
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
  public recordsetFormGroup = new FormGroup({
    recordsetFormArray: new FormArray<FormGroup<IRecordsetForm>>([])
  });
  public expandedRows: string[] = [];
  public selectedRows: string[] = [];
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
  public filterStorageKey = 'app--table-demo--filters';
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

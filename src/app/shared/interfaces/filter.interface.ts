import { SortDirection } from '@tylertech/forge';

export enum FilterOperator {
  equal = 0,
  notEqual = 1,
  greaterThan = 2,
  lessThan = 3,
  greaterThanEqualTo = 4,
  lessThanEqualTo = 5,
  range = 6,
  contains = 7,
  notContains = 8,
  empty = 9
}

export interface IFilter {
  property: string;
  value?: any;
  minValue?: any;
  maxValue?: any;
  label?: string;
  condition?: 'and' | 'or';
  operator?: FilterOperator;
}

export interface IFilterParameter {
  sort?: { property: string; direction: SortDirection };
  filters?: IFilter[];
  skip?: number;
  take?: number;
}

export interface IFilterResponse<T> {
  count: number;
  data: T[];
}

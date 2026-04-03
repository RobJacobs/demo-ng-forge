import { signal, WritableSignal } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  CellContext,
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnSizingState,
  ColumnSort,
  ExpandedState,
  flexRenderComponent,
  Header,
  RowSelectionState,
  SortingState,
  VisibilityState
} from '@tanstack/angular-table';
import { AutocompleteFilterCallback, AutocompleteOptionBuilder, CellAlign, IOption, SelectOptionBuilder } from '@tylertech/forge';
import { TableCellEditComponent } from '../table-cell-edit/table-cell-edit';
import { TableCellFilterComponent } from '../table-cell-filter/table-cell-filter.component';

export type ComponentColumnDef<T> = ColumnDef<T> & {
  editControlType?: 'autocomplete' | 'datepicker' | 'checkbox' | 'select' | 'textfield';
  filterControlType?: 'autocomplete' | 'datepicker' | 'checkbox' | 'select' | 'textfield';
  enableOrdering?: boolean;
  enableEditing?: boolean;
  enableMobile?: boolean;
  frozen?: 'left' | 'right';
  align?: CellAlign;
  headerText?: string;
  options?: ReturnType<typeof signal<IOption[]>>;
  optionBuilder?: AutocompleteOptionBuilder | SelectOptionBuilder;
  autocompleteFilterCallback?: AutocompleteFilterCallback;
};

export const columnIds = {
  actions: 'actions',
  expander: 'expander',
  selector: 'selector'
};

export interface ITableState {
  columns?: {
    order?: WritableSignal<ColumnOrderState>;
    sizing?: WritableSignal<ColumnSizingState>;
    visibility?: WritableSignal<VisibilityState>;
    filters?: WritableSignal<ColumnFiltersState>;
  };
  rows?: {
    expanded?: WritableSignal<ExpandedState>;
    selected?: WritableSignal<RowSelectionState>;
  };
  sorting?: WritableSignal<SortingState>;
  skip?: WritableSignal<number>;
  take?: WritableSignal<number>;
}

export const initializeTableState = (sort: ColumnSort): ITableState => {
  return {
    columns: {
      order: signal<ColumnOrderState>([]),
      sizing: signal<ColumnSizingState>({}),
      visibility: signal<VisibilityState>({}),
      filters: signal<ColumnFiltersState>([])
    },
    rows: {
      expanded: signal<ExpandedState>({}),
      selected: signal<RowSelectionState>({})
    },
    sorting: signal<SortingState>([sort]),
    skip: signal(0),
    take: signal(25)
  };
};

export const staticColumn = (): Partial<ComponentColumnDef<any>> => {
  return {
    enableEditing: false,
    enableHiding: false,
    enableOrdering: false,
    enableResizing: false,
    enableSorting: false,
    enableColumnFilter: false
  };
};

export const editCellComponent = (context: CellContext<any, any>, control: FormControl) => {
  return flexRenderComponent(TableCellEditComponent, {
    inputs: {
      context,
      control
    }
  });
};

export const filterCellComponent = (context: Header<any, any>, control: FormControl) => {
  return flexRenderComponent(TableCellFilterComponent, {
    inputs: {
      context,
      control
    }
  });
};

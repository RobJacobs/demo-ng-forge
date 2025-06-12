import { Injectable } from '@angular/core';
import { isArray, isDefined } from '@tylertech/forge-core';
import {
  FormFieldComponentDelegate,
  IColumnConfiguration,
  IPaginatorChangeEventData,
  ITableFilterEventData,
  ITableSortEventData,
  ITableSortMultipleEventData,
  SortDirection
} from '@tylertech/forge';
import { IFilterParameter } from 'src/app/shared/interfaces';

@Injectable()
export abstract class BaseTableComponent {
  public recordCount = 0;
  public abstract tableColumns: IColumnConfiguration[];

  private setTableFiltersAF?: number;

  public abstract filterCache: IFilterParameter;

  public initializeSort() {
    this.tableColumns
      .filter((c) => c.initialSort || isDefined(c.sortDirection))
      .forEach((c) => {
        c.initialSort = false;
        c.sortDirection = SortDirection.Unset;
      });

    if (this.filterCache?.sort?.property.length && this.filterCache.sort.direction !== SortDirection.Unset) {
      const column = this.tableColumns.find((c) => c.property === this.filterCache?.sort?.property) as IColumnConfiguration;
      if (isDefined(column)) {
        column.sortDirection = this.filterCache?.sort?.direction;
        column.initialSort = true;
      }
    }
  }

  public initializeFilter() {
    this.filterCache.filters?.forEach((f) => {
      const tableColumn = this.tableColumns.find((tc) => tc.property === f.property && isDefined(tc.filterDelegate));
      if (tableColumn) {
        (tableColumn.filterDelegate as FormFieldComponentDelegate<any, any>).value = f.value;
      }
    });
  }

  public get isFiltered(): boolean {
    return this.filterCache?.filters?.length ? true : false;
  }

  public getColumnIndex(property: string): number {
    return this.tableColumns.findIndex((c) => c.property === property);
  }

  public onTableSort(event: CustomEvent<ITableSortEventData | ITableSortMultipleEventData>) {
    let sort = {} as ITableSortEventData;
    if (isArray(event.detail)) {
      sort = (event.detail as ITableSortMultipleEventData)[0];
    } else {
      sort = event.detail as ITableSortEventData;
    }
    const columnProperty = this.getColumnFromEventIndex(sort.columnIndex).property as string;
    this.filterCache.sort = {
      property: columnProperty,
      direction: sort.direction
    };
    this.filterCache.skip = 0;
    this.getRecords();
  }

  public onTablePaginatorChange(event: CustomEvent<IPaginatorChangeEventData>) {
    this.filterCache.skip = event.detail.pageIndex * event.detail.pageSize;
    this.filterCache.take = event.detail.pageSize;
    this.getRecords();
  }

  public onTableFilter(event: CustomEvent<ITableFilterEventData>) {
    const value = event.detail.value?.trim();
    const column = this.getColumnFromEventIndex(event.detail.columnIndex);
    if (column?.property?.length) {
      const filterIndex = this.filterCache.filters?.findIndex((f) => f.property === column.property) as number;
      if (filterIndex !== -1) {
        if (!value?.length) {
          this.filterCache.filters?.splice(filterIndex, 1);
        } else {
          this.filterCache.filters![filterIndex].value = value;
        }
      } else if (value.length) {
        if (!this.filterCache.filters?.length) {
          this.filterCache.filters = [{ property: column.property, value: value }];
        } else {
          this.filterCache.filters.push({
            property: column.property,
            value: value
          });
        }
      }
      this.getRecords();
    }
  }

  protected destroy() {
    if (this.setTableFiltersAF) {
      window.cancelAnimationFrame(this.setTableFiltersAF);
    }
  }

  protected resetTable() {
    this.filterCache.filters = undefined;
    this.filterCache.skip = 0;
  }

  private getColumnFromEventIndex(index: number): IColumnConfiguration {
    return this.tableColumns.filter((c) => !c.hidden)[index];
  }

  protected abstract getRecords(): void;
}

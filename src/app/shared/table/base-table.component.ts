import { Injectable } from '@angular/core';
import { isDefined } from '@tylertech/forge-core';
import { BaseComponentDelegate, FormFieldComponentDelegate, IColumnConfiguration, SortDirection } from '@tylertech/forge';
import { IFilterParameter } from 'src/app/shared/interfaces/filter.interface';

@Injectable()
export abstract class BaseTableComponent {
  public recordCount = 0;
  public abstract tableColumns: IColumnConfiguration[];

  private setTableFiltersAF?: number;

  public abstract filterCache: IFilterParameter;

  constructor() { }

  public initializeSort() {
    this.tableColumns.filter((c) => c.initialSort || isDefined(c.sortDirection)).forEach((c) => {
      c.initialSort = false;
      c.sortDirection = undefined;
    });
    if (this.filterCache?.sort?.property.length) {
      const column = this.tableColumns.find((c) => c.property === this.filterCache?.sort?.property) as IColumnConfiguration;
      if (isDefined(column)) {
        column.sortDirection = this.filterCache?.sort?.direction;
        column.initialSort = true;
      }
    }
  }

  public initializeFilter() {
    this.filterCache.filters?.forEach(f => {
      const tableColumn = this.tableColumns.find(tc => tc.property === f.property && isDefined(tc.filterDelegate));
      if (tableColumn) {
        (tableColumn.filterDelegate as FormFieldComponentDelegate<any, any>).value = f.value;
      }
    });
  }

  public get isFiltered(): boolean {
    return this.filterCache?.filters?.length ? true : false;
  }

  public getColumnIndex(property: string): number {
    return this.tableColumns.findIndex(c => c.property === property);
  }

  public onTableSort(sort: { columnIndex: number; direction: SortDirection }) {
    const columnProperty = this.getColumnFromEventIndex(sort.columnIndex).property as string;
    this.filterCache.sort = { property: columnProperty, direction: sort.direction };
    this.filterCache.skip = 0;
    this.getRecords();
  }

  public onTablePaginatorChange(detail: { pageIndex: number; pageSize: number }) {
    this.filterCache.skip = detail.pageIndex * detail.pageSize;
    this.filterCache.take = detail.pageSize;
    this.getRecords();
  }

  public onTableFilter(detail: { value: string; columnIndex: number }) {
    detail.value = detail.value?.trim();
    const column = this.getColumnFromEventIndex(detail.columnIndex);
    if (column?.property?.length) {
      const filterIndex = this.filterCache.filters?.findIndex(f => f.property === column.property) as number;
      if (filterIndex !== -1) {
        if (!detail.value?.length) {
          this.filterCache.filters?.splice(filterIndex, 1);
        } else {
          this.filterCache.filters![filterIndex].value = detail.value;
        }
      } else if (detail.value.length) {
        if (!this.filterCache.filters?.length) {
          this.filterCache.filters = [{ property: column.property, value: detail.value, label: column.header }];
        } else {
          this.filterCache.filters.push({ property: column.property, value: detail.value, label: column.header });
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

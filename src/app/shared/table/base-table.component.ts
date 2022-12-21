import { Injectable } from '@angular/core';
import { isDefined } from '@tylertech/forge-core';
import { IColumnConfiguration, SortDirection } from '@tylertech/forge';
import { IFilterParameter } from 'src/app/shared/interfaces/filter.interface';

@Injectable()
export abstract class BaseTableComponent {
  public recordCount = 0;
  public tableColumns: IColumnConfiguration[] = [];

  private setTableFiltersAF?: number;

  public abstract filterCache: IFilterParameter;

  constructor() { }

  public initializeSort() {
    if (this.filterCache?.sort?.property.length) {
      const column = this.tableColumns.find((c) => c.property === this.filterCache?.sort?.property) as IColumnConfiguration;
      if (isDefined(column)) {
        column.sortDirection = this.filterCache?.sort?.direction;
        column.initialSort = true;
      }
    }
  }

  public get isFiltered(): boolean {
    return this.filterCache?.filters?.length ? true : false;
  }

  public getColumnIndex(column: string): number {
    return this.tableColumns.map((c) => c.property).indexOf(column);
  }

  public onTableSort(sort: { columnIndex: number; direction: SortDirection }): void {
    const columnProperty = this.getColumnPropertyFromEventIndex(sort.columnIndex) as string;
    this.filterCache.sort = { property: columnProperty, direction: sort.direction };
    this.filterCache.skip = 0;
    this.getRecords();
  }

  public onTablePaginatorChange(detail: { pageIndex: number; pageSize: number }): void {
    this.filterCache.skip = detail.pageIndex * detail.pageSize;
    this.filterCache.take = detail.pageSize;
    this.getRecords();
  }

  protected destroy(): void {
    if (this.setTableFiltersAF) {
      window.cancelAnimationFrame(this.setTableFiltersAF);
    }
  }

  protected resetTable(): void {
    this.filterCache.filters = undefined;
    this.filterCache.skip = 0;
  }

  private getColumnPropertyFromEventIndex(index: number) {
    return this.tableColumns.filter((c) => !c.hidden)[index].property;
  }

  protected abstract getRecords(): void;
}

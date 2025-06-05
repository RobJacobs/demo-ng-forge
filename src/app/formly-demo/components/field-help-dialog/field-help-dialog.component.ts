import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { finalize, Observable, Subject, takeUntil } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';
import { IColumnConfiguration, ITableFilterEventData, ITableRowClickEventData, ITableSortEventData, SortDirection } from '@tylertech/forge';
import {
  DIALOG_DATA,
  DialogRef,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgePageStateModule,
  ForgePaginatorModule,
  ForgeScaffoldModule,
  ForgeSkeletonModule,
  ForgeTableModule,
  ForgeToolbarModule
} from '@tylertech/forge-angular';

import { IFilterParameter, IFilter, IFilterResponse } from 'src/app/shared/interfaces/filter.interface';
import { Utils } from 'src/utils';

export interface IFieldHelpDialogConfig {
  columnConfigurations: IColumnConfiguration[];
  dataObservable: (param: IFilterParameter) => Observable<IFilterResponse<any>>;
  key: string;
  title: string;
}

@Component({
  selector: 'app-formly-field-help-dialog',
  templateUrl: './field-help-dialog.component.html',
  styleUrls: ['./field-help-dialog.component.scss'],
  imports: [
    CommonModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgePageStateModule,
    ForgePaginatorModule,
    ForgeScaffoldModule,
    ForgeSkeletonModule,
    ForgeTableModule,
    ForgeToolbarModule
  ]
})
export class FieldHelpDialogComponent {
  public dialogConfig = inject<IFieldHelpDialogConfig>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);

  public id = Utils.elementId('app-');
  public dialogTitle: string;
  public columnConfigurations: IColumnConfiguration[];
  public data: any[] = [];
  public paginator = {
    pageIndex: 0,
    pageSize: 25,
    total: 0
  };
  public isBusy = false;
  public key: string;

  private unsubscribe = new Subject<void>();
  private dataObservable: (param: IFilterParameter) => Observable<any>;
  private sort = {
    property: '',
    direction: SortDirection.Ascending
  };
  private filters: IFilter[] = [];

  constructor() {
    this.dialogTitle = this.dialogConfig.title || '';
    this.columnConfigurations = this.dialogConfig.columnConfigurations || [];
    this.dataObservable = this.dialogConfig.dataObservable as any;
    this.key = this.dialogConfig.key || '';
    this.sort.property = this.columnConfigurations.find((c) => c.initialSort)?.property || (this.columnConfigurations[0].property as string);
    this.dialogRef.nativeElement.setAttribute('aria-labelledby', `${this.id}--title`);
    this.getData();
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onPaginatorChange(value: { pageIndex: number; pageSize: number }) {
    this.paginator.pageIndex = value.pageIndex;
    this.paginator.pageSize = value.pageSize;
    this.getData();
  }

  public onTableSort(value: ITableSortEventData) {
    this.sort.property = this.columnConfigurations[value.columnIndex].property as string;
    this.sort.direction = value.direction;
    this.paginator.pageIndex = 0;
    this.getData();
  }

  public onTableFilter(filter: ITableFilterEventData) {
    const filterProperty = this.columnConfigurations[filter.columnIndex].property as string;
    if (isDefined(filter.value) && filter.value?.toString().length) {
      this.filters.push({ property: filterProperty, value: filter.value });
    } else {
      const index = this.filters.findIndex((f) => f.property === filterProperty);
      if (index !== -1) {
        this.filters.splice(index, 1);
      }
    }
    this.paginator.pageIndex = 0;
    this.getData();
  }

  public onTableRowClick(value: ITableRowClickEventData) {
    this.dialogRef.close(value.data[this.key]);
  }

  private getData() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.isBusy = true;
    const param: IFilterParameter = {
      filters: this.filters,
      sort: this.sort,
      skip: this.paginator.pageIndex * this.paginator.pageSize,
      take: this.paginator.pageSize
    };
    this.dataObservable(param)
      .pipe(
        finalize(() => (this.isBusy = false)),
        takeUntil(this.unsubscribe)
      )
      .subscribe((r: IFilterResponse<any>) => {
        this.data = r.data;
        this.paginator.total = r.count;
      });
  }
}

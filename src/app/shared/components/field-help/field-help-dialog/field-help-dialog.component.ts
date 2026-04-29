import { Component, DestroyRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';
import {
  IPaginatorChangeEventData,
  ITableFilterEventData,
  ITableRowClickEventData,
  ITableSelectAllEventData,
  ITableSelectEventData,
  ITableSortEventData,
  SortDirection,
  TableComponent
} from '@tylertech/forge';
import {
  DIALOG_DATA,
  DialogRef,
  ForgeButtonModule,
  ForgePageStateModule,
  ForgePaginatorModule,
  ForgeSkeletonModule,
  ForgeTableModule
} from '@tylertech/forge-angular';

import { IFilter, IFilterParameter } from 'src/app/shared/interfaces';
import { DialogTemplateComponent } from 'src/app/shared/components/dialog-template/dialog-template.component';
import { IFieldHelpConfig } from '../field-help.constants';

@Component({
  selector: 'app-field-help-dialog',
  imports: [ForgeButtonModule, ForgePaginatorModule, ForgePageStateModule, ForgeSkeletonModule, ForgeTableModule, DialogTemplateComponent],
  templateUrl: './field-help-dialog.component.html',
  styleUrl: './field-help-dialog.component.scss'
})
export class FieldHelpDialogComponent implements OnInit {
  public config = inject<IFieldHelpConfig>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);
  private destroyRef = inject(DestroyRef);

  private helpTable = viewChild<TableComponent>('helpTable');
  private activeElement: HTMLElement;

  public isBusy = signal(false);
  public data = signal<any[]>([]);
  public selectedRows = [];
  public paginator = {
    pageIndex: 0,
    pageSize: 25,
    total: 0
  };
  public loadingIndicators = new Array(this.paginator.pageSize);
  private sort: { property: string; direction: SortDirection } = {
    property: '',
    direction: SortDirection.Ascending
  };
  private filters: IFilter[] = [];

  public ngOnInit() {
    this.sort.property = (this.config.columnConfigurations.find((c) => c.initialSort) ?? this.config.columnConfigurations[0]).property;
    this.getData();
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onTableSort(event: CustomEvent<ITableSortEventData>) {
    this.sort = {
      property: this.config.columnConfigurations[event.detail.columnIndex].property,
      direction: event.detail.direction === 'ASC' ? SortDirection.Ascending : SortDirection.Descending
    };
    this.paginator.pageIndex = 0;
    this.getData();
  }

  public onTableFilter(event: CustomEvent<ITableFilterEventData>) {
    const filter = this.filters?.find((f) => f.property === this.config.columnConfigurations[event.detail.columnIndex].property);
    if (isDefined(event.detail.value) && event.detail.value.toString().length) {
      if (filter) {
        filter.value = event.detail.value;
      } else {
        this.filters.push({
          property: this.config.columnConfigurations[event.detail.columnIndex].property,
          value: event.detail.value
        });
      }
    } else if (filter) {
      this.filters.splice(
        this.filters.findIndex((f) => f.property === this.config.columnConfigurations[event.detail.columnIndex].property),
        1
      );
    }
    this.paginator.pageIndex = 0;
    this.getData();
  }

  public onTableRowClick(event: CustomEvent<ITableRowClickEventData>) {
    if (this.config.multiselect) {
      const dataIndex = this.selectedRows.findIndex((d) => d == event.detail.data);
      if (dataIndex !== -1) {
        this.selectedRows.splice(dataIndex, event.detail.data);
        this.helpTable().deselectRow(event.detail.data);
      } else {
        this.selectedRows.push(event.detail.data);
        this.helpTable().selectRow(event.detail.data);
      }
    } else {
      this.dialogRef.close(event.detail.data);
    }
  }

  public onTableRowSelect(event: CustomEvent<ITableSelectEventData>) {
    const dataIndex = this.selectedRows.findIndex((d) => d == event.detail.data);
    if (dataIndex !== -1) {
      this.selectedRows.splice(dataIndex, event.detail.data);
      this.helpTable().deselectRow(event.detail.data);
    } else {
      this.selectedRows.push(event.detail.data);
      this.helpTable().selectRow(event.detail.data);
    }
  }

  public onTableRowSelectAll(event: CustomEvent<ITableSelectAllEventData>) {
    if (event.detail.status) {
      this.selectedRows = this.data();
    } else {
      this.selectedRows.length = 0;
    }
  }

  public onPaginatorChange(event: CustomEvent<IPaginatorChangeEventData>) {
    this.paginator.pageIndex = event.detail.pageIndex;
    this.paginator.pageSize = event.detail.pageSize;
    this.loadingIndicators = new Array(this.paginator.pageSize);
    this.getData();
  }

  public onApplySelection() {
    this.dialogRef.close(this.config.multiselect ? this.selectedRows : this.selectedRows[0]);
  }

  private getData() {
    this.isBusy.set(true);
    this.activeElement = document.activeElement as HTMLElement;

    const param: IFilterParameter = {
      filters: this.filters,
      skip: this.paginator.pageIndex * this.paginator.pageSize,
      take: this.paginator.pageSize,
      sort: this.sort
    };

    this.config
      .dataObservable(param)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.isBusy.set(false);
          requestAnimationFrame(() => {
            this.activeElement.focus();
          });
        })
      )
      .subscribe((result) => {
        this.data.set(result.data);
        this.paginator.total = result.count;
      });
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IColumnConfiguration, ITableRowClickEventData } from '@tylertech/forge';
import { ForgeButtonAreaModule, ForgeDividerModule, ForgeLabelValueModule } from '@tylertech/forge-angular';
import { TableMobileTemplateComponent } from './table-mobile-template.component';

export interface ITableMobileColumnConfiguration extends IColumnConfiguration {}

@Component({
  selector: 'app-table-mobile',
  imports: [CommonModule, ForgeLabelValueModule, ForgeDividerModule, ForgeButtonAreaModule, TableMobileTemplateComponent],
  templateUrl: './table-mobile.component.html',
  styleUrl: './table-mobile.component.scss'
})
export class TableMobileComponent {
  @Input({ required: true })
  public data: any[];
  @Input({ required: true })
  public columnConfigurations: IColumnConfiguration[];
  @Input()
  public allowRowClick = false;
  @Output()
  public rowClick = new EventEmitter<ITableRowClickEventData>();

  public onTableRowClick(rowIndex: number) {
    const event: ITableRowClickEventData = {
      index: rowIndex,
      data: this.data[rowIndex]
    };
    this.rowClick.emit(event);
  }
}

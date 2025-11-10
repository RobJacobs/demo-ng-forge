import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITableRowClickEventData } from '@tylertech/forge';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { ForgeButtonAreaModule, ForgeDividerModule, ForgeLabelValueModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { FormControlInvalidDirective } from 'src/app/shared/directives';
import { TableMobileTemplateComponent } from './table-mobile-template.component';
import { ITableColumnConfiguration } from '../base-table.component';

@Component({
  selector: 'app-table-mobile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonAreaModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgeTextFieldModule,
    TableMobileTemplateComponent,
    FormControlInvalidDirective
  ],
  templateUrl: './table-mobile.component.html',
  styleUrl: './table-mobile.component.scss'
})
export class TableMobileComponent {
  @Input({ required: true })
  public data: any[];
  @Input({ required: true })
  public columnConfigurations: ITableColumnConfiguration[];
  @Input()
  public formArray: FormArray;
  @Input()
  public allowRowClick = false;
  @Input()
  public isEditing = false;
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

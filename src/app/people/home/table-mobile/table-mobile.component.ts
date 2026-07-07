import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ITableRowClickEventData } from '@tylertech/forge';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { ForgeButtonAreaModule, ForgeDividerModule, ForgeLabelValueModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { FormControlInvalidDirective } from 'src/app/shared/directives';
import { TableMobileTemplateComponent } from './table-mobile-template.component';
import { ITableColumnConfiguration } from 'src/app/shared/components/table/base-table.component';

@Component({
  selector: 'app-table-mobile',
  imports: [
    NgTemplateOutlet,
    JsonPipe,
    ReactiveFormsModule,
    ForgeButtonAreaModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgeTextFieldModule,
    TableMobileTemplateComponent,
    FormControlInvalidDirective
  ],
  templateUrl: './table-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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

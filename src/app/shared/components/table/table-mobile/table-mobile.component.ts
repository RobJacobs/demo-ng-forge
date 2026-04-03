import { CommonModule } from '@angular/common';
import { Component, input, output, TemplateRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ForgeButtonAreaModule,
  ForgeButtonModule,
  ForgeDividerModule,
  ForgeLabelValueModule,
  ForgeOpenIconModule,
  ForgeSkeletonModule,
  ForgeTextFieldModule
} from '@tylertech/forge-angular';
import { Table, FlexRender, Row } from '@tanstack/angular-table';
import { columnIds, ComponentColumnDef } from '../table-full/table-full.constants';

@Component({
  selector: 'app-table-mobile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeButtonAreaModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgeOpenIconModule,
    ForgeSkeletonModule,
    ForgeTextFieldModule,
    FlexRender
  ],
  templateUrl: './table-mobile.component.html',
  styleUrl: './table-mobile.component.scss'
})
export class TableMobileComponent {
  public columnDefs = input<ComponentColumnDef<any>[]>();
  public table = input<Table<unknown>>();
  public tableRowDetailTemplate = input<TemplateRef<{ data: unknown; rowIndex: number }>>();
  public isBusy = input(false);
  public isEditing = input(false);
  public rowClickEnabled = input(true);
  public rowClicked = output<{ event: Event; row: Row<any> }>();
  public columnIds = columnIds;

  public onRowClick(event: Event, row: Row<any>) {
    event.preventDefault();
    event.stopPropagation();
    this.rowClicked.emit({ event, row });
  }

  public onRowExpand(event: Event, row: Row<any>) {
    event.preventDefault();
    event.stopPropagation();
    row.toggleExpanded();
  }
}

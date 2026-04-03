import { Component, computed, inject, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CellContext } from '@tanstack/angular-table';
import { IconRegistry } from '@tylertech/forge';
import {
  ForgeAutocompleteModule,
  ForgeCheckboxModule,
  ForgeDatePickerModule,
  ForgeIconModule,
  ForgeSelectModule,
  ForgeTextFieldModule
} from '@tylertech/forge-angular';
import { tylIconArrowDropDown } from '@tylertech/tyler-icons';

import { TableFullComponent } from '../table-full/table-full.component';
import { ComponentColumnDef } from '../table-full/table-full.constants';

@Component({
  selector: 'app-table-cell-edit',
  imports: [ReactiveFormsModule, ForgeAutocompleteModule, ForgeCheckboxModule, ForgeDatePickerModule, ForgeIconModule, ForgeSelectModule, ForgeTextFieldModule],
  templateUrl: './table-cell-edit.html',
  styleUrl: './table-cell-edit.scss',
  host: {
    '[class.editing]': 'isEditing()'
  }
})
export class TableCellEditComponent {
  private tableFullComponent = inject(TableFullComponent);
  public readonly context = input.required<CellContext<unknown, unknown>>();
  public readonly control = input.required<FormControl>();
  public isEditing = this.tableFullComponent.isEditing;
  public elementId = computed(() => {
    return `app-full-table-cell--${this.context().column.id}--${this.context().row.index}`;
  });
  public label = computed(() => {
    return `${(this.context().column.columnDef as ComponentColumnDef<unknown>).headerText} ${this.context().row.index}`;
  });

  constructor() {
    IconRegistry.define([tylIconArrowDropDown]);
  }
}

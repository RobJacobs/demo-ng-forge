import { Component, input, OnInit } from '@angular/core';
import { IPerson } from 'src/app/shared/interfaces';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CellContext } from '@tanstack/angular-table';
import {
  ForgeTextFieldModule,
  ForgeAutocompleteProxyModule,
  ForgeDatePickerProxyModule,
  ForgeCheckboxModule,
  ForgeSelectModule
} from '@tylertech/forge-angular';

@Component({
  selector: 'app-table-cell-input',
  imports: [ReactiveFormsModule, ForgeTextFieldModule, ForgeAutocompleteProxyModule, ForgeDatePickerProxyModule, ForgeCheckboxModule, ForgeSelectModule],
  templateUrl: './table-cell-input.component.html',
  styleUrl: './table-cell-input.component.scss'
})
export class TableCellInputComponent implements OnInit {
  public readonly context = input.required<CellContext<IPerson, unknown>>();
  public readonly control = input.required<FormControl>();
  public readonly isEditing = input.required<boolean>();

  public ngOnInit() {}
}

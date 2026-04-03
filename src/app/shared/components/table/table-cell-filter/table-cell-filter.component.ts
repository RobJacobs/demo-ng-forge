import { Component, computed, ElementRef, inject, input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Header } from '@tanstack/angular-table';
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
import { debounceTime, fromEvent } from 'rxjs';

import { ComponentColumnDef } from '../table-full/table-full.constants';

@Component({
  selector: 'app-table-cell-filter',
  imports: [ReactiveFormsModule, ForgeAutocompleteModule, ForgeCheckboxModule, ForgeDatePickerModule, ForgeIconModule, ForgeSelectModule, ForgeTextFieldModule],
  templateUrl: './table-cell-filter.component.html',
  styleUrl: './table-cell-filter.component.scss'
})
export class TableCellFilterComponent implements OnInit {
  private elementRef = inject(ElementRef<HTMLElement>);
  public readonly context = input.required<Header<unknown, unknown>>();
  public elementId = computed(() => {
    return `eerp-full-table-cell-filter--${this.context().column.id}`;
  });
  public label = computed(() => {
    return `${(this.context().column.columnDef as ComponentColumnDef<unknown>).headerText} filter`;
  });
  public formControl = new FormControl();

  constructor() {
    IconRegistry.define([tylIconArrowDropDown]);
  }

  public ngOnInit() {
    fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click').subscribe((event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    this.formControl.setValue(this.context().column.getFilterValue());
    this.formControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.context().column.setFilterValue(value);
    });
  }
}

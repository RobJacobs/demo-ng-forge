import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IOption } from '@tylertech/forge';
import {
  DIALOG_DATA,
  DialogRef,
  ForgeButtonModule,
  ForgeDividerModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeListItemModule,
  ForgeListModule,
  ForgePopoverModule,
  ForgeSelectModule,
  ForgeTextFieldModule,
  ForgeTooltipModule,
  PopoverDirective,
  DialogService
} from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { DialogTemplateComponent, FilterSaveDialogComponent, IFilterSaveDialogData } from 'src/app/shared/components';
import { AutoFocusDirective } from 'src/app/shared/directives';
import { IFilterState } from 'src/app/shared/interfaces';
import { TableDemoService } from '../table-demo.service';

export interface ITableDemoFilterDialogData {
  cache: TableDemoService;
  saveCallback: () => void;
}

@Component({
  selector: 'app-filter-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgePopoverModule,
    ForgeSelectModule,
    ForgeTextFieldModule,
    ForgeTooltipModule,
    DialogTemplateComponent,
    AutoFocusDirective
  ],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss'
})
export class FilterDialogComponent implements OnInit {
  private dialogService = inject(DialogService);
  private dialogData = inject<ITableDemoFilterDialogData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);
  private operatorPopover?: PopoverDirective;

  public userFilter: IFilterState;
  public cache: TableDemoService;
  public genderOptions: IOption[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Unknown', value: 'U' }
  ];
  public operatorOptions = [
    { value: null, label: 'None' },
    { value: 0, label: 'Equal' },
    { value: 1, label: 'Not equal' },
    { value: 2, label: 'Greater than' },
    { value: 3, label: 'Less than' },
    { value: 4, label: 'Greater than equal to' },
    { value: 5, label: 'Less than equal to' },
    { value: 6, label: 'Range' },
    { value: 7, label: 'Contains' },
    { value: 8, label: 'Not contains' },
    { value: 9, label: 'Empty' }
  ];
  public operatorPopoverFormGroup?: FormGroup;

  public ngOnInit() {
    this.cache = this.dialogData.cache;
    this.userFilter = this.cache.activeUserFilter;
    if (this.userFilter) {
      this.cache.recordsetFilterFormGroup.patchValue(this.userFilter.filters);
    }
  }

  public onFilterChange(event: CustomEvent<string>) {
    this.userFilter = this.cache.userFilters?.find((f) => f.id === event.detail);
    this.cache.recordsetFilterFormGroup.patchValue(this.userFilter.filters);
  }

  public onFilterDelete() {
    const filterIndex = this.cache.userFilters.findIndex((f) => f.id === this.userFilter.id);
    if (filterIndex !== -1) {
      this.cache.userFilters.splice(filterIndex, 1);
    }
    this.cache.activeUserFilter = undefined;
    this.userFilter = undefined;
    this.dialogData.saveCallback();
  }

  public onApply() {
    this.cache.activeUserFilter = this.userFilter;
    this.dialogRef.close(true);
  }

  public onClear() {
    this.userFilter = undefined;
    this.cache.recordsetFilterFormGroup.reset();
    this.cache.recordsetFilterFormGroup.markAsPristine();
  }

  public onSave() {
    const dialogData: IFilterSaveDialogData = {
      description: this.userFilter?.description,
      isDefault: this.userFilter?.isDefault,
      name: this.userFilter?.name
    };
    this.dialogService.open(FilterSaveDialogComponent, { data: dialogData, options: { persistent: true } }).afterClosed.subscribe({
      next: (result: IFilterSaveDialogData) => {
        if (result) {
          const filter: IFilterState = {
            filters: this.cache.recordsetFilterFormGroup.value,
            description: result.description,
            id: this.userFilter?.id || Utils.uniqueId(),
            isDefault: result.isDefault,
            name: result.name
          };

          const filterIndex = this.cache.userFilters.findIndex((f) => f.id === filter.id);
          if (filterIndex !== -1) {
            this.cache.userFilters[filterIndex] = filter;
          } else {
            this.cache.userFilters.push(filter);
          }
          if (filter.isDefault) {
            this.cache.userFilters.filter((f) => f.id !== filter.id).forEach((f) => (f.isDefault = false));
          }
          this.userFilter = this.dialogData.cache.userFilters?.find((f) => f.id === filter.id);
        }
        this.dialogData.saveCallback();
      }
    });
  }

  public onCancel() {
    this.dialogRef.close(false);
  }

  public onOperatorPopoverOpen(event: Event, popover: PopoverDirective, name: string) {
    event.stopPropagation();
    this.operatorPopoverFormGroup = this.cache.recordsetFilterFormGroup.get(name) as FormGroup;
    this.operatorPopover = popover;
    this.operatorPopover.open();
  }

  public onOperatorSelected(value: string | number) {
    value = parseInt(value as string, 10);
    this.operatorPopoverFormGroup?.get('operator')?.setValue(value);
    this.operatorPopover?.close();
  }
}

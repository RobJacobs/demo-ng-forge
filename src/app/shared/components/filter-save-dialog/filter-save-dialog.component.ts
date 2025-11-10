import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  DIALOG_DATA,
  DialogRef,
  ForgeButtonModule,
  ForgeCheckboxModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeTextFieldModule
} from '@tylertech/forge-angular';

import { AutoFocusDirective, FormControlInvalidDirective } from 'src/app/shared/directives';
import { DialogTemplateComponent } from 'src/app/shared/components';

export interface IFilterSaveDialogData {
  title?: string;
  description?: string;
  isDefault?: boolean;
  name?: string;
}
@Component({
  selector: 'app-filter-save-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeTextFieldModule,
    FormControlInvalidDirective,
    DialogTemplateComponent,
    AutoFocusDirective
  ],
  templateUrl: './filter-save-dialog.component.html',
  styleUrls: ['./filter-save-dialog.component.scss']
})
export class FilterSaveDialogComponent implements OnInit {
  private dialogData = inject<IFilterSaveDialogData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);

  public title = 'Save filter';
  public formGroup = new FormGroup({
    name: new FormControl<string | null>(null, {
      validators: [Validators.required]
    }),
    description: new FormControl(),
    isDefault: new FormControl()
  });

  public ngOnInit() {
    this.formGroup.patchValue(this.dialogData);
  }

  public onSave() {
    this.dialogRef.close(this.formGroup.value);
  }

  public onCancel() {
    this.formGroup.markAsPristine();
    this.dialogRef.close(false);
  }
}

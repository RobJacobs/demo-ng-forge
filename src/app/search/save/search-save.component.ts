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

import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';
import { DialogTemplateComponent } from 'src/app/shared/components/dialog-template/dialog-template.component';

export interface ISearchSaveDialogData {
  id: number;
  name: string;
  description: string;
  isDefault: boolean;
  isPublic: boolean;
  filters: { property: string; value: string }[];
}
@Component({
  selector: 'app-search-save',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeTextFieldModule,
    FormControlInvalidDirective,
    DialogTemplateComponent
  ],
  templateUrl: './search-save.component.html',
  styleUrls: ['./search-save.component.scss']
})
export class SearchSaveComponent implements OnInit {
  private dialogConfig = inject<ISearchSaveDialogData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);

  public record: ISearchSaveDialogData;
  public formGroup = new FormGroup({
    name: new FormControl<string | null>(null, {
      validators: [Validators.required]
    }),
    description: new FormControl(),
    isDefault: new FormControl(),
    isPublic: new FormControl()
  });

  public ngOnInit() {
    this.record = this.dialogConfig;
    this.formGroup.patchValue(this.record);
  }

  public onSave() {
    this.dialogRef.close({ ...this.record, ...this.formGroup.getRawValue() });
  }

  public onCancel() {
    this.formGroup.markAsPristine();
    this.dialogRef.close(false);
  }
}

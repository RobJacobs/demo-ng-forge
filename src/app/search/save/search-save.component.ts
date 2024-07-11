import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DIALOG_DATA, DialogRef, ForgeButtonModule, ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

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
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ForgeButtonModule, ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule, AutoFocusDirective, FormControlInvalidDirective, DialogComponent],
  templateUrl: './search-save.component.html',
  styleUrls: ['./search-save.component.scss']
})
export class SearchSaveComponent {
  private dialogConfig = inject<ISearchSaveDialogData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);

  public record: ISearchSaveDialogData;
  public formGroup = new FormGroup({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    description: new FormControl(),
    isDefault: new FormControl(),
    isPublic: new FormControl()
  });

  constructor() {
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

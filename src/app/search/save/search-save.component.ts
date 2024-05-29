import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DialogConfig, DialogRef, ForgeButtonModule, ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';

@Component({
  selector: 'app-search-save',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeTextFieldModule,
    AutoFocusDirective,
    FormControlInvalidDirective
  ],
  templateUrl: './search-save.component.html',
  styleUrls: ['./search-save.component.scss'],
  hostDirectives: [CdkTrapFocus]
})
export class SearchSaveComponent {
  public dialogConfig = inject(DialogConfig);
  private dialogRef = inject(DialogRef);
  private trapFocusDirective = inject(CdkTrapFocus);

  public record: {
    id: number;
    name: string;
    description: string;
    isDefault: boolean;
    isPublic: boolean;
    filters: { property: string; value: string }[];
  };
  public formGroup = new FormGroup({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    description: new FormControl(),
    isDefault: new FormControl(),
    isPublic: new FormControl()
  });

  constructor() {
    this.record = this.dialogConfig.data;
    this.formGroup.patchValue(this.record);
    this.dialogRef.nativeElement.setAttribute('aria-labelledby', 'save-search--title');
    this.trapFocusDirective.autoCapture = true;
  }

  public onSave() {
    this.dialogRef.close(this.formGroup.getRawValue());
  }

  public onCancel() {
    this.formGroup.markAsPristine();
    this.dialogRef.close(false);
  }
}

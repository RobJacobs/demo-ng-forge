import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogConfig, DialogRef } from '@tylertech/forge-angular';

@Component({
  selector: 'app-search-save',
  templateUrl: './search-save.component.html',
  styleUrls: ['./search-save.component.scss']
})
export class SearchSaveComponent {
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

  constructor(
    public dialogConfig: DialogConfig,
    private dialogRef: DialogRef
  ) {
    this.record = dialogConfig.data;
    this.formGroup.patchValue(this.record);
  }

  public onSave() {
    this.dialogRef.close(this.parseFormGroup());
  }

  public onCancel() {
    this.dialogRef.close(false);
  }

  private parseFormGroup() {
    return {
      id: this.record.id,
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
      isDefault: this.formGroup.value.isDefault,
      isPublic: this.formGroup.value.isPublic,
      filters: this.record.filters
    };
  }
}

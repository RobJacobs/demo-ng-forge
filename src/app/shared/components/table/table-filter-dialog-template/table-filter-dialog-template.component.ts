import { Component, inject, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogRef, ForgeButtonModule } from '@tylertech/forge-angular';

import { DialogTemplateComponent } from '../../dialog-template/dialog-template.component';

@Component({
  selector: 'app-table-filter-dialog-template',
  imports: [ReactiveFormsModule, ForgeButtonModule, DialogTemplateComponent],
  templateUrl: './table-filter-dialog-template.component.html',
  styleUrl: './table-filter-dialog-template.component.scss'
})
export class TableFilterDialogTemplateComponent {
  private dialogRef = inject(DialogRef);

  public filterTitle = input('Filter records');
  public filterFormGroup = input.required<FormGroup>();
  public filter = output();

  public onCancel() {
    this.dialogRef.close();
  }

  public onClear() {
    this.filterFormGroup().reset();
  }

  public onApply() {
    this.filter.emit();
  }
}

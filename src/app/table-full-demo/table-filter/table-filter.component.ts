import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogRef, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { TableFilterDialogTemplateComponent } from 'src/app/shared/components/table/table-filter-dialog-template/table-filter-dialog-template.component';

@Component({
  selector: 'app-table-filter',
  imports: [ReactiveFormsModule, TableFilterDialogTemplateComponent, ForgeTextFieldModule],
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.scss'
})
export class TableFilterComponent {
  private dialogRef = inject(DialogRef);
  public formGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    occupation: new FormControl('')
  });

  public onFilter() {
    this.dialogRef.close(this.formGroup.getRawValue());
  }
}

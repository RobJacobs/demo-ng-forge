import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogConfig, DialogRef } from '@tylertech/forge-angular';
import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  standalone: true,
  imports: [
    AutoFocusDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfirmDialogComponent {
  public title: string;
  public message: string;

  constructor(public dialogConfig: DialogConfig, private dialogRef: DialogRef) {
    this.title = dialogConfig.data.title;
    this.message = dialogConfig.data.message;
  }

  public onClose(response = false): void {
    this.dialogRef.close(response);
  }
}

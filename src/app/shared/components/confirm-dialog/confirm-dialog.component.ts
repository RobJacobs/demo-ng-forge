import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

import { DialogTemplateComponent } from 'src/app/shared/components/dialog-template/dialog-template.component';
import { AutoFocusDirective } from 'src/app/shared/directives';

export interface IConfirmDialogData {
  title?: string;
  label?: string;
  description?: string;
  message: string;
  showFooter?: boolean;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  imports: [CommonModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, DialogTemplateComponent, AutoFocusDirective]
})
export class ConfirmDialogComponent implements OnInit {
  public dialogData = inject<IConfirmDialogData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);

  public ngOnInit() {
    if (!this.dialogData.confirmText?.length) {
      this.dialogData.confirmText = 'Ok';
    }
    if (!this.dialogData.cancelText?.length) {
      this.dialogData.cancelText = 'Cancel';
    }
  }

  public onClose(response = false) {
    this.dialogRef.close(response);
  }
}

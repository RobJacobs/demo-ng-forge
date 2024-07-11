import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { isDefined } from '@tylertech/forge-core';
import { DIALOG_DATA, DialogRef, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule } from '@tylertech/forge-angular';
import { DialogComponent } from '../dialog/dialog.component';

export interface IConfirmDialogData {
  title: string;
  message: string;
  showFooter?: boolean;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, DialogComponent]
})
export class ConfirmDialogComponent {
  public dialogConfig = inject<IConfirmDialogData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);

  public dialogTitle: string;
  public message: string;
  public showFooter?: boolean;

  constructor() {
    this.dialogTitle = this.dialogConfig.title;
    this.message = this.dialogConfig.message;
    this.showFooter = isDefined(this.dialogConfig.showFooter) ? this.dialogConfig.showFooter : true;
  }

  public onClose(response = false) {
    this.dialogRef.close(response);
  }
}

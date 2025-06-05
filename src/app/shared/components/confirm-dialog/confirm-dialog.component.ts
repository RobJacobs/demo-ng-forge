import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { isDefined } from '@tylertech/forge-core';
import { DIALOG_DATA, DialogRef, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule } from '@tylertech/forge-angular';
import { DialogTemplateComponent } from 'src/app/shared/components/dialog-template/dialog-template.component';

export interface IConfirmDialogData {
  title: string;
  message: string;
  showFooter?: boolean;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  imports: [CommonModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, DialogTemplateComponent]
})
export class ConfirmDialogComponent implements OnInit {
  public dialogData = inject<IConfirmDialogData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);

  public dialogTitle: string;
  public message: string;
  public showFooter?: boolean;

  public ngOnInit() {
    this.dialogTitle = this.dialogData.title;
    this.message = this.dialogData.message;
    this.showFooter = isDefined(this.dialogData.showFooter) ? this.dialogData.showFooter : true;
  }

  public onClose(response = false) {
    this.dialogRef.close(response);
  }
}

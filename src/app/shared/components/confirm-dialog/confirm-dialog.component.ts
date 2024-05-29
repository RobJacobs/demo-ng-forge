import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { isDefined } from '@tylertech/forge-core';
import { DialogConfig, DialogRef, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ForgeButtonModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    AutoFocusDirective
  ],
  hostDirectives: [CdkTrapFocus]
})
export class ConfirmDialogComponent {
  public dialogConfig = inject(DialogConfig);
  private dialogRef = inject(DialogRef);
  private trapFocusDirective = inject(CdkTrapFocus);

  public title: string;
  public message: string;
  public showFooter?: boolean;

  constructor() {
    this.title = this.dialogConfig.data.title;
    this.message = this.dialogConfig.data.message;
    this.showFooter = isDefined(this.dialogConfig.data.showFooter) ? this.dialogConfig.data.showFooter : true;
    this.trapFocusDirective.autoCapture = true;
  }

  public onClose(response = false): void {
    this.dialogRef.close(response);
  }
}

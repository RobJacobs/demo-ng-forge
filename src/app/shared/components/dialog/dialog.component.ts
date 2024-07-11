import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { DialogRef, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { Utils } from 'src/utils';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  private dialogRef = inject(DialogRef);

  public id = Utils.elementId('app-');
  @Input({ required: true })
  public dialogTitle?: string;
  @Input()
  public showFooter = true;

  constructor() {
    this.dialogRef.nativeElement.setAttribute('aria-labelledby', `${this.id}--title`);
  }

  public onClose() {
    this.dialogRef.close();
  }
}

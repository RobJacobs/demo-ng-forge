import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DialogRef, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { Utils } from 'src/utils';

@Component({
  selector: 'app-dialog-template',
  standalone: true,
  imports: [CommonModule, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule],
  templateUrl: './dialog-template.component.html',
  styleUrl: './dialog-template.component.scss'
})
export class DialogTemplateComponent {
  private dialogRef = inject(DialogRef);

  public id = Utils.elementId('app-');
  @Input({ required: true })
  public dialogTitle?: string;
  @Input()
  showClose = true;
  @Input()
  public showFooter = true;
  @Output()
  public dialogClose = new EventEmitter();

  constructor() {
    this.dialogRef.nativeElement.setAttribute('aria-labelledby', `${this.id}--title`);
  }

  public onClose() {
    this.dialogClose.emit();
  }
}

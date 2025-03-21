import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DialogRef, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { Utils } from 'src/utils';

@Component({
  selector: 'app-dialog-template',
  imports: [CommonModule, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule],
  templateUrl: './dialog-template.component.html',
  styleUrl: './dialog-template.component.scss'
})
export class DialogTemplateComponent {
  private dialogRef = inject(DialogRef);

  @Input()
  public id = `${Utils.elementId('app-')}--title`;
  @Input()
  public showHeader = true;
  @Input()
  public showClose = true;
  @Input()
  public dialogTitle?: string;
  @Input()
  public showFooter = true;
  @Output()
  public dialogClose = new EventEmitter();

  public ngOnInit() {
    this.dialogRef.nativeElement.setAttribute('aria-labelledby', `${this.id}`);
  }

  public onClose() {
    this.dialogClose.emit();
  }
}

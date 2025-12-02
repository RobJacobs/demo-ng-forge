import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { DialogRef, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule, ForgeTooltipModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-dialog-template',
  imports: [ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeTooltipModule, ForgeToolbarModule],
  templateUrl: './dialog-template.component.html',
  styleUrl: './dialog-template.component.scss'
})
export class DialogTemplateComponent implements OnInit {
  private dialogRef = inject(DialogRef);

  @Input()
  public showHeader = true;
  @Input()
  public showClose = true;
  @Input()
  public dialogTitle?: string;
  @Input()
  public dialogLabel?: string;
  @Input()
  public dialogDescription?: string;
  @Input()
  public showFooter = true;
  @Output()
  public dialogClose = new EventEmitter();

  public ngOnInit() {
    if (!this.dialogLabel?.length) {
      this.dialogLabel = this.dialogTitle;
    }
    this.dialogRef.nativeElement.setAttribute('label', this.dialogLabel);
    if (this.dialogDescription?.length) {
      this.dialogRef.nativeElement.setAttribute('description', this.dialogDescription);
    }
  }

  public onClose() {
    this.dialogClose.emit();
  }
}

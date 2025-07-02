import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { DialogRef, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { Utils } from 'src/utils';

@Component({
  selector: 'app-dialog-template',
  imports: [CommonModule, ForgeIconButtonModule, ForgeIconModule, ForgeScaffoldModule, ForgeToolbarModule],
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

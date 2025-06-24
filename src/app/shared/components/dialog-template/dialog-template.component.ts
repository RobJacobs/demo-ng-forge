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

  @Input({ required: true })
  public label: string;
  @Input()
  public description: string;
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
    this.dialogRef.nativeElement.setAttribute('label', this.label);
    if (this.description?.length) {
      this.dialogRef.nativeElement.setAttribute('description', this.description);
    }
  }

  public onClose() {
    this.dialogClose.emit();
  }
}

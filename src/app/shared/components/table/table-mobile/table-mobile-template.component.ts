import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TableTemplateBuilder } from '@tylertech/forge';
@Component({
  selector: 'app-table-mobile-template',
  imports: [CommonModule],
  styles: ':host { display: contents; }',
  template: '<div #content></div>'
})
export class TableMobileTemplateComponent implements AfterViewInit {
  @ViewChild('content')
  private contentRef: ElementRef;

  @Input({ required: true })
  public template: TableTemplateBuilder;
  @Input({ required: true })
  public rowIndex: number;
  @Input({ required: true })
  public rowData: any;

  public ngAfterViewInit() {
    this.template(this.rowIndex, this.contentRef.nativeElement, this.rowData, -1);
  }
}

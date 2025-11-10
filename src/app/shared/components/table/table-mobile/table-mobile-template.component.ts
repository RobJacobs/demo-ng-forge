import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { isDefined, isNumber, isString } from '@tylertech/forge-core';
import { ITableTemplateBuilderResult, TableTemplateBuilder } from '@tylertech/forge';
@Component({
  selector: 'app-table-mobile-template',
  imports: [CommonModule],
  styles: ':host { display: contents; } .content { display: flex; flex-wrap: wrap; }',
  template: '<div #content class="content"></div>'
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
    const templateResult = this.template(this.rowIndex, this.contentRef.nativeElement, this.rowData, -1);

    if (templateResult instanceof Promise) {
      templateResult.then((promiseResult) => {
        this.contentRef.nativeElement.appendChild(promiseResult);
      });
    } else {
      this.appendContent(templateResult);
    }
  }

  private appendContent(result: string | HTMLElement | ITableTemplateBuilderResult) {
    if (!isDefined(result)) {
      return;
    }

    if (result instanceof HTMLElement) {
      this.contentRef.nativeElement.appendChild(result);
      // eslint-disable-next-line no-prototype-builtins
    } else if (result.hasOwnProperty('content')) {
      this.contentRef.nativeElement.appendChild((result as ITableTemplateBuilderResult).content);
    } else if ((isString(result) || isNumber(result)) && result.toString().length) {
      (this.contentRef.nativeElement as HTMLElement).innerText = result as string;
    }
  }
}

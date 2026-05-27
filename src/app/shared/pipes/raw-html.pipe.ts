import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'appRawHtml' })
export class RawHtmlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(html: string) {
    html = html.replaceAll('<', '&lt').replaceAll('>', '&gt');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

import { AfterViewInit, Directive, ElementRef, Input, booleanAttribute, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {
  private element = inject(ElementRef);

  @Input({ transform: booleanAttribute })
  public appAutoFocus?: boolean;

  public ngAfterViewInit() {
    if (this.appAutoFocus !== false) {
      window.requestAnimationFrame(() => {
        this.element.nativeElement.focus();
      });
    }
  }
}

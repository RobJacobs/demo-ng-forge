import { AfterViewInit, Directive, ElementRef, booleanAttribute, inject, input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {
  private element = inject(ElementRef);

  public readonly appAutoFocus = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  public ngAfterViewInit() {
    if (this.appAutoFocus() !== false) {
      window.requestAnimationFrame(() => {
        this.element.nativeElement.focus();
      });
    }
  }
}

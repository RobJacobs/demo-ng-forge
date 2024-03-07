import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {
  private element = inject(ElementRef);

  public ngAfterViewInit() {
    window.requestAnimationFrame(() => {
      this.element.nativeElement.focus();
    });
  }
}

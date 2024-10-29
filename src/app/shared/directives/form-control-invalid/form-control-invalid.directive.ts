import { DestroyRef, Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, delay, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';

@Directive({
  selector: '[appFormControlInvalid]',
  standalone: true
})
export class FormControlInvalidDirective implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  @Input({ alias: 'appFormControlInvalid', required: true })
  public control!: AbstractControl;

  public ngOnInit() {
    const blur$ = fromEvent<FocusEvent>(this.elementRef.nativeElement, 'focusout').pipe(delay(0));
    const statusChanges$ = this.control.statusChanges.pipe(startWith(this.control.status));

    combineLatest({ event: blur$, status: statusChanges$ })
      .pipe(
        map((value) => value.status === 'INVALID' && this.control.touched),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((shouldMarkInvalid) => {
        if (shouldMarkInvalid) {
          this.renderer.setAttribute(this.elementRef.nativeElement, 'invalid', '');
          this.renderer.addClass(this.elementRef.nativeElement, 'app--form-control-invalid');
        } else {
          this.renderer.removeAttribute(this.elementRef.nativeElement, 'invalid');
          this.renderer.removeClass(this.elementRef.nativeElement, 'app--form-control-invalid');
        }
      });
  }
}

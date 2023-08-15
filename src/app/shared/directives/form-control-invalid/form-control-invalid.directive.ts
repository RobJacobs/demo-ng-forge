
import { DestroyRef, Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, delay, distinctUntilChanged, fromEvent, map, startWith, takeUntil } from 'rxjs';

@Directive({
  selector: '[appFormControlInvalid]',
  standalone: true
})
export class FormControlInvalidDirective implements OnInit {
  private destroyRef = inject(DestroyRef);

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('appFormControlInvalid')
  public control: AbstractControl;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) { }

  public ngOnInit() {
    const blur$ = fromEvent(this.elementRef.nativeElement, 'focusout').pipe(delay(0));
    const statusChanges$ = this.control.statusChanges.pipe(startWith(this.control.status));

    combineLatest([blur$, statusChanges$]).pipe(
      map(([event, status]) => status === 'INVALID' && this.control.touched),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(shouldMarkInvalid => {
      if (shouldMarkInvalid) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'invalid', '');
        this.renderer.addClass(this.elementRef.nativeElement, 'app-form-control-invalid');
      } else {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'invalid');
        this.renderer.removeClass(this.elementRef.nativeElement, 'app-form-control-invalid');
      }
    });
  }
}
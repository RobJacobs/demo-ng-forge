import { AfterViewInit, DestroyRef, Directive, ElementRef, Renderer2, RendererStyleFlags2, inject, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, delay, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';

@Directive({
  selector: '[appFormControlInvalid]'
})
export class FormControlInvalidDirective implements AfterViewInit {
  private renderer = inject(Renderer2);
  private destroyRef = inject(DestroyRef);
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private inputElement: HTMLInputElement | HTMLTextAreaElement;
  private invalidMessageElement: HTMLElement = document.createElement('span');

  private tagName: string;

  public readonly control = input.required<AbstractControl>({
    alias: 'appFormControlInvalid'
  });

  public readonly invalidMessage = input<string | Map<string, string>>();

  constructor() {
    this.renderer.setAttribute(this.invalidMessageElement, 'slot', 'support-text');
    this.renderer.setAttribute(this.invalidMessageElement, 'aria-live', 'polite');
  }

  public ngAfterViewInit() {
    this.tagName = this.elementRef.nativeElement.tagName;
    this.inputElement = this.elementRef.nativeElement.querySelector('input');
    if (!this.inputElement) {
      this.inputElement = this.elementRef.nativeElement.querySelector('textarea');
    }

    if (this.tagName === 'FORGE-TEXT-FIELD') {
      if (this.elementRef.nativeElement.hasAttribute('required')) {
        this.renderer.setAttribute(this.inputElement, 'required', '');
      }
      this.renderer.setAttribute(this.invalidMessageElement, 'id', `${this.inputElement.id}--error`);
      this.renderer.setAttribute(this.inputElement, 'aria-describedby', this.invalidMessageElement.id);
    } else {
      this.renderer.setAttribute(this.invalidMessageElement, 'id', `${this.elementRef.nativeElement.id}--error`);
      this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-describedby', this.invalidMessageElement.id);
    }
    this.renderer.appendChild(this.elementRef.nativeElement, this.invalidMessageElement);

    const blur$ = fromEvent<FocusEvent>(this.elementRef.nativeElement, 'focusout').pipe(delay(0));
    const statusChanges$ = this.control().statusChanges.pipe(startWith(this.control().status));
    const valueChanges$ = this.control().valueChanges.pipe(startWith(this.control().value));

    this.setValidity(this.control().invalid && this.control().touched);
    combineLatest({ event: blur$, status: statusChanges$, value: valueChanges$ })
      .pipe(
        map((evt) => ({ invalid: evt.status === 'INVALID' && this.control().touched, value: evt.value })),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (evt) => {
          this.setValidity(evt.invalid);
        }
      });
  }

  private setValidity(invalid: boolean) {
    if (invalid) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'invalid', '');
      if (this.tagName === 'FORGE-TEXT-FIELD') {
        this.renderer.setAttribute(this.inputElement, 'aria-invalid', 'true');
      } else {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-invalid', 'true');
      }
    } else {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'invalid');
      if (this.tagName === 'FORGE-TEXT-FIELD') {
        this.renderer.setAttribute(this.inputElement, 'aria-invalid', 'false');
      } else {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-invalid', 'false');
      }
    }

    this.setErrorDisplay();
  }

  private setErrorDisplay() {
    if (this.control().invalid && this.control().touched) {
      this.renderer.removeStyle(this.invalidMessageElement, 'display');
      this.renderer.removeStyle(this.elementRef.nativeElement, '--forge-field-support-text-margin-block', RendererStyleFlags2.DashCase);
      if (typeof this.invalidMessage() === 'string') {
        this.renderer.setProperty(this.invalidMessageElement, 'innerText', this.invalidMessage());
      } else {
        this.renderer.setProperty(
          this.invalidMessageElement,
          'innerText',
          (this.invalidMessage() as Map<string, string>).get(Object.keys(this.control().errors).at(0))
        );
      }
    } else {
      this.renderer.setStyle(this.invalidMessageElement, 'display', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, '--forge-field-support-text-margin-block', '0', RendererStyleFlags2.DashCase);
      this.renderer.setProperty(this.invalidMessageElement, 'innerText', '');
    }
  }
}

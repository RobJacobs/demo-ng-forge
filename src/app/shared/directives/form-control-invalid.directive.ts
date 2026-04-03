import { AfterViewInit, DestroyRef, Directive, ElementRef, Renderer2, RendererStyleFlags2, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, Validators } from '@angular/forms';
import { combineLatest, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';

export type FieldErrorMessages = Record<string, (...args: any[]) => string>;

export const defaultErrorMessages: FieldErrorMessages = {
  required: () => 'Required',
  max: (error: { max: number }) => `Must be ${error.max} or less`,
  min: (error: { min: number }) => `Must be ${error.min} or greater`,
  exactLength: (error: { exactLength: number }) => `Must be ${error.exactLength} characters`,
  maxlength: (error: { requiredLength: number }) => `Must be ${error.requiredLength} or fewer characters`,
  minlength: (error: { requiredLength: number }) => `Must be at least ${error.requiredLength} characters`,
  integer: () => 'Only whole numbers are allowed'
};

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

  public readonly invalidMessage = input<string | FieldErrorMessages>(defaultErrorMessages);

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

    const required = this.control().hasValidator(Validators.required);
    if (required) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'required', '');
    }

    if (this.tagName === 'FORGE-TEXT-FIELD') {
      if (required) {
        this.renderer.setAttribute(this.inputElement, 'required', '');
      }
      this.renderer.setAttribute(this.invalidMessageElement, 'id', `${this.inputElement.id}--error`);
      this.renderer.setAttribute(this.inputElement, 'aria-describedby', this.invalidMessageElement.id);
    } else {
      this.renderer.setAttribute(this.invalidMessageElement, 'id', `${this.elementRef.nativeElement.id}--error`);
      this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-describedby', this.invalidMessageElement.id);
    }
    this.renderer.appendChild(this.elementRef.nativeElement, this.invalidMessageElement);
    this.setErrorDisplay();

    const blur$ = fromEvent<FocusEvent>(this.elementRef.nativeElement, 'focusout');
    const statusChanges$ = this.control().statusChanges.pipe(startWith(this.control().status));
    const valueChanges$ = this.control().valueChanges.pipe(startWith(this.control().value));

    combineLatest({ event: blur$, status: statusChanges$, value: valueChanges$ })
      .pipe(
        map((evt) => ({ invalid: evt.status === 'INVALID' && this.control().touched, errors: this.control().errors })),
        distinctUntilChanged((prev, curr) => prev.invalid === curr.invalid && prev.errors === curr.errors),
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
      if (!isDefined(this.invalidMessage())) {
        this.renderer.setProperty(this.invalidMessageElement, 'innerText', 'Invalid');
      } else if (typeof this.invalidMessage() === 'string') {
        this.renderer.setProperty(this.invalidMessageElement, 'innerText', this.invalidMessage());
      } else {
        this.renderer.setProperty(
          this.invalidMessageElement,
          'innerText',
          Object.entries(this.control().errors)
            .map<string>(([key, value]) => {
              return this.invalidMessage()[key](value) || undefined;
            })
            .filter((m) => m?.length)
        );
      }
    } else {
      this.renderer.setStyle(this.invalidMessageElement, 'display', 'none');
      this.renderer.setProperty(this.invalidMessageElement, 'innerText', '');
      if (!Array.from(this.elementRef.nativeElement.querySelectorAll('[slot="support-text"]')).filter((el) => el !== this.invalidMessageElement).length) {
        this.renderer.setStyle(this.elementRef.nativeElement, '--forge-field-support-text-margin-block', '0', RendererStyleFlags2.DashCase);
      }
    }
  }
}

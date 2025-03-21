import { Directive, ElementRef, HostListener, Input, Renderer2, StaticProvider, booleanAttribute, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ICheckboxComponent } from '@tylertech/forge';

export const CHECKBOX_THREE_STATE_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxThreeStateDirective),
  multi: true
};

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'forge-checkbox[formControlName],forge-checkbox[formControl],forge-checkbox[ngModel]',
  providers: [CHECKBOX_THREE_STATE_VALUE_ACCESSOR]
})
export class CheckboxThreeStateDirective implements ControlValueAccessor {
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef<ICheckboxComponent>);
  private value?: boolean | null;
  private threeStateEnabled = false;

  @HostListener('change', ['$event'])
  public hostChange(evt: CustomEvent<void>) {
    if (this.threeStateEnabled) {
      this.value = this.value === true ? false : this.value === false ? null : true;
      this.setCheckboxState();
    } else {
      this.value = this.elementRef.nativeElement.checked;
    }
    this.onChange(this.value);
    this.onTouched();
  }

  @HostListener('blur')
  public hostBlur() {
    this.onTouched();
  }

  @Input({ transform: booleanAttribute })
  public set threeState(value: boolean) {
    if (this.threeStateEnabled !== value) {
      this.threeStateEnabled = value;
      if (!this.threeStateEnabled && this.elementRef.nativeElement.indeterminate) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', false);
        this.value = false;
      }
      this.setCheckboxState();
    }
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  public writeValue(value: boolean | null) {
    if (this.value !== value) {
      this.value = value;
      this.setCheckboxState();
    }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public setDisabledState?(value: boolean) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', value);
  }

  private setCheckboxState() {
    if (this.threeStateEnabled) {
      if (this.value === true) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', false);
        requestAnimationFrame(() => {
          this.renderer.setProperty(this.elementRef.nativeElement, 'checked', true);
        });
      } else if (this.value === false) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', false);
        requestAnimationFrame(() => {
          this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
        });
      } else {
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
        requestAnimationFrame(() => {
          this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', true);
        });
      }
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', !!this.value);
    }
  }
}

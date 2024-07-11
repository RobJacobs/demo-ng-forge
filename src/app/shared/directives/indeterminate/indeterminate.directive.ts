import { Directive, ElementRef, forwardRef, HostListener, inject, Input, Renderer2 } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isDefined } from '@tylertech/forge-core';

export const INDETERMINATE_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IndeterminateDirective),
  multi: true
};

@Directive({
  selector: '[appIndeterminate]',
  standalone: true,
  providers: [INDETERMINATE_VALUE_ACCESSOR]
})
export class IndeterminateDirective implements ControlValueAccessor {
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private value?: boolean | null;
  private indeterminateEnabled = true;

  @HostListener('change')
  public elementChange() {
    if (this.indeterminateEnabled) {
      this.value === true ? false : this.value === false ? null : true;
      this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', !isDefined(this.value));
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', this.value ? true : false);
    } else {
      this.value = (this.elementRef.nativeElement as HTMLInputElement).checked;
    }

    this.onChange(this.value);
    this.onTouched();
  }
  @HostListener('blur')
  public elementBlur() {
    this.onTouched();
  }

  @Input()
  public set appIndeterminate(value: boolean) {
    this.indeterminateEnabled = value?.toString() === 'false' ? false : true;
    if (!this.indeterminateEnabled && (this.elementRef.nativeElement as HTMLInputElement).indeterminate) {
      (this.elementRef.nativeElement as HTMLInputElement).indeterminate = false;
      (this.elementRef.nativeElement as HTMLInputElement).checked = false;
      this.value = false;
      this.onChange(this.value);
    }
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  public writeValue(value: any) {
    if (this.value !== value) {
      this.value = value;
      if (this.indeterminateEnabled) {
        (this.elementRef.nativeElement as HTMLInputElement).indeterminate = !isDefined(this.value);
      }
      (this.elementRef.nativeElement as HTMLInputElement).checked = this.value ? true : false;
    }
  }

  public registerOnChange(fn: (_: boolean) => void) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}

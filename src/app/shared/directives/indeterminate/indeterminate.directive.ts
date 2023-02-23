import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
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
  #value: boolean | null;
  #indeterminateEnabled = true;

  @HostListener('change')
  public elementChange() {
    if (this.#indeterminateEnabled) {
      if (!isDefined(this.#value)) {
        this.#value = true;
      } else if (this.#value) {
        this.#value = false;
      } else {
        this.#value = null;
      }
      (this.elementRef.nativeElement as HTMLInputElement).indeterminate = !isDefined(this.#value);
      (this.elementRef.nativeElement as HTMLInputElement).checked = this.#value ? true : false;
    } else {
      this.#value = (this.elementRef.nativeElement as HTMLInputElement).checked;
    }

    this.change(this.#value);
    this.onTouched();
  }
  @HostListener('blur')
  public elementBlur() {
    this.onTouched();
  }

  @Input()
  public set appIndeterminate(value: boolean) {
    this.#indeterminateEnabled = value?.toString() === 'false' ? false : true;
    if (!this.#indeterminateEnabled && (this.elementRef.nativeElement as HTMLInputElement).indeterminate) {
      (this.elementRef.nativeElement as HTMLInputElement).indeterminate = false;
      (this.elementRef.nativeElement as HTMLInputElement).checked = false;
      this.#value = false;
      this.change(this.#value);
    }
  }

  public onChange = (_: any) => { };
  public onTouched = () => { };

  constructor(private elementRef: ElementRef) { }

  public writeValue(value: any): void {
    if (this.#value !== value) {
      this.#value = value;
      if (this.#indeterminateEnabled) {
        (this.elementRef.nativeElement as HTMLInputElement).indeterminate = !isDefined(this.#value);
      }
      (this.elementRef.nativeElement as HTMLInputElement).checked = this.#value ? true : false;
    }
  }

  public registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public change(value: boolean | null): void {
    this.onChange(value);
  }
}

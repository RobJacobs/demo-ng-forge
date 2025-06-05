import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseValueAccessorComponent implements ControlValueAccessor {
  #value: any;
  get value(): any {
    return this.#value;
  }
  set value(value: any) {
    this.#value = value;
  }

  public onChange = (fn: any) => {};
  public onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public abstract writeValue(value: any): void;
}

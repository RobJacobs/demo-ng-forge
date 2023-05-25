import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseValueAccessorComponent implements ControlValueAccessor {
  #value: any;
  get value(): any {
    return this.#value;
  }
  set value(value: any) {
    this.#value = value;
  }

  constructor() { }

  public onChange = (fn: any) => { };
  public onTouched = () => { };

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  abstract writeValue(value: any): void;
}

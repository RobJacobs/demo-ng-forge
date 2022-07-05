import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseValueAccessorComponent implements ControlValueAccessor {
  private pValue: any;
  get value(): any {
    return this.pValue;
  }
  set value(value: any) {
    this.pValue = value;
  }

  constructor() {}

  public onChange = (fn: any) => {};
  public onTouched = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  abstract writeValue(value: any): void;
}

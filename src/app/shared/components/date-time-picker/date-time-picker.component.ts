import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  HostBinding,
  Injector,
  OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl, NgControl } from '@angular/forms';
import { isValid as isValidDate } from 'date-fns';
import { skipWhile } from 'rxjs';

import { AppFormsModule } from 'src/app/shared/app-forms.module';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  standalone: true,
  imports: [CommonModule, AppFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateTimePickerComponent), multi: true }]
})
export class DateTimePickerComponent implements OnInit, ControlValueAccessor {
  private writingValue = false;
  private timeRegExp = new RegExp(/\d{2}:\d{2}/g);
  private ngControl: NgControl;

  @HostListener('focusout', ['$event'])
  public componentBlur() {
    this.onTouched();
  }
  @HostBinding('attr.invalid')
  public get attributeInvalid() {
    return this.ngControl?.invalid ? '' : null;
  }

  public onChange = (fn: any) => { };
  public onTouched = () => { };

  public formGroup = new FormGroup({
    date: new FormControl<Date | null>(null),
    time: new FormControl<string | null>(null)
  });

  constructor(
    private injector: Injector,
  ) {
    this.formGroup.valueChanges.pipe(
      skipWhile(() => this.writingValue)
    ).subscribe(value => {
      if (isValidDate(value.date) && value.time?.match(this.timeRegExp)) {
        this.onChange(new Date(Date.UTC(
          value.date.getFullYear(),
          value.date.getMonth(),
          value.date.getDate(),
          parseInt(value.time.split(':')[0], 10),
          parseInt(value.time.split(':')[1], 10)
        )));
      }
    });
  }

  public ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
  }

  public writeValue(value?: Date) {
    this.writingValue = true;
    const date = new Date(value);
    if (isValidDate(value)) {
      this.formGroup.patchValue({ date, time: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}` }, { emitEvent: false, onlySelf: true });
    } else {
      this.formGroup.patchValue({ date: null, time: null }, { emitEvent: false, onlySelf: true });
    }
    requestAnimationFrame(() => {
      this.writingValue = false;
    });
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean) {
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

}
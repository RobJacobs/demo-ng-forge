import { CommonModule } from '@angular/common';
import { Component, forwardRef, ViewChild, Input, HostListener, OnInit, inject, DestroyRef, viewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule, ControlValueAccessor } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isValid as dateIsValid, parse as dateParse, format as dateFormat } from 'date-fns';
import * as IMask from 'imask';
import { IMaskDirective } from 'angular-imask';
import { CALENDAR_CONSTANTS, CalendarComponent, ICalendarDateSelectEventData, IPopoverToggleEventData, mergeDateWithTime } from '@tylertech/forge';
import { isDefined } from '@tylertech/forge-core';
import { ForgeCalendarModule, ForgeDividerModule, ForgeIconButtonModule, ForgeIconModule, ForgePopoverModule, ForgeTextFieldModule, ForgeTimePickerModule } from '@tylertech/forge-angular';

import { Utils } from 'src/utils';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IMaskDirective, ForgeCalendarModule, ForgeDividerModule, ForgeIconButtonModule, ForgeIconModule, ForgePopoverModule, ForgeTextFieldModule, ForgeTimePickerModule],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateTimeComponent), multi: true }]
})
export class DateTimeComponent implements OnInit, ControlValueAccessor {
  @ViewChild('dateTimeInput', { static: true })
  private dateTimeInputElementRef: ElementRef<HTMLInputElement>;
  @ViewChild('timeInput', { static: true })
  private timeInputElementRef: ElementRef<HTMLInputElement>;
  @ViewChild('calendar')
  private calendarElementRef: ElementRef<CalendarComponent>;
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef);
  private timeFormat = 'hh:mm aa';

  @HostListener('focusout', ['$event'])
  public componentFocusout() {
    setTimeout(() => {
      if (!(this.elementRef.nativeElement as HTMLElement).contains(document.activeElement)) {
        this.onTouched();
      }
    }, 100);
  }

  @Input()
  public label?: string;

  #timePrecision: 'm' | 's' = 'm';
  @Input()
  public set timePrecision(value: 'm' | 's') {
    this.#timePrecision = value;
    switch (this.#timePrecision) {
      case 'm':
        this.timeFormat = 'hh:mm aa';
        break;
      case 's':
        this.timeFormat = 'hh:mm:ss aa';
        break;
    }
    if (this.mask) {
      this.mask = this.buildDateTimeMask();
    }
  }
  public get timePrecision(): 'm' | 's' {
    return this.#timePrecision;
  }

  @Input()
  /* eslint @typescript-eslint/no-unused-expressions: 0 */
  public set disabled(value: boolean) {
    value ? this.dateTime.disable() : this.dateTime.enable();
  }

  public mask?: IMask.MaskedDate;
  public id = Utils.elementId('app-');
  public time = new FormControl<string | null>(null);
  public dateTime = new FormControl<Date | null>(null);

  public onChange = (fn: any) => {};
  public onTouched = () => {};

  constructor() {
    this.dateTime.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.onChange(value);
    });

    this.time.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      const date = dateParse(this.mask!.value.substring(0, 10), 'MM/dd/yyyy', new Date());
      if (isDefined(value) && dateIsValid(date)) {
        this.dateTime.setValue(mergeDateWithTime(date, value as string, this.timePrecision === 's'));
      }
    });
  }

  public ngOnInit() {
    if (!this.mask) {
      this.mask = this.buildDateTimeMask();
    }
  }

  public onPopoverToggle(event: CustomEvent<IPopoverToggleEventData>) {
    if (event.detail.newState === 'closed') {
      if (!document.activeElement || document.activeElement === document.body) {
        this.dateTimeInputElementRef.nativeElement.focus();
      }
    }
  }

  public onDateSelected(event: CustomEvent<ICalendarDateSelectEventData>) {
    let selectedDate = event.detail.date;
    if (isDefined(this.time.value)) {
      selectedDate = mergeDateWithTime(selectedDate, this.time.value as string, this.timePrecision === 's');
    }
    this.dateTime.setValue(selectedDate);
  }

  public onKeyDown(event: KeyboardEvent) {
    if (event.target === this.timeInputElementRef.nativeElement) {
      event.preventDefault();
      ((this.calendarElementRef.nativeElement as HTMLElement)?.shadowRoot?.querySelector(CALENDAR_CONSTANTS.selectors.PREVIOUS_BUTTON) as HTMLElement)?.focus();
    }
  }

  public writeValue(value?: Date) {
    this.dateTime.setValue(value as Date);
    this.setTimeValue(value);
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public setDisabledState(value: boolean) {
    if (value) {
      this.dateTime.disable();
    } else {
      this.dateTime.enable();
    }
  }

  private buildDateTimeMask(): IMask.MaskedDate {
    return new IMask.MaskedDate({
      mask: Date,
      pattern: this.timePrecision === 's' ? 'MM/`dd/`yyyy `hh:`mm:`ss `a`M' : 'MM/`dd/`yyyy `hh:`mm `a`M',
      placeholderChar: ' ',
      blocks: {
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        } as IMask.FactoryArg,
        dd: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        } as IMask.FactoryArg,
        yyyy: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: 9999,
          maxLength: 4
        } as IMask.FactoryArg,
        hh: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        } as IMask.FactoryArg,
        mm: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 59,
          maxLength: 2
        } as IMask.FactoryArg,
        ss: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 59,
          maxLength: 2
        } as IMask.FactoryArg,
        a: {
          mask: IMask.MaskedEnum,
          enum: ['A', 'P']
        } as IMask.FactoryArg
      },
      autofix: false,
      lazy: false,
      overwrite: false,
      format: (value: any): string => {
        return dateIsValid(value) ? dateFormat(value, `MM/dd/yyyy ${this.timeFormat}`).toUpperCase() : '';
      },
      parse: (value: string): Date => {
        return dateParse(value.toUpperCase(), `MM/dd/yyyy ${this.timeFormat}`, new Date());
      },
      prepare(chars, masked, flags) {
        return chars.toUpperCase();
      }
    });
  }

  private setTimeValue(value?: Date) {
    let timeValue = [0, 0, 0];
    if (dateIsValid(value)) {
      if (this.timePrecision === 's') {
        timeValue = [value!.getHours(), value!.getMinutes(), value!.getSeconds()];
      } else {
        timeValue = [value!.getHours(), value!.getMinutes(), 0];
      }
    }
    this.time.setValue(timeValue.map((v) => v.toString().padStart(2, '0')).join(':'));
  }
}

import { Component, ChangeDetectionStrategy, inject, DestroyRef, ElementRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ForgeDatePickerModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FormControlInvalidDirective } from '@app/shared/directives';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsDatePicker extends FormlyFieldPropsBase {
  maxDate?: string | Date;
  minDate?: string | Date;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-date-picker',
  template: `
    <forge-date-picker
      [formlyAttributes]="field"
      [formControl]="formControl"
      [max]="props.maxDate"
      [min]="props.minDate"
      (forge-date-picker-change)="onChange()"
    >
      <forge-text-field [required]="props.required" [appFormControlInvalid]="formControl">
        @if (props.label) {
          <label slot="label" [attr.for]="'--' + id">{{ props.label }}</label>
        }
        <input [id]="'--' + id" type="text" />
        @if (props.description) {
          <span slot="support-text">{{ props.description }}</span>
        }
      </forge-text-field>
    </forge-date-picker>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, FormlyModule, ForgeDatePickerModule, ForgeTextFieldModule, FormControlInvalidDirective]
})
export class FormlyDatePickerTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsDatePicker>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef);

  public ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'blur', { capture: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => isDefined(this.props?.blur) && !this.elementRef.nativeElement.contains((event as any).relatedTarget))
      )
      .subscribe((event) => {
        this.props.blur(this.field, event);
      });

    fromEvent(this.elementRef.nativeElement, 'focus', { capture: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => isDefined(this.props?.focus) && !this.elementRef.nativeElement.contains((event as any).relatedTarget))
      )
      .subscribe((event) => {
        this.props.focus(this.field, event);
      });
  }

  public onChange() {
    if (this.props?.change) {
      this.props.change(this.field);
    }
  }
}

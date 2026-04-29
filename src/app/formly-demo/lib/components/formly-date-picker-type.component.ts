import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeDatePickerModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FormControlInvalidDirective } from 'src/app/shared/directives';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-date-picker-type',
  template: `
    <forge-date-picker [formControl]="formControl" [max]="props.maxDate" [min]="props.minDate">
      <forge-text-field [required]="props.required" [appFormControlInvalid]="formControl">
        @if (props.label) {
          <label slot="label" [attr.for]="id">{{ props.label }}</label>
        }
        <input [id]="id" type="text" />
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
  imports: [ReactiveFormsModule, FormlyModule, ForgeDatePickerModule, ForgeTextFieldModule, FormControlInvalidDirective]
})
export class FormlyDatePickerTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

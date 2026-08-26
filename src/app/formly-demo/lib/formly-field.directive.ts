import { input } from '@angular/core';
import { Directive } from '@angular/core';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldPropsExtended } from './formly.constants';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formlyField]'
})
export class FormlyFieldDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  public field = input.required<FormlyFieldConfig<FormlyFieldPropsExtended>>();
  public formlyField = input.required<FormlyField>();
}

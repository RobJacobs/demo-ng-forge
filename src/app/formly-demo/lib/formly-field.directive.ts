import { input } from '@angular/core';
import { Directive } from '@angular/core';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldPropsBase } from './formly.constants';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formlyField]'
})
export class FormlyFieldDirective {
  public field = input.required<FormlyFieldConfig<FormlyFieldPropsBase>>();
  public formlyField = input.required<FormlyField>();
}

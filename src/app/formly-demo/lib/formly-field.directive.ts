import { computed, input } from '@angular/core';
import { Directive } from '@angular/core';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldPropsExtended } from './formly.constants';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formlyField]',
  host: {
    '[class.formly--container-block]': 'displayBlock()'
  }
})
export class FormlyFieldDirective {
  public field = input.required<FormlyFieldConfig<FormlyFieldPropsExtended>>();
  public formlyField = input.required<FormlyField>();
  public displayBlock = computed<boolean>(() => {
    return (
      this.field()?.props?.attributes &&
      (this.field()?.props?.attributes['style'] as string)?.length &&
      !(this.field()?.props?.attributes['style'] as string)?.includes('display')
    );
  });
}

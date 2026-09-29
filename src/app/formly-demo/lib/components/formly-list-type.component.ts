import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldArrayType, FieldGroupTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldPropsBase } from '../formly.constants';
import { FormlyFieldDirective } from '../formly-field.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-list-type',
  template: `
    @for (f of field.fieldGroup; track i; let i = $index) {
      <formly-field #formlyField [formlyField]="formlyField" [field]="f" [formlyAttributes]="f"></formly-field>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule, FormlyFieldDirective]
})
export class FormlyListTypeComponent extends FieldArrayType<FieldGroupTypeConfig<FormlyFieldPropsBase>> {}

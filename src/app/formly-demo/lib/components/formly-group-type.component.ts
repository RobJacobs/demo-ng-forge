import { Component } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldPropsExtended } from '../formly.constants';
import { FormlyFieldDirective } from '../formly-field.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-group',
  template: `
    @for (f of field.fieldGroup; track i; let i = $index) {
      <formly-field #formlyField [field]="f" [formlyField]="formlyField" [formlyAttributes]="f"></formly-field>
    }
    <ng-content></ng-content>
  `,
  imports: [FormlyModule, FormlyFieldDirective]
})
export class FormlyGroupTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsExtended>> {}

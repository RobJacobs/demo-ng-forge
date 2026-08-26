import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldPropsExtended } from '../formly.constants';
import { FormlyFieldDirective } from '../formly-field.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-group',
  template: `
    @for (f of field.fieldGroup; track i; let i = $index) {
      <formly-field #formlyField [formlyField]="formlyField" [field]="f" [formlyAttributes]="f"></formly-field>
    }
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule, FormlyFieldDirective]
})
export class FormlyGroupTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsExtended>> {}

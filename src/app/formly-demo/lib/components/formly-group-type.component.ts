import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { FORMLY_COMPONENT_TYPES, FormlyFieldPropsBase } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-group',
  template: `
    @for (field of field.fieldGroup; track i; let i = $index) {
      @if (!field.type?.length || containerComponents.includes($any(field).type)) {
        <formly-field
          [field]="field"
          [formlyAttributes]="field"
          [class.formly--container-block]="containerComponents.includes($any(field).type)"
        ></formly-field>
      } @else {
        <formly-field [field]="field"></formly-field>
      }
    }
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule]
})
export class FormlyGroupTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsBase>> {
  public containerComponents = [
    FORMLY_COMPONENT_TYPES.group,
    FORMLY_COMPONENT_TYPES.list,
    FORMLY_COMPONENT_TYPES.stepper,
    FORMLY_COMPONENT_TYPES.template,
    FORMLY_COMPONENT_TYPES.tabBar
  ];
}

import { Component } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { ForgeLabelValueModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-label-value-type',
  template: `
    <forge-label-value [id]="id">
      <div slot="label">{{ field.props['label'] }}</div>
      <div slot="value">{{ field.model[$any(field.key)] }}</div>
    </forge-label-value>
  `,
  imports: [FormlyModule, ForgeLabelValueModule],
  styles: `
    :host {
      display: contents;
    }
  `
})
export class FormlyLabelValueTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsExtended>> {}

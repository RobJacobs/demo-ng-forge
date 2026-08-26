import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { ForgePageStateModule } from '@tylertech/forge-angular';

import { FormlyFieldPropsExtended } from '../formly.constants';
import { FormlyFieldDirective } from '../formly-field.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-page-state-type',
  template: `
    <forge-page-state [id]="id">
      <img [src]="field.props.src" slot="graphic" alt="" />
      @if (field.props.label?.length) {
        <div slot="title">{{ field.props.label }}</div>
      }
      @if (field.props.description?.length) {
        <div slot="message">{{ field.props.description }}</div>
      }
      @if (field.fieldGroup?.length) {
        <div slot="action">
          @for (f of field.fieldGroup; track i; let i = $index) {
            <formly-field #formlyField [formlyField]="formlyField" [field]="f" [formlyAttributes]="f"></formly-field>
          }
        </div>
      }
    </forge-page-state>
  `,
  imports: [FormlyModule, FormlyFieldDirective, ForgePageStateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    :host {
      display: contents;
    }
  `
})
export class FormlyPageStateTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsExtended>> {}

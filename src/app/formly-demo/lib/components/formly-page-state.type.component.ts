import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { ForgePageStateModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsPageState extends FormlyFieldPropsBase {
  src?: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-page-state',
  template: `
    <forge-page-state [formlyAttributes]="field" [id]="'--' + id">
      <img [src]="field.props.src" slot="graphic" alt="" />
      @if (field.props.label?.length) {
        <div slot="title">{{ field.props.label }}</div>
      }
      @if (field.props.description?.length) {
        <div slot="message">{{ field.props.description }}</div>
      }
      @if (field.fieldGroup?.length) {
        <div slot="action">
          @for (field of field.fieldGroup; track i; let i = $index) {
            @if (field.fieldGroup?.length) {
              <formly-field [field]="field" [formlyAttributes]="field"></formly-field>
            } @else {
              <formly-field [field]="field"></formly-field>
            }
          }
        </div>
      }
    </forge-page-state>
  `,
  imports: [FormlyModule, ForgePageStateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    :host {
      display: contents;
    }
  `
})
export class FormlyPageStateTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsPageState>> {}

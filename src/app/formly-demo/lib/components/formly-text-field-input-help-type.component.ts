import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FieldHelpButtonComponent } from 'src/app/shared/components/field-help/field-help-button/field-help-button.component';
import { FormControlInvalidDirective } from 'src/app/shared/directives';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-text-field-input-help',
  template: `
    <forge-text-field [required]="props.required" [appFormControlInvalid]="formControl">
      @if (props.label) {
        <label slot="label" [attr.for]="id">{{ props.label }}</label>
      }
      <input [id]="id" type="text" [formControl]="formControl" />
      @if (props.description) {
        <span slot="support-text">{{ props.description }}</span>
      }
      <app-field-help-button slot="accessory" [control]="formControl" [config]="props.fieldHelpConfig"></app-field-help-button>
    </forge-text-field>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [ReactiveFormsModule, FormlyModule, ForgeTextFieldModule, FormControlInvalidDirective, FieldHelpButtonComponent]
})
export class FormlyTextFieldInputHelpTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

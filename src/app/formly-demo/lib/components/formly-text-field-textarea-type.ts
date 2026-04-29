import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FormControlInvalidDirective } from 'src/app/shared/directives';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-text-field-textarea-type',
  template: `
    <forge-text-field [required]="props.required" [appFormControlInvalid]="formControl">
      @if (props.label) {
        <label slot="label" [attr.for]="id">{{ props.label }}</label>
      }
      <textarea [id]="id" [cols]="props.cols" [rows]="props.rows" [formControl]="formControl"></textarea>
      @if (props.description) {
        <span slot="support-text">{{ props.description }}</span>
      }
    </forge-text-field>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [ReactiveFormsModule, FormlyModule, ForgeTextFieldModule, FormControlInvalidDirective]
})
export class FOrmlyTextFieldTextareaTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

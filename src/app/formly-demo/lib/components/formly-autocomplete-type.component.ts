import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconArrowDropDown } from '@tylertech/tyler-icons';
import { ForgeAutocompleteModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FormControlInvalidDirective } from 'src/app/shared/directives';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-autocomplete-type',
  template: `
    <forge-autocomplete [filter]="props.autocompleteFilter" [formControl]="formControl">
      <forge-text-field [required]="props.required" [appFormControlInvalid]="formControl">
        @if (props.label) {
          <label slot="label" [attr.for]="id">{{ props.label }}</label>
        }
        <input #input [id]="id" type="text" />
        <forge-icon slot="end" class="forge-dropdown-icon" name="arrow_drop_down"></forge-icon>
        @if (props.description) {
          <span slot="support-text">{{ props.description }}</span>
        }
      </forge-text-field>
    </forge-autocomplete>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [ReactiveFormsModule, FormlyModule, ForgeAutocompleteModule, ForgeTextFieldModule, ForgeIconModule, FormControlInvalidDirective]
})
export class FormlyAutocompleteTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {
  constructor() {
    super();
    IconRegistry.define([tylIconArrowDropDown]);
  }
}

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeCheckboxModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-checkbox-type',
  template: `
    <forge-checkbox [id]="id" [formControl]="formControl">
      {{ props.label }}
    </forge-checkbox>
  `,
  styles: `
    :host {
      display: contents;
    }

    forge-checkbox {
      width: fit-content;
    }
  `,
  imports: [ReactiveFormsModule, FormlyModule, ForgeCheckboxModule]
})
export class FormlyCheckboxTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

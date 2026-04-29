import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeLabelModule, ForgeRadioGroupModule, ForgeRadioModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-radio-type',
  template: `
    <forge-radio-group
      [attr.name]="'radio-group--' + id"
      [style.--formly--radio--orientation]="props.orientation === 'vertical' ? 'column' : 'row'"
      [style.--formly--radio--alignment]="props.orientation === 'vertical' ? 'flex-start' : 'center'"
    >
      @if (props.label) {
        <forge-label legend>{{ props.label }}</forge-label>
      }
      @for (option of props.radioOptions; track i; let i = $index) {
        <forge-radio [id]="'radio--' + i + '-' + id" [attr.name]="'radio-group--' + id" [value]="option.value" [formControl]="formControl">
          {{ option.label }}
        </forge-radio>
      }
    </forge-radio-group>
  `,
  styles: `
    :host {
      display: contents;
    }

    forge-radio-group {
      display: flex;
      flex-direction: var(--formly--radio--orientation, row);
      align-items: var(--formly--radio--alignment, flext-start);
      gap: 8px;
    }
  `,
  imports: [ReactiveFormsModule, FormlyModule, ForgeLabelModule, ForgeRadioGroupModule, ForgeRadioModule]
})
export class FormlyRadioTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

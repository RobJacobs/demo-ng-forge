import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeRadioGroupModule, ForgeRadioModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-formly-radio',
  template: `
    @if (props.label) {
      <label [attr.for]="id" slot="label">{{ props.label }}</label>
    }
    <forge-radio-group [name]="id + '-radio-group'">
      @for (option of $any(props.options); track i; let i = $index) {
        <forge-radio [id]="id + '-' + i" [name]="id + '-radio-group'" [value]="option.value" [formControl]="formControl" [formlyAttributes]="field">
          @if (option.label) {
            {{ option.label }}
          }
        </forge-radio>
      }
    </forge-radio-group>
    @if (showError) {
      <div class="forge-typography--label1">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }

      [role='radiogroup'] {
        margin-left: -8px;
        display: flex;
        column-gap: 16px;
        flex-direction: column;
      }

      forge-radio {
        &::part(container) {
          padding: 4px;
        }
      }

      .forge-typography--label1 {
        color: var(--forge-theme-error);
      }
    `
  ],
  imports: [ReactiveFormsModule, FormlyModule, ForgeRadioModule, ForgeRadioGroupModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioTypeComponent extends FieldType<FieldTypeConfig> {
  // @HostBinding('attr.role')
  // public roleAttribute = 'radiogroup';
}

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeRadioModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-formly-radio',
  template: `
    @if (props.label) {
      <label [attr.for]="id" slot="label">{{props.label}}</label>
    }
    <div role="radiogroup">
      @for (option of $any(props.options); track i; let i = $index) {
        <forge-radio>
          <input
            type="radio"
            [id]="id + '-' + i"
            [value]="option.value"
            [formControl]="formControl"
            [formlyAttributes]="field" />
          @if (option.label) {
            <label [for]="id + '-' + i">{{option.label}}</label>
          }
        </forge-radio>
      }
    </div>
    @if (showError) {
      <div class="forge-typography--caption">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    }
  `,
  styles: [`
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

    .forge-typography--caption {
      color: var(--forge-theme-danger);
    }
  `],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ForgeRadioModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioTypeComponent extends FieldType<FieldTypeConfig> {
  // @HostBinding('attr.role')
  // public roleAttribute = 'radiogroup';
}

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-formly-radio',
  template: `
  <label *ngIf="props.label">{{props.label}}</label>
  <div role="radiogroup">
    <forge-radio *ngFor="let option of props.options; let i = index">
      <input
        type="radio"
        [id]="id + '-' + i"
        [value]="option.value"
        [formControl]="formControl"
        [formlyAttributes]="field" />
      <label [for]="id + '-' + i" *ngIf="option.label">{{option.label}}</label>
    </forge-radio>
  </div>
  <div class="forge-typography--caption" *ngIf="showError">
    <formly-validation-message [field]="field"></formly-validation-message>
  </div>
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
    ForgeModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioTypeComponent extends FieldType<FieldTypeConfig> {
  // @HostBinding('attr.role')
  // public roleAttribute = 'radiogroup';
}
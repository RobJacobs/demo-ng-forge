import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-label',
  // eslint-disable-next-line quotes
  template: ` <label [attr.for]="id" class="forge-typography--body1">{{ props.label }}</label> `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  imports: [CommonModule, FormlyModule],
  standalone: true
})
export class LabelTypeComponent extends FieldType<FieldTypeConfig> {}

import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-label',
  template: ` <label [attr.for]="id" class="forge-typography--body1">{{ props.label }}</label> `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  imports: [FormlyModule]
})
export class LabelTypeComponent extends FieldType<FieldTypeConfig> {}

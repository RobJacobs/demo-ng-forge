import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-label',
  template: `
  <label [attr.for]="id" class="forge-typography--body2">{{props.label}}</label>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  imports: [
    CommonModule,
    FormlyModule,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LabelTypeComponent extends FieldType<FieldTypeConfig> {

}
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-button',
  template: `
    <forge-button type="raised">
      <button type="button" (click)="onClick($event)">
        {{props.label}}
      </button>
    </forge-button>
  `,
  imports: [
    CommonModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonTypeComponent extends FieldType<FieldTypeConfig> {

  public onClick(event: MouseEvent) {
    console.log(event);
  }
}
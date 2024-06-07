import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ForgeButtonModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-formly-button',
  template: `
    <forge-button variant="raised" (click)="onClick($event)">
      {{props.label}}
    </forge-button>
  `,
  imports: [
    CommonModule,
    ForgeButtonModule
  ],
  standalone: true
})
export class ButtonTypeComponent extends FieldType<FieldTypeConfig> {

  public onClick(event: MouseEvent) {
    console.log(event);
  }
}

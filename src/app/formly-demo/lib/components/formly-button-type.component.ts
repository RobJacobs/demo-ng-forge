import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeButtonModule, ForgeIconModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-button-type',
  template: `
    <forge-button [dense]="props.dense" [disabled]="props.disabled" [variant]="props.buttonVariant" [theme]="props.theme">
      @if (props.iconName) {
        <forge-icon slot="start" [name]="props.iconName"></forge-icon>
      }
      {{ props.label }}
    </forge-button>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [FormlyModule, ForgeButtonModule, ForgeIconModule]
})
export class FormlyButtonTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ButtonVariant } from '@tylertech/forge';
import { ForgeButtonModule, ForgeIconModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsButton extends FormlyFieldPropsBase {
  buttonVariant?: ButtonVariant;
  dense?: boolean;
  iconName?: string;
}

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
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule, ForgeButtonModule, ForgeIconModule]
})
export class FormlyButtonTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsButton>> {}

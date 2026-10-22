import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { IconButtonVariant } from '@tylertech/forge';
import { ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsIconButton extends FormlyFieldPropsBase {
  iconButtonVariant?: IconButtonVariant;
  iconName?: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-icon-button',
  template: `
    <forge-icon-button
      [formlyAttributes]="field"
      [disabled]="props.disabled"
      [variant]="props.iconButtonVariant"
      [theme]="props.theme"
      [density]="props.density"
      [attr.aria-label]="props.label"
      external
    >
      <forge-icon [name]="props.iconName" aria-hidden="true"></forge-icon>
    </forge-icon-button>
    <forge-tooltip>{{ props.label }}</forge-tooltip>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule, ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule]
})
export class FormlyIconButtonTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsIconButton>> {}

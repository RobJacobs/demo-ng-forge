import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-icon-button-type',
  template: `
    <forge-icon-button
      [disabled]="props.disabled"
      [variant]="props.iconButtonVariant"
      [theme]="props.theme"
      [density]="props.density"
      [attr.aria-label]="props.label"
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
  imports: [FormlyModule, ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule]
})
export class FormlyIconButtonTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

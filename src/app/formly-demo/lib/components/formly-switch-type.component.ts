import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeSwitchModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-switch-type',
  template: ` <forge-switch [id]="id" [formControl]="formControl">{{ props.label }}</forge-switch> `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [ReactiveFormsModule, FormlyModule, ForgeSwitchModule]
})
export class FormlySwtichTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

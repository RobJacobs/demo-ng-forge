import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeSelectModule } from '@tylertech/forge-angular';
import { FormControlInvalidDirective } from '@app/shared/directives';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-select-type',
  template: `
    <forge-select
      [id]="id"
      [label]="props.label"
      [options]="$any(props.options)"
      [formControl]="formControl"
      [required]="props.required"
      [appFormControlInvalid]="formControl"
    >
      @if (props.description) {
        <span slot="support-text">{{ props.description }}</span>
      }
    </forge-select>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, FormlyModule, ForgeSelectModule, FormControlInvalidDirective]
})
export class FormlySelectTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

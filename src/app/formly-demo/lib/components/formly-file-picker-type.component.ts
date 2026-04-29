import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ForgeButtonModule, ForgeFilePickerModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-file-picker-type',
  template: `
    <forge-file-picker compact (forge-file-picker-change)="props.filePickerChange($event)" [multiple]="props.multiple" [accept]="props.accept">
      <forge-button [variant]="props.buttonVariant || 'outlined'" [disabled]="props.disabled">{{ props.label }}</forge-button>
    </forge-file-picker>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [ReactiveFormsModule, ForgeButtonModule, ForgeFilePickerModule]
})
export class FormlyFilePickerTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

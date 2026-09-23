import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { ButtonVariant, IFilePickerChangeEventData } from '@tylertech/forge';
import { ForgeButtonModule, ForgeFilePickerModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsFilePicker extends FormlyFieldPropsBase {
  filePickerChange?: (field: FormlyFieldConfig, event: CustomEvent<IFilePickerChangeEventData>) => void;
  accept?: string;
  buttonVariant?: ButtonVariant;
  multiple?: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-file-picker-type',
  template: `
    <forge-file-picker compact (forge-file-picker-change)="props.filePickerChange(field, $event)" [multiple]="props.multiple" [accept]="props.accept">
      <forge-button [variant]="props.buttonVariant || 'outlined'" [disabled]="props.disabled">{{ props.label }}</forge-button>
    </forge-file-picker>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, ForgeButtonModule, ForgeFilePickerModule]
})
export class FormlyFilePickerTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsFilePicker>> {}

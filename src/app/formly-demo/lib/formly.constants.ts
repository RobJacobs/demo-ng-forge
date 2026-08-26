import { Type } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldType, FormlyExtension, FormlyFieldConfig, FormlyFieldProps, FormlyForm, provideFormlyCore } from '@ngx-formly/core';
import { AutocompleteFilterCallback, ButtonVariant, Density, IconButtonVariant, IFilePickerChangeEventData, IOption, Theme } from '@tylertech/forge';
import {
  FormlyAutocompleteTypeComponent,
  FormlyButtonTypeComponent,
  FormlyCheckboxTypeComponent,
  FormlyDatePickerTypeComponent,
  FormlyDividerTypeComponent,
  FormlyFilePickerTypeComponent,
  FormlyGroupTypeComponent,
  FormlyIconButtonTypeComponent,
  FormlyLabelValueTypeComponent,
  FormlyPageStateTypeComponent,
  FormlyRadioTypeComponent,
  FormlySelectTypeComponent,
  FormlyStepperTypeComponent,
  FormlySwtichTypeComponent,
  FormlyTabBarTypeComponent,
  FormlyTextFieldInputHelpTypeComponent,
  FormlyTextFieldInputTypeComponent,
  FOrmlyTextFieldTextareaTypeComponent
} from './components';
import { IFieldHelpConfig } from '@app/shared/components/field-help/field-help.constants';
import { IFilterParameter, IFilterResponse } from '@app/shared/interfaces';

export const CLASS_PREFIX = 'formly--';

export const FORMLY_CLASSES = {
  containerGrid: `${CLASS_PREFIX}container-grid`,
  containerFlex: `${CLASS_PREFIX}container-flex`,
  containerBlock: `${CLASS_PREFIX}container-block`
};

export const FORMLY_EXTENSION: FormlyExtension = {
  prePopulate(field) {
    // TODO
    // switch (field.type) {
    //   case 'text-field-input': {
    //   }
    // }
  }
};

export const FORMLY_COMPONENT_TYPES = {
  autocomplete: 'autocomplete',
  button: 'button',
  checkbox: 'checkbox',
  datePicker: 'date-picker',
  divider: 'divider',
  filePicker: 'file-picker',
  iconButton: 'icon-button',
  labelValue: 'label-value',
  pageState: 'page-state',
  radio: 'radio',
  select: 'select',
  stepper: 'stepper',
  switch: 'switch',
  tabBar: 'tab-bar',
  textFieldInputHelp: 'text-field-input-help',
  textFieldInput: 'text-field-input',
  textFieldTextarea: 'text-field-textarea'
};

export const FORMLY_PROVIDER_CONFIG = {
  extensions: [{ name: 'formly-field-extension', extension: FORMLY_EXTENSION }],
  types: [
    { name: 'formly-group', component: FormlyGroupTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.autocomplete, component: FormlyAutocompleteTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.button, component: FormlyButtonTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.checkbox, component: FormlyCheckboxTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.datePicker, component: FormlyDatePickerTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.divider, component: FormlyDividerTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.filePicker, component: FormlyFilePickerTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.iconButton, component: FormlyIconButtonTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.labelValue, component: FormlyLabelValueTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.pageState, component: FormlyPageStateTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.radio, component: FormlyRadioTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.select, component: FormlySelectTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.stepper, component: FormlyStepperTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.switch, component: FormlySwtichTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.tabBar, component: FormlyTabBarTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.textFieldInputHelp, component: FormlyTextFieldInputHelpTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.textFieldInput, component: FormlyTextFieldInputTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.textFieldTextarea, component: FOrmlyTextFieldTextareaTypeComponent }
  ]
};

export interface FormlyFieldPropsExtended extends FormlyFieldProps {
  autocompleteFilter?: AutocompleteFilterCallback;
  filePickerChange?: (event: CustomEvent<IFilePickerChangeEventData>) => void;
  theme?: Theme;
  radioOptions?: { label: string; value: any }[];
  orientation?: 'horizontal' | 'vertical';
  density?: Density;
  dense?: boolean;
  mask?: string;
  minDate?: string | Date;
  maxDate?: string | Date;
  buttonVariant?: ButtonVariant;
  iconName?: string;
  iconButtonVariant?: IconButtonVariant;
  dataType?: 'string' | 'number' | 'boolean' | 'date';
  multiple?: boolean;
  accept?: string;
  fieldHelpConfig?: IFieldHelpConfig;
  src?: string;
}

export const checkFieldExpressions = (formlyForm: FormlyForm, fields: FormlyFieldConfig[]) => {
  fields.forEach((field) => {
    formlyForm.options.checkExpressions(field);
  });
};

export interface IFormlyFieldDefinition extends Pick<
  FormlyFieldConfig<FormlyFieldPropsExtended>,
  keyof {
    key?: string | number | (string | number)[];
    type?: string | Type<FieldType>;
    className?: string;
    defaultValue?: any;
    template?: string;
    props?: Pick<
      FormlyFieldPropsExtended,
      keyof {
        type?: string;
        label?: string;
        placeholder?: string;
        disabled?: boolean;
        options?: IOption[];
        rows?: number;
        cols?: number;
        description?: string;
        hidden?: boolean;
        max?: number;
        min?: number;
        minLength?: number;
        maxLength?: number;
        pattern?: string | RegExp;
        required?: boolean;
        tabindex?: number;
        readonly?: boolean;
        attributes?: Record<string, string | number>;
        step?: number;
        theme?: Theme;
        // extended
        radioOptions?: { label: string; value: any }[];
        orientation?: 'horizontal' | 'vertical';
        density?: Density;
        dense?: boolean;
        mask?: string;
        minDate?: string | Date;
        maxDate?: string | Date;
        buttonVariant?: ButtonVariant;
        iconName?: string;
        iconButtonVariant?: IconButtonVariant;
        dataType?: 'string' | 'number' | 'boolean' | 'date';
        multiple?: boolean;
        accept?: string;
        src?: string;
        // TODO
        fieldHelpConfig?: IFieldHelpConfig;
      }
    >;
    fieldGroup?: IFormlyFieldDefinition[];
  }
> {
  key?: string | number | (string | number)[];
  type?: string | Type<FieldType>;
  className?: string;
  defaultValue?: any;
  template?: string;
  props?: {
    type?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    options?: IOption[];
    rows?: number;
    cols?: number;
    description?: string;
    hidden?: boolean;
    max?: number;
    min?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string | RegExp;
    required?: boolean;
    tabindex?: number;
    readonly?: boolean;
    attributes?: Record<string, string | number>;
    step?: number;
    theme?: Theme;
    // extended
    radioOptions?: { label: string; value: any }[];
    orientation?: 'horizontal' | 'vertical';
    density?: Density;
    dense?: boolean;
    mask?: string;
    minDate?: string | Date;
    maxDate?: string | Date;
    buttonVariant?: ButtonVariant;
    iconName?: string;
    iconButtonVariant?: IconButtonVariant;
    dataType?: 'string' | 'number' | 'boolean' | 'date';
    multiple?: boolean;
    accept?: string;
    src?: string;
    // TODO
    fieldHelpConfig?: IFieldHelpConfig;
  };
  fieldGroup?: IFormlyFieldDefinition[];
}

export interface IFormlyFieldDefinitionConfig {
  // focus?: FormlyAttributeEvent;
  // blur?: FormlyAttributeEvent;
  // keyup?: FormlyAttributeEvent;
  // keydown?: FormlyAttributeEvent;
  // click?: FormlyAttributeEvent;
  // change?: FormlyAttributeEvent;
  // keypress?: FormlyAttributeEvent;
  // wheel?: FormlyAttributeEvent;
  autocompleteFilter?: (key: string | number | (string | number)[]) => AutocompleteFilterCallback;
  filePickerChange?: (key: string | number | (string | number)[]) => (event: CustomEvent<IFilePickerChangeEventData>) => void;
  fieldHelpConfig?: {
    dataObservable: (key: string | number | (string | number)[]) => (params: IFilterParameter) => Observable<IFilterResponse<any>>;
    transform?: (value: any) => any;
  };
  validateFieldAsync?: (control: AbstractControl, field: FormlyFieldConfig) => Observable<ValidationErrors>;
}

import { Type } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldType, FormlyExtension, FormlyFieldConfig, FormlyFieldProps, FormlyForm } from '@ngx-formly/core';
import { AutocompleteFilterCallback, ButtonVariant, Density, IconButtonVariant, IFilePickerChangeEventData, IOption, Theme } from '@tylertech/forge';
import {
  FormlyAutocompleteTypeComponent,
  FormlyButtonTypeComponent,
  FormlyCheckboxTypeComponent,
  FormlyDatePickerTypeComponent,
  FormlyDividerTypeComponent,
  FormlyFieldPropsAutocomplete,
  FormlyFieldPropsButton,
  FormlyFieldPropsDatePicker,
  FormlyFieldPropsDivider,
  FormlyFieldPropsFilePicker,
  FormlyFieldPropsIconButton,
  FormlyFieldPropsPageState,
  FormlyFieldPropsRadio,
  FormlyFieldPropsTextFieldInput,
  FormlyFieldPropsTextFieldInputHelp,
  FormlyFilePickerTypeComponent,
  FormlyGroupTypeComponent,
  FormlyIconButtonTypeComponent,
  FormlyLabelValueTypeComponent,
  FormlyListTypeComponent,
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
import { IFieldHelpConfig } from '@app/shared/components/field-help';
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
  group: 'formly-group',
  iconButton: 'icon-button',
  list: 'list',
  labelValue: 'label-value',
  pageState: 'page-state',
  radio: 'radio',
  select: 'select',
  stepper: 'stepper',
  switch: 'switch',
  tabBar: 'tab-bar',
  template: 'formly-template',
  textFieldInputHelp: 'text-field-input-help',
  textFieldInput: 'text-field-input',
  textFieldTextarea: 'text-field-textarea'
};

export const FORMLY_PROVIDER_CONFIG = {
  extensions: [{ name: 'formly-field-extension', extension: FORMLY_EXTENSION }],
  types: [
    { name: FORMLY_COMPONENT_TYPES.group, component: FormlyGroupTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.autocomplete, component: FormlyAutocompleteTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.button, component: FormlyButtonTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.checkbox, component: FormlyCheckboxTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.datePicker, component: FormlyDatePickerTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.divider, component: FormlyDividerTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.filePicker, component: FormlyFilePickerTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.iconButton, component: FormlyIconButtonTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.labelValue, component: FormlyLabelValueTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.list, component: FormlyListTypeComponent },
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

export enum fieldDataType {
  boolean = 'boolean',
  date = 'date',
  number = 'number',
  string = 'string'
}

export enum fieldEvents {
  blur = 'blur',
  change = 'change',
  click = 'click',
  focus = 'focus',
  validate = 'validate'
}

export interface FormlyFieldPropsBase extends FormlyFieldProps {
  theme?: Theme;
  density?: Density;
  dataType?: fieldDataType;
  events?: fieldEvents[];
  options?: IOption[] | Observable<IOption[]>;
}

export interface FormlyFieldPropsMerged
  extends
    FormlyFieldPropsAutocomplete,
    FormlyFieldPropsButton,
    FormlyFieldPropsDatePicker,
    FormlyFieldPropsDivider,
    FormlyFieldPropsFilePicker,
    FormlyFieldPropsIconButton,
    FormlyFieldPropsPageState,
    FormlyFieldPropsRadio,
    FormlyFieldPropsTextFieldInputHelp,
    FormlyFieldPropsTextFieldInput {}

export const checkFieldExpressions = (formlyForm: FormlyForm, fields: FormlyFieldConfig[]) => {
  fields.forEach((field) => {
    formlyForm.options.checkExpressions(field);
  });
};

export interface IFormlyFieldDefinition extends Pick<
  FormlyFieldConfig<FormlyFieldPropsMerged>,
  keyof {
    key?: string | number | (string | number)[];
    type?: string | Type<FieldType>;
    className?: string;
    defaultValue?: any;
    template?: string;
    props?: Pick<
      FormlyFieldPropsMerged,
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
        // extended
        theme?: Theme;
        density?: Density;
        dataType?: fieldDataType;
        events?: fieldEvents[];
        orientation?: 'horizontal' | 'vertical';
        dense?: boolean;
        mask?: string;
        minDate?: string | Date;
        maxDate?: string | Date;
        buttonVariant?: ButtonVariant;
        iconName?: string;
        iconButtonVariant?: IconButtonVariant;
        multiple?: boolean;
        accept?: string;
        src?: string;
        fieldHelpConfig?: IFieldHelpConfig;
      }
    >;
    fieldGroup?: IFormlyFieldDefinition[];
    fieldArray?: FormlyFieldConfig;
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
    // extended
    theme?: Theme;
    density?: Density;
    dataType?: fieldDataType;
    events?: fieldEvents[];
    orientation?: 'horizontal' | 'vertical';
    dense?: boolean;
    mask?: string;
    minDate?: string | Date;
    maxDate?: string | Date;
    buttonVariant?: ButtonVariant;
    iconName?: string;
    iconButtonVariant?: IconButtonVariant;
    multiple?: boolean;
    accept?: string;
    src?: string;
    // radioOptions?: { label: string; value: any }[];
    fieldHelpConfig?: IFieldHelpConfig;
  };
  fieldGroup?: IFormlyFieldDefinition[];
  fieldArray?: FormlyFieldConfig;
}

export interface IFormlyFieldDefinitionConfig {
  autocompleteFilter?: (field: FormlyFieldConfig) => AutocompleteFilterCallback;
  blur?: (field: FormlyFieldConfig) => void;
  click?: (field: FormlyFieldConfig) => void;
  change?: (field: FormlyFieldConfig) => void;
  fieldHelpConfig?: {
    dataObservable: (field: FormlyFieldConfig) => (param: IFilterParameter) => Observable<IFilterResponse<any>>;
    transform?: (field: FormlyFieldConfig) => (value: any) => any;
  };
  filePickerChange?: (field: FormlyFieldConfig, event: CustomEvent<IFilePickerChangeEventData>) => void;
  focus?: (field: FormlyFieldConfig) => void;
  validateFieldAsync?: () => (control: AbstractControl, field: FormlyFieldConfig) => Observable<ValidationErrors>;
}

export interface IFormMessage {
  // key: string | number | (string | number)[];
  event: fieldEvents;
  path: string;
  value: any;
}

export interface IPatchOperation {
  op: 'add' | 'update' | 'delete';
  path: string;
  value: any;
}

import { FormlyExtension, FormlyFieldConfig, FormlyFieldProps, FormlyForm, provideFormlyCore } from '@ngx-formly/core';
import { AutocompleteFilterCallback, ButtonVariant, Density, IconButtonVariant, Theme } from '@tylertech/forge';
import {
  FormlyAutocompleteTypeComponent,
  FormlyButtonTypeComponent,
  FormlyCheckboxTypeComponent,
  FormlyDatePickerTypeComponent,
  FormlyDividerTypeComponent,
  FormlyGroupTypeComponent,
  FormlyIconButtonTypeComponent,
  FormlyLabelValueTypeComponent,
  FormlyRadioTypeComponent,
  FormlySelectTypeComponent,
  FormlySwtichTypeComponent,
  FormlyTabBarTypeComponent,
  FormlyTextFieldInputTypeComponent,
  FOrmlyTextFieldTextareaTypeComponent
} from './components';
import {} from './components/formly-icon-button-type.component';

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
  iconButton: 'icon-button',
  labelValue: 'label-value',
  radio: 'radio',
  select: 'select',
  switch: 'switch',
  tabBar: 'tab-bar',
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
    { name: FORMLY_COMPONENT_TYPES.iconButton, component: FormlyIconButtonTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.labelValue, component: FormlyLabelValueTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.radio, component: FormlyRadioTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.select, component: FormlySelectTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.switch, component: FormlySwtichTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.tabBar, component: FormlyTabBarTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.textFieldInput, component: FormlyTextFieldInputTypeComponent },
    { name: FORMLY_COMPONENT_TYPES.textFieldTextarea, component: FOrmlyTextFieldTextareaTypeComponent }
  ]
};

export interface FormlyFieldPropsExtended extends FormlyFieldProps {
  theme?: Theme;
  autocompleteFilter?: AutocompleteFilterCallback;
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
}

export const checkFieldExpressions = (formlyForm: FormlyForm, fields: FormlyFieldConfig[]) => {
  fields.forEach((field) => {
    formlyForm.options.checkExpressions(field);
  });
};

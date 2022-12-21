import { FormlyFieldConfig } from '@ngx-formly/core';

export interface IAppFormlyField extends FormlyFieldConfig {
  dataType: 'string' | 'date' | 'number' | 'boolean';
}
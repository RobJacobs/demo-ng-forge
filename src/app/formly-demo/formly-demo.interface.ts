import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

export interface IFormlyFieldProps extends FormlyFieldProps {
  layout?: {
    width?: number;
    height?: number;
    column?: number;
    columns?: number;
    columnSpan?: number;
    row?: number;
    rows?: number;
    rowSpan?: number;
  };
  table?: {
    columns: {
      label: string;
      width: number;
    }[];
  };
  format?: string;
}

export interface IFormlyFieldConfig extends FormlyFieldConfig<IFormlyFieldProps> {
  dataType: 'string' | 'date' | 'number' | 'boolean';
}

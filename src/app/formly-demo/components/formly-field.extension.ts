import { FormlyExtension } from '@ngx-formly/core';

export const formlyFieldExtension: FormlyExtension = {
  prePopulate(field) {
    // TODO
    switch (field.type) {
      case 'date-picker':
      case 'input':
      case 'select':
      case 'textarea': {
        // field.modelOptions = {
        //   updateOn: 'blur'
        // }
      }
    }
  }
};

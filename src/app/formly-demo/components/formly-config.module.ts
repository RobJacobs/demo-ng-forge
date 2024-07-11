import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { GroupTypeComponent } from './group-type.component';
import { CheckboxTypeComponent } from './checkbox-type.component';
import { DatePickerTypeComponent } from './date-picker-type.component';
import { TextareaTypeComponent } from './textarea-type.component';
import { TabTypeComponent } from './tab-type.component';
import { TableTypeComponent } from './table-type.component';
import { InputHelpTypeComponent } from './input-help-type.component';
import { LabelTypeComponent } from './label-type.component';
import { RadioTypeComponent } from './radio-type.component';
import { SelectTypeComponent } from './select-type.component';
import { formlyFieldExtension } from './formly-field.extension';
import { ButtonTypeComponent } from './button-type.component';
import { ContainerTypeComponent } from './container-type.component';
import { InputTypeComponent } from './input-type.component';
import { FormlyFieldDirective } from './formly-field.directive';

@NgModule({
  imports: [
    FormlyModule.forRoot({
      extensions: [{ name: 'formly-field-extension', extension: formlyFieldExtension }],
      types: [
        { name: 'checkbox', component: CheckboxTypeComponent },
        { name: 'date-picker', component: DatePickerTypeComponent },
        { name: 'input', component: InputTypeComponent },
        { name: 'input-help', component: InputHelpTypeComponent },
        { name: 'radio', component: RadioTypeComponent },
        { name: 'select', component: SelectTypeComponent },
        { name: 'textarea', component: TextareaTypeComponent },
        { name: 'button', component: ButtonTypeComponent },
        { name: 'container', component: ContainerTypeComponent },
        { name: 'formly-group', component: GroupTypeComponent },
        { name: 'tab', component: TabTypeComponent },
        { name: 'table', component: TableTypeComponent },
        { name: 'label', component: LabelTypeComponent }
      ]
      // wrappers: [
      //   { name: 'container', component: ContainerWrapperComponent }
      // ]
    }),
    FormlyFieldDirective
  ],
  exports: [FormlyModule]
})
export class FormlyConfigModule {}

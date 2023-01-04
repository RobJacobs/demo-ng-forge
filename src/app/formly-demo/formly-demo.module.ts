import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { FormlyDemoComponent } from './formly-demo.component';
import { InputTypeComponent } from './components/input-type.component';
import { FormlyDemoService } from './formly-demo.service';
import { RadioTypeComponent } from './components/radio-type.component';
import { SelectTypeComponent } from './components/select-type.component';
import { formlyFieldExtension } from './components/formly-field.extension';
import { ButtonTypeComponent } from './components/button-type.component';
import { FormlyFieldDirective } from './components/formly-field.directive';
import { ContainerTypeComponent } from './components/container-type.component';
import { FormlyFieldComponent } from './components/formly-field.component';
import { GroupTypeComponent } from './components/group-type.component';
import { CheckboxTypeComponent } from './components/checkbox-type.component';
import { DatePickerTypeComponent } from './components/date-picker-type.component';
import { TextareaTypeComponent } from './components/textarea-type.component';
import { TabTypeComponent } from './components/tab-type.component';
import { TableTypeComponent } from './components/table-type.component';
import { InputHelpTypeComponent } from './components/input-help-type.component';

const routes: Routes = [
  { path: '**', component: FormlyDemoComponent }
];

@NgModule({
  declarations: [
    FormlyDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppFormsModule,
    FormlyModule.forRoot({
      extensions: [
        { name: 'formly-field-extension', extension: formlyFieldExtension }
      ],
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
        { name: 'table', component: TableTypeComponent }
      ],
      // wrappers: [
      //   { name: 'container', component: ContainerWrapperComponent }
      // ]
    }),
    FormlyFieldDirective,
    FormlyFieldComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    FormlyDemoService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormlyDemoModule { }

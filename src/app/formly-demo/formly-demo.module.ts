import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { FormlyDemoComponent } from './formly-demo.component';
import { FormlyDemoService } from './formly-demo.service';

import { FormlyFieldComponent } from './components/formly-field.component';
import { FormlyConfigModule } from './components/formly-config.module';

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
    FormlyConfigModule,
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

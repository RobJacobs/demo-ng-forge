import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { FormControlInvalidPipe } from 'src/app/shared/pipes/form-control-invalid.pipe';
import { QueryBuilderComponent } from './query-builder.component';

const routes: Routes = [
  { path: '**', component: QueryBuilderComponent }
];

@NgModule({
  declarations: [
    QueryBuilderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppFormsModule,
    FormControlInvalidPipe
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueryBuilderModule { }

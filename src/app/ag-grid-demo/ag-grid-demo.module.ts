import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridDemoComponent } from './ag-grid-demo.component';

const routes: Routes = [
  { path: '**', component: AgGridDemoComponent }
];

@NgModule({
  declarations: [
    AgGridDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgGridDemoModule { }
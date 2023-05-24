import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StorageComponent } from './storage.component';
import { intervalToDuration, isBefore } from 'date-fns';

const routes: Routes = [
  { path: '**', component: StorageComponent }
];

@NgModule({
  declarations: [
    StorageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StorageModule {
}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PetsComponent } from './pets.component';

const routes: Routes = [
  { path: '**', component: PetsComponent }
];

@NgModule({
  declarations: [
    PetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PetsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PetsModule { }

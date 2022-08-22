import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MapViewComponent } from './map-view.component';

const routes: Routes = [
  { path: '**', component: MapViewComponent }
];

@NgModule({
  declarations: [
    // MapViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapViewModule { }

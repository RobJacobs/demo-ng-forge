import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TableDemoComponent } from './table-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ForgeModule } from '@tylertech/forge-angular';
import { AutoFocusDirective } from '../shared/directives/auto-focus/auto-focus.directive';
import { CallbackPipe } from '../shared/pipes/callback.pipe';

const routes: Routes = [
  { path: '**', component: TableDemoComponent }
];

@NgModule({
  declarations: [
    TableDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    ScrollingModule,
    ForgeModule,
    AutoFocusDirective,
    CallbackPipe
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableDemoModule { }
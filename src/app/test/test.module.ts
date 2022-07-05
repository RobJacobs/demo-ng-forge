import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '', component: TestComponent,
    children: [
      { path: 'parent', component: ParentComponent },
      { path: 'child', component: ChildComponent },
      { path: '', redirectTo: 'parent', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    TestComponent,
    ParentComponent,
    ChildComponent
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
export class TestModule { }

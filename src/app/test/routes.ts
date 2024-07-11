import { Routes } from '@angular/router';

import { TestComponent } from './test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

export const TEST_ROUTES: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      { path: 'parent', component: ParentComponent },
      { path: 'child', component: ChildComponent },
      { path: '', redirectTo: 'parent', pathMatch: 'full' }
    ]
  }
];

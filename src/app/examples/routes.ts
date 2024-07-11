import { Routes } from '@angular/router';

import { ExamplesService } from './examples.service';
import { ExamplesComponent } from './examples.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SelectComponent } from './select/select.component';
import { BindingComponent } from './binding/binding.component';
import { MiscComponent } from './misc/misc.component';

export const EXAMPLES_ROUTES: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    providers: [ExamplesService],
    children: [
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'drag-drop', component: DragDropComponent },
      { path: 'select', component: SelectComponent },
      { path: 'binding', component: BindingComponent },
      { path: 'misc', component: MiscComponent },
      { path: '', redirectTo: 'autocomplete', pathMatch: 'full' }
    ]
  }
];

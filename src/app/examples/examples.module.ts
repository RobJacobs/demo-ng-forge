import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ArrayFindPipe } from 'src/app/shared/pipes/array-find/array-find.pipe';
import { ExamplesComponent } from './examples.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SelectComponent } from './select/select.component';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './binding/child/child.component';
import { MiscComponent } from './misc/misc.component';

const routes: Routes = [
  {
    path: '', component: ExamplesComponent,
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

@NgModule({
  declarations: [
    ExamplesComponent,
    AutocompleteComponent,
    DragDropComponent,
    SelectComponent,
    BindingComponent,
    ChildComponent,
    MiscComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    AppFormsModule,
    CardComponent,
    ArrayFindPipe
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExamplesModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { AutocompleteRangeComponent } from 'src/app/shared/components/autocomplete-range/autocomplete-range.component';
import { IndeterminateDirective } from 'src/app/shared/directives/indeterminate/indeterminate.directive';
import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { SearchComponent } from './search.component';
import { SearchSaveComponent } from './save/search-save.component';

const routes: Routes = [
  { path: '**', component: SearchComponent }
];

@NgModule({
  declarations: [
    SearchComponent,
    SearchSaveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppFormsModule,
    AutocompleteRangeComponent,
    IndeterminateDirective,
    AutoFocusDirective
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AutocompleteRangeComponent } from 'src/app/shared/components/autocomplete-range/autocomplete-range.component';
import { FilterChipsComponent } from 'src/app/shared/components/filter-chips/filter-chips.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { PeopleComponent } from './people.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FilterComponent } from './home/filter/filter.component';
import { TableDetailComponent } from './home/table-detail/table-detail.component';
import { PeopleCacheService } from './people-cache.service';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    PeopleComponent,
    HomeComponent,
    DetailComponent,
    FilterComponent,
    TableDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AutocompleteRangeComponent,
    FilterChipsComponent,
    CardComponent,
    AppFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PeopleCacheService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PeopleModule { }

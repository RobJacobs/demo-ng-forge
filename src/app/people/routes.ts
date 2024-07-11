import { Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PeopleCacheService } from './people-cache.service';

export const PEOPLE_ROUTES: Routes = [
  {
    path: '',
    component: PeopleComponent,
    providers: [PeopleCacheService],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

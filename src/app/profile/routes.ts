import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AddressComponent } from './address/address.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfileCacheService } from './profile-cache.service';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canDeactivate: [(component: ProfileComponent) => component.canDeactivate()],
    providers: [
      ProfileCacheService
    ],
    children: [
      { path: 'address', component: AddressComponent },
      { path: 'personal', component: PersonalComponent },
      { path: '', redirectTo: 'personal', pathMatch: 'full' }
    ]
  }
];

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuard } from '@tylertech/angular-core';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { FormControlInvalidPipe } from 'src/app/shared/pipes/form-control-invalid.pipe';
import { ProfileComponent } from './profile.component';
import { ProfileCacheService } from './profile-cache.service';
import { AddressComponent } from './address/address.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canDeactivate: [DeactivateGuard],
    children: [
      { path: 'address', component: AddressComponent },
      { path: 'personal', component: PersonalComponent },
      { path: '', redirectTo: 'personal', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    AddressComponent,
    PersonalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppFormsModule,
    FormControlInvalidPipe
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProfileCacheService,
    DeactivateGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';
import { InputCasingDirective } from 'src/app/shared/directives/input-casing/input-casing.directive';
import { CallbackPipe } from 'src/app/shared/pipes/callback.pipe';
import { ProfileComponent } from './profile.component';
import { ProfileCacheService } from './profile-cache.service';
import { AddressComponent } from './address/address.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canDeactivate: [(component: ProfileComponent) => component.canDeactivate()],
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
    FormControlInvalidDirective,
    CallbackPipe,
    InputCasingDirective
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProfileCacheService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }

import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';
import { ProfileCacheService } from '../profile-cache.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-address',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeTextFieldModule,
    FormControlInvalidDirective
  ],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  public cache = inject(ProfileCacheService);

  public get formGroup() {
    return this.cache.formGroup.controls.addressFormGroup;
  }
}

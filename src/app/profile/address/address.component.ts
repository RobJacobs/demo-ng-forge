import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { AutoFocusDirective, FormControlInvalidDirective } from 'src/app/shared/directives';
import { ProfileCacheService } from '../profile-cache.service';

@Component({
  selector: 'app-profile-address',
  imports: [CommonModule, ReactiveFormsModule, ForgeTextFieldModule, FormControlInvalidDirective, AutoFocusDirective],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  host: {
    role: 'tabpanel',
    id: 'app--profile--address'
  }
})
export class AddressComponent {
  public cache = inject(ProfileCacheService);

  public get formGroup() {
    return this.cache.formGroup.controls.addressFormGroup;
  }
}

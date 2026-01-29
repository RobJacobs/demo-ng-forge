import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { AutoFocusDirective, FormControlInvalidDirective } from 'src/app/shared/directives';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-address',
  imports: [ReactiveFormsModule, ForgeTextFieldModule, FormControlInvalidDirective, AutoFocusDirective],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  host: {
    role: 'tabpanel',
    id: 'app--profile--address--tab-body',
    'aria-labelledby': 'app--profile--address--tab',
    tabindex: '-1'
  }
})
export class AddressComponent {
  public cache = inject(ProfileService);

  public streetErrorMessage = 'Street name is required';

  public get formGroup() {
    return this.cache.formGroup.controls.addressFormGroup;
  }
}

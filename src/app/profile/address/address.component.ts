import { Component, inject } from '@angular/core';
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
    id: 'app--profile--address'
  }
})
export class AddressComponent {
  public cache = inject(ProfileService);

  public get formGroup() {
    return this.cache.formGroup.controls.addressFormGroup;
  }
}

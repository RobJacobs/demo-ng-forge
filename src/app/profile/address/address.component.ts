import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/form/base-form.component';

import { IAddressFormGroup, ProfileCacheService } from '../profile-cache.service';

@Component({
  selector: 'app-profile-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends BaseFormComponent {
  public get formGroup() {
    return this.cache.formGroup.get('addressFormGroup') as FormGroup<IAddressFormGroup>;
  }

  constructor(public cache: ProfileCacheService) {
    super();

  }
}

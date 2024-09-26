import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';
import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { ProfileCacheService } from '../profile-cache.service';

@Component({
  selector: 'app-profile-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ForgeTextFieldModule, FormControlInvalidDirective, AutoFocusDirective],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  public cache = inject(ProfileCacheService);

  public get formGroup() {
    return this.cache.formGroup.controls.addressFormGroup;
  }
}

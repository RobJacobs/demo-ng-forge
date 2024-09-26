import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IOption } from '@tylertech/forge';
import {
  ForgeButtonModule,
  ForgeDatePickerModule,
  ForgeDividerModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeLabelValueModule,
  ForgeRadioGroupModule,
  ForgeRadioModule,
  ForgeSelectModule,
  ForgeSliderModule,
  ForgeSwitchModule,
  ForgeTextFieldModule
} from '@tylertech/forge-angular';

import { AppDataService } from 'src/app/app-data.service';
import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';
import { InputCasingDirective } from 'src/app/shared/directives/input-casing/input-casing.directive';
import { DateTimeComponent } from 'src/app/shared/components/date-time/date-time.component';
import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { ProfileCacheService } from '../profile-cache.service';

@Component({
  selector: 'app-profile-personal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeDatePickerModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeLabelValueModule,
    ForgeRadioModule,
    ForgeRadioGroupModule,
    ForgeSelectModule,
    ForgeSliderModule,
    ForgeSwitchModule,
    ForgeTextFieldModule,
    FormControlInvalidDirective,
    InputCasingDirective,
    DateTimeComponent,
    AutoFocusDirective
  ],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  public cache = inject(ProfileCacheService);
  private appDataService = inject(AppDataService);

  public get formGroup() {
    return this.cache.formGroup.controls.personalFormGroup;
  }
  public get friendsFormArray() {
    return this.formGroup.controls.friends;
  }

  public genderOptions: IOption[] = [
    { label: '', value: null },
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Undecided', value: 'U' }
  ];
  public friendOptions: IOption[] = [];
  public sizeOptions: IOption[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' }
  ];

  constructor() {
    this.appDataService.getPeople().subscribe((result) => {
      this.friendOptions = result.data.map((p) => ({ label: `${p.firstName} ${p.lastName}`, value: p.id }));
    });
  }

  public onAddFriend() {
    this.friendsFormArray.push(new FormControl(null, { validators: [Validators.required] }));
    if (this.cache.formGroup.controls.personalFormGroup.controls.entryDate.disabled) {
      this.cache.formGroup.controls.personalFormGroup.controls.entryDate.enable();
    } else {
      this.cache.formGroup.controls.personalFormGroup.controls.entryDate.disable();
    }
  }

  public onDeleteFriend(index: number) {
    this.friendsFormArray.removeAt(index);
  }
}

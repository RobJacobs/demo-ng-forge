import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { AutoFocusDirective, FormControlInvalidDirective, InputCasingDirective } from 'src/app/shared/directives';
import { DateTimeComponent } from 'src/app/shared/components';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-personal',
  imports: [
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
  styleUrls: ['./personal.component.scss'],
  host: {
    role: 'tabpanel',
    id: 'app--profile--personal'
  }
})
export class PersonalComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  public cache = inject(ProfileService);
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

  public ngOnInit() {
    this.appDataService
      .getPeople()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (result) => {
          this.friendOptions = result.data.map((p) => ({
            label: `${p.firstName} ${p.lastName}`,
            value: p.id
          }));
        }
      });
  }

  public onAddFriend() {
    this.friendsFormArray.push(new FormControl(null, { validators: [Validators.required] }));
  }

  public onDeleteFriend(index: number) {
    this.friendsFormArray.removeAt(index);
  }
}

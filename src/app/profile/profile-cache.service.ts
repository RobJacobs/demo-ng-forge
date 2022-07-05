import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProfile } from 'src/app/shared/interfaces/person.interface';

@Injectable()
export class ProfileCacheService {
  public formGroup = new FormGroup({
    personalFormGroup: new FormGroup({
      firstName: new FormControl<string | null>(null, { validators: [Validators.required] }),
      lastName: new FormControl<string | null>(null, { validators: [Validators.required] }),
      gender: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null, { validators: [Validators.required] }),
      phone: new FormControl<string | null>(null, { validators: [Validators.required] }),
      dateOfBirth: new FormControl<string | Date | null>(null),
      comment: new FormControl<string | null>(null),
      friends: new FormArray([])
    }),
    addressFormGroup: new FormGroup({
      name: new FormControl<string | null>(null, { validators: [Validators.required] }),
      street: new FormControl<string | null>(null, { validators: [Validators.required] }),
      city: new FormControl<string | null>(null, { validators: [Validators.required] }),
      state: new FormControl<string | null>(null, { validators: [Validators.required] }),
      zip: new FormControl<string | null>(null, { validators: [Validators.required] })
    })
  });
  public profile?: IProfile;
}

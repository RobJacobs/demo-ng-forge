import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProfile } from 'src/app/shared/interfaces/person.interface';

export interface IPersonalFormGroup {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  gender: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  dateOfBirth: FormControl<string | Date | null>;
  comment: FormControl<string | null>;
  rank: FormControl<number | null>;
  size: FormControl<string | null>;
  friends: FormArray<FormControl>;
}

export interface IAddressFormGroup {
  name: FormControl<string | null>;
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  zip: FormControl<string | null>;
}

@Injectable()
export class ProfileCacheService {
  public formGroup = new FormGroup({
    personalFormGroup: new FormGroup<IPersonalFormGroup>({
      firstName: new FormControl<string | null>(null, { validators: [Validators.required] }),
      lastName: new FormControl<string | null>(null, { validators: [Validators.required] }),
      gender: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null, { validators: [Validators.required] }),
      phone: new FormControl<string | null>(null, { validators: [Validators.required] }),
      dateOfBirth: new FormControl<string | Date | null>(null),
      comment: new FormControl<string | null>(null),
      rank: new FormControl<number>(0),
      size: new FormControl<string | null>(null),
      friends: new FormArray<FormControl>([])
    }),
    addressFormGroup: new FormGroup<IAddressFormGroup>({
      name: new FormControl<string | null>(null, { validators: [Validators.required] }),
      street: new FormControl<string | null>(null, { validators: [Validators.required] }),
      city: new FormControl<string | null>(null, { validators: [Validators.required] }),
      state: new FormControl<string | null>(null, { validators: [Validators.required] }),
      zip: new FormControl<string | null>(null, { validators: [Validators.required] })
    })
  });
  public profile?: IProfile;
}

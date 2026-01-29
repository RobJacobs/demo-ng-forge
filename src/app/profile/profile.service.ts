import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { delay, Observable, of, Subject } from 'rxjs';
import { IProfile } from 'src/app/shared/interfaces';

@Injectable()
export class ProfileService {
  public formGroup = new FormGroup({
    personalFormGroup: new FormGroup({
      firstName: new FormControl<string | null>(null, {
        validators: [Validators.required]
        // asyncValidators: [
        //   (control: AbstractControl): Observable<ValidationErrors> => {
        //     return of({ duplicate: true }).pipe(delay(1000));
        //     // const validationSub = new Subject<ValidationErrors>();
        //     // setTimeout(() => {
        //     //   validationSub.next({ duplicate: true });
        //     //   validationSub.complete();
        //     // }, 1000);
        //     // return validationSub.asObservable();
        //   }
        // ]
      }),
      lastName: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      gender: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      email: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      phone: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      dateOfBirth: new FormControl<string | Date | null>(null, {
        validators: [Validators.required]
      }),
      comment: new FormControl<string | null>(null),
      rank: new FormControl<number>(5),
      size: new FormControl<string | null>(null),
      citizen: new FormControl<boolean>(false),
      entryDate: new FormControl<string | Date | null>(null),
      friends: new FormArray<FormControl>([])
    }),
    addressFormGroup: new FormGroup({
      name: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      street: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      city: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      state: new FormControl<string | null>(null, {
        validators: [Validators.required]
      }),
      zip: new FormControl<string | null>(null, {
        validators: [Validators.required]
      })
    })
  });
  public profile?: IProfile;
}

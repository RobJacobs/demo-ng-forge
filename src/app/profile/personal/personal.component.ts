import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IOption } from '@tylertech/forge';

import { AppDataService } from 'src/app/app-data.service';
import { IPersonalFormGroup, ProfileCacheService } from '../profile-cache.service';

@Component({
  selector: 'app-profile-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  public get formGroup() {
    return this.cache.formGroup.get('personalFormGroup') as FormGroup<IPersonalFormGroup>;
  }
  public get friendsFormArray() {
    return this.formGroup.get('friends') as FormArray;
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

  constructor(
    public cache: ProfileCacheService,
    private appDataService: AppDataService
  ) {
    this.appDataService.getPeople().subscribe((result) => {
      this.friendOptions = result.data.map((p) => ({ label: `${p.firstName} ${p.lastName}`, value: p.id }));
    });
  }

  public onAddFriend() {
    this.friendsFormArray.push(new FormControl(null, { validators: [Validators.required] }));
  }

  public onDeleteFriend(index: number) {
    this.friendsFormArray.removeAt(index);
  }
}

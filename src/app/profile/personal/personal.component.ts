import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IOption } from '@tylertech/forge';
import { AppDataService } from 'src/app/app-data.service';
import { BaseFormComponent } from 'src/app/shared/form/base-form.component';

import { ProfileCacheService } from '../profile-cache.service';

@Component({
  selector: 'app-profile-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent extends BaseFormComponent {
  public get formGroup() {
    return this.cache.formGroup.get('personalFormGroup') as FormGroup;
  }
  public get friendsFormArray() {
    return this.formGroup.get('friends') as FormArray;
  }

  public genderOptions: Array<IOption> = [
    { label: '', value: null },
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Undecided', value: 'U' }
  ];
  public friendOptions: IOption[] = [];

  constructor(
    public cache: ProfileCacheService,
    private appDataService: AppDataService
  ) {
    super();
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

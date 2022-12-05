import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '@tylertech/forge-angular';
import { ITylDeactivateGuardArg, TylCanDeactivate } from '@tylertech/angular-core';

import { Utils } from 'src/utils';
import { IProfile } from 'src/app/shared/interfaces/person.interface';
import { AppDataService } from 'src/app/app-data.service';
import { AppToastService } from 'src/app/app-toast.service';
import { IAddressFormGroup, IPersonalFormGroup, ProfileCacheService } from './profile-cache.service';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements TylCanDeactivate {
  private noImageUrl = 'mock-data/no-image.png';

  public get personalFormGroup() {
    return this.cache.formGroup.get('personalFormGroup') as FormGroup<IPersonalFormGroup>;
  }
  public get addressFormGroup() {
    return this.cache.formGroup.get('addressFormGroup') as FormGroup<IAddressFormGroup>;
  }
  public activeTab = 0;
  public imageUrl?: string;

  constructor(
    private router: Router,
    private appDataService: AppDataService,
    private dialogService: DialogService,
    private appToastService: AppToastService,
    public cache: ProfileCacheService
  ) {
    if (this.cache.profile) {
      this.loadForm(this.cache.profile);
    }
  }

  public canDeactivate(arg: ITylDeactivateGuardArg): boolean | Observable<boolean> {
    if (!this.cache.formGroup.dirty) {
      return true;
    }

    return new Observable<boolean>(s => {
      const dialogRef = this.dialogService.show(
        ConfirmDialogComponent,
        { backdropClose: false, escapeClose: false },
        { data: { title: 'Unsaved changes', message: 'You have unsaved changes which will be lost, do you want to continue?' } }
      );
      const dialogSub = dialogRef.afterClosed.subscribe((result) => {
        dialogSub.unsubscribe();
        if (result) {
          this.cache.formGroup.reset();
        }
        console.log(result);
        s.next(result);
      });
    });
  }

  public onLoadProfile() {
    this.appDataService.getProfile().subscribe((result: IProfile) => {
      this.cache.formGroup.reset();
      this.cache.profile = result;
      this.loadForm(this.cache.profile);
    });
  }

  public onTabSelected(route: string) {
    switch (route) {
      case 'personal':
        this.activeTab = 0;
        break;
      case 'address':
        this.activeTab = 1;
        break;
    }
    this.router.navigate([`profile/${route}`]);
  }

  public onSave() {
    if (this.cache.formGroup.invalid) {
      return;
    }

    this.cache.profile = this.parseForm(this.cache.profile?.id);
    this.cache.formGroup.markAsPristine();
    this.appToastService.show('Profile saved.');
  }

  public onCancel() {
    this.cache.formGroup.reset();
    this.imageUrl = undefined;
    this.cache.profile = undefined;
  }

  public onImageError(event: Event) {
    const targetElement = event.target as HTMLImageElement;
    if (!targetElement.src.includes(this.noImageUrl)) {
      targetElement.src = this.noImageUrl;
      targetElement.onerror = null;
    }
  }

  public isInvalid(formGroup: FormGroup): boolean {
    return formGroup.invalid && formGroup.touched;
  }

  private loadForm(profile: IProfile) {
    this.imageUrl = `mock-data/${Utils.formatNumber(this.cache.profile?.id as number, '2.0-0')}-small.png`;

    (this.personalFormGroup.get('friends') as FormArray)?.clear();

    this.personalFormGroup.patchValue(profile);
    this.addressFormGroup.patchValue(profile.address as any);

    // this.personalFormGroup.patchValue({
    //   firstName: profile.firstName,
    //   lastName: profile.lastName,
    //   gender: profile.gender,
    //   email: profile.email,
    //   phone: profile.phone,
    //   dateOfBirth: Utils.formatDate(profile.dateOfBirth as Date)
    // });

    // this.addressFormGroup.patchValue(profile.address as any);
  }

  private parseForm(id?: number): IProfile {
    return {
      id: id || -1,
      firstName: this.personalFormGroup.value.firstName as string,
      lastName: this.personalFormGroup.value.lastName as string,
      gender: this.personalFormGroup.value.gender as any,
      email: this.personalFormGroup.value.email as string,
      phone: this.personalFormGroup.value.phone as string,
      dateOfBirth: this.personalFormGroup.value.dateOfBirth as Date,
      address: this.addressFormGroup.value as any
    };
  }

}

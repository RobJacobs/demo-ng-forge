import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import {
  DialogService,
  ForgeButtonModule,
  ForgeIconModule,
  ForgeTabBarModule,
  ForgeTabModule,
  ForgeToolbarModule,
  ToastService
} from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { ConfirmDialogComponent } from 'src/app/shared/components';
import { CallbackPipe } from 'src/app/shared/pipes';
import { IProfile } from 'src/app/shared/interfaces';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeIconModule,
    ForgeTabBarModule,
    ForgeTabModule,
    ForgeToolbarModule,
    CallbackPipe
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private appDataService = inject(AppDataService);
  private dialogService = inject(DialogService);
  private toastService = inject(ToastService);
  public cache = inject(ProfileService);

  private noImageUrl = 'mock-data/no-image.png';

  public get personalFormGroup() {
    return this.cache.formGroup.controls.personalFormGroup;
  }
  public get addressFormGroup() {
    return this.cache.formGroup.controls.addressFormGroup;
  }
  public activeTab = 0;
  public imageUrl?: string;

  public ngOnInit() {
    if (this.cache.profile) {
      this.loadForm(this.cache.profile);
    }
    if (
      this.route.snapshot.children
        .map((r) => r.url.map((cr) => cr.path))
        .flat()
        .includes('address')
    ) {
      this.activeTab = 1;
    }
  }

  public canDeactivate(): boolean | Observable<boolean> {
    if (!this.cache.formGroup.dirty) {
      return true;
    }

    return new Observable<boolean>((s) => {
      this.dialogService
        .open(ConfirmDialogComponent, {
          options: { persistent: true },
          data: {
            title: 'Unsaved changes',
            message: 'You have unsaved changes which will be lost, do you want to continue?'
          }
        })
        .afterClosed.subscribe({
          next: (result) => {
            if (result) {
              this.cache.formGroup.reset();
            }
            s.next(result);
          }
        });
    });
  }

  public onLoadProfile() {
    this.appDataService
      .getProfile()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (result: IProfile) => {
          this.cache.formGroup.reset();
          this.cache.profile = result;
          this.loadForm(this.cache.profile);
        },
        error: () => {
          this.toastService.show({
            message: 'Error loading profile',
            theme: 'error'
          });
        }
      });
  }

  public onTabSelected(route: string) {
    switch (this.activeTab) {
      case 0:
        this.personalFormGroup.markAsTouched();
        break;
      case 1:
        this.addressFormGroup.markAsTouched();
        break;
    }

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
    this.toastService.show({
      message: 'Profile saved',
      theme: 'success'
    });
  }

  public onCancel() {
    this.cache.formGroup.reset();
    this.cache.formGroup.markAsPristine();
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

  public isInvalid(values: boolean[]): boolean {
    return values.every((v) => v === true);
  }

  private loadForm(profile: IProfile) {
    this.imageUrl = `mock-data/${Utils.formatNumber(parseInt(this.cache.profile?.id, 109), '2.0-0')}-small.png`;

    this.personalFormGroup.controls.friends?.clear();

    this.personalFormGroup.patchValue(profile);
    this.addressFormGroup.patchValue(profile.address as any);
  }

  private parseForm(id?: string): IProfile {
    return {
      id: id || '-1',
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

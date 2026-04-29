import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isDefined } from '@tylertech/forge-core';
import { AutocompleteFilterCallback, CellAlign, IOption, TextFieldComponentDelegate } from '@tylertech/forge';
import {
  ForgeAutocompleteModule,
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
import { AutoFocusDirective, defaultErrorMessages, FieldErrorMessages, FormControlInvalidDirective, InputCasingDirective } from 'src/app/shared/directives';
import { DateTimeComponent } from 'src/app/shared/components';
import { ProfileService } from '../profile.service';
import { FieldHelpButtonComponent } from 'src/app/shared/components/field-help/field-help-button/field-help-button.component';
import { IFieldHelpConfig } from 'src/app/shared/components/field-help/field-help.constants';
import { Utils } from 'src/utils';
import { IPerson } from 'src/app/shared/interfaces';
import { lastValueFrom, map, of } from 'rxjs';

@Component({
  selector: 'app-profile-personal',
  imports: [
    ReactiveFormsModule,
    ForgeAutocompleteModule,
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
    FieldHelpButtonComponent,
    AutoFocusDirective
  ],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  host: {
    role: 'tabpanel',
    id: 'app--profile--personal--tab-body',
    'aria-labelledby': 'app--profile--personal--tab',
    tabindex: '-1'
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

  public firstNameErrorMessage: FieldErrorMessages = {
    required: () => 'First name is required',
    duplicate: () => 'First name is duplicated'
  };
  public defaultErrorMessage = defaultErrorMessages;
  // public firstNameErrorMessage = new Map<string, string>([
  //   ['required', 'First name is required'],
  //   ['duplicate', 'First name is duplicated']
  // ]);

  public genderOptions: IOption[] = [
    // { label: '', value: null },
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
  public partnerFilter: AutocompleteFilterCallback = (filterText: string, value: number) => {
    if (isDefined(value)) {
      return lastValueFrom(
        this.appDataService.getPerson(value).pipe(
          map((p) => {
            return [{ label: `${p.firstName} ${p.lastName}`, value: p.id }];
          })
        )
      );
    } else {
      return lastValueFrom(
        this.appDataService.getPeople().pipe(
          map((r) => {
            return r.data
              .map((p) => ({ label: `${p.firstName} ${p.lastName}`, value: p.id }))
              .filter((o) => o.label.toLowerCase().includes(filterText.toLowerCase()));
          })
        )
      );
    }
  };
  public partnerFieldHelpConfig: IFieldHelpConfig = {
    columnConfigurations: [
      {
        property: 'image',
        width: 48,
        align: CellAlign.Center,
        template: (rowIndex: number, cellElement: HTMLElement, data: any) => {
          const imgElement = document.createElement('img') as HTMLImageElement;
          imgElement.src = `mock-data/${Utils.formatNumber(data.id, '2.0-0')}-small.png`;
          imgElement.style.width = '48px';
          imgElement.style.height = '48px';
          imgElement.style.borderRadius = '50%';
          imgElement.setAttribute('alt', '');
          return imgElement;
        }
      },
      {
        header: 'Id',
        property: 'id',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Id');
          return delegate;
        }
      },
      {
        header: 'First',
        property: 'firstName',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'First Nmae');
          return delegate;
        }
      },
      {
        header: 'Last',
        property: 'lastName',
        initialSort: true,
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Last Nmae');
          return delegate;
        }
      },
      {
        header: 'Gender',
        property: 'gender',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Gender');
          return delegate;
        }
      },
      {
        header: 'Occupation',
        property: 'occupation',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Occupation');
          return delegate;
        }
      }
    ],
    title: 'Browse people',
    key: 'id',
    dataObservable: (param) => this.appDataService.getPeople(param),
    transform: (value: IPerson) => {
      return value.id;
      // return `${value.id} - ${value.firstName} ${value.lastName}`;
    }
    // multiselect: true
    // transform: (value: IPerson[]) => {
    //   return value.map((p) => `${p.firstName} ${p.lastName}`).join(', ');
    // }
  };

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

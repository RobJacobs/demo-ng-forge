import { Injectable, signal } from '@angular/core';
import { lastValueFrom, Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IFilterParameter, IFilterResponse } from '../shared/interfaces/filter.interface';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FORMLY_CLASSES, FORMLY_COMPONENT_TYPES, FormlyFieldPropsExtended } from './lib/formly.constants';
import { isDefined } from '@tylertech/forge-core';
import { AutocompleteFilterCallback, IOption } from '@tylertech/forge';

@Injectable()
export class FormlyDemoService {
  private options = [
    { label: 'Option 01', value: '01' },
    { label: 'Option 02', value: '02' },
    { label: 'Option 03', value: '03' },
    { label: 'Option 04', value: '04' },
    { label: 'Option 05', value: '05' },
    { label: 'Option 06', value: '06' },
    { label: 'Option 07', value: '07' },
    { label: 'Option 08', value: '08' },
    { label: 'Option 09', value: '09' },
    { label: 'Option 10', value: '10' }
  ];

  public autocompleteFilter: AutocompleteFilterCallback = (filterText: string, value: string) => {
    if (isDefined(value)) {
      return this.options.filter((o) => o.value === value);
    } else {
      // return new Promise<IOption[]>((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(this.options.filter((o) => o.label.toLowerCase().includes(filterText.toLowerCase())));
      //   }, 1000);
      // });
      return lastValueFrom(of(this.options.filter((o) => o.label.toLowerCase().includes(filterText.toLowerCase()))).pipe(delay(1000)));
    }
  };

  public validateFieldAsync(control: AbstractControl, field: FormlyFieldConfig): Observable<ValidationErrors> {
    switch (field.key) {
      case 'firstName': {
        if (control.value?.length === 1) {
          return of({ duplicate: 'First name is duplicated.' }).pipe(delay(1000));
        } else {
          return of(null).pipe(delay(1000));
        }
      }
      case 'stringMask': {
        const pattern = /\d{3}-\d{2}-\d{4}/;
        if (!pattern.test(control.value)) {
          return of({ invalid: 'Invalid format' });
        } else {
          return of(null);
        }
      }
    }
    return of(null).pipe(delay(1000));
  }
}

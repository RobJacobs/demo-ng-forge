import { CommonModule } from '@angular/common';
import { Component, DestroyRef, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, takeUntil, Subject, of, fromEvent } from 'rxjs';
import { ForgeButtonModule, ForgeDialogModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { isObject } from '@tylertech/forge-core';

import { AppCacheService } from 'src/app/app-cache.service';
import { AppDataService } from 'src/app/app-data.service';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-test-parent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ForgeTextFieldModule, ForgeToolbarModule, ForgeButtonModule, ForgeDialogModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  private router = inject(Router);
  private appDataService = inject(AppDataService);
  private appCache = inject(AppCacheService);
  private asyncValidators = new Map<string, { value: any; control: AbstractControl; response: Subject<ValidationErrors | null> }>();
  private keydownBuffer: KeyboardEvent[] = [];

  public formGroup = new FormGroup({
    name: new FormControl('', { asyncValidators: [this.asyncValidator('name')] }),
    age: new FormControl('', { asyncValidators: [this.asyncValidator('age')] }),
    location: new FormControl('', { asyncValidators: [this.asyncValidator('location')] })
  });

  public testObject = {
    name: 'name',
    age: 20,
    location: {
      street: 'street',
      city: 'city',
      zip: {
        code: 'code'
      }
    },
    pets: ['dog', 'cat', 'rock'],
    friends: [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]
  };

  constructor() {}

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }

  public onMakeRequest() {
    this.getLongRequest().subscribe();
  }

  public onValidate() {
    if (this.asyncValidators.size) {
      const key = this.asyncValidators.keys().next().value;
      const validator = this.asyncValidators.get(key);
      // validator.response.next({ wrongFormat: true });
      validator.response.next(null);
      validator.response.complete();
      validator.control.markAsPristine();
      validator.control.markAsUntouched();
      this.asyncValidators.delete(key);
    }

    console.log(this.objectPaths(this.testObject));

    this.formGroup.controls.name.disable();
  }

  public onResetForm() {
    this.formGroup.markAsPristine();
    this.formGroup.markAsUntouched();
  }

  private getLongRequest(): Observable<any> {
    return this.appDataService.getLongRequest().pipe(
      tap({
        next: (result) => console.log(result),
        error: (error) => console.log(error)
      }),
      takeUntil(this.appCache.cancelHttpRequests)
    );
  }

  private asyncValidator(name: string): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.dirty) {
        return of(null);
      }

      if (!this.asyncValidators.has(name)) {
        this.asyncValidators.set(name, { value: control.value, control, response: new Subject<ValidationErrors | null>() });
      }

      return this.asyncValidators.get(name).response;
    };
  }

  private objectPaths(obj: any, parentKey = ''): Map<string, string> {
    const result = new Map<string, string>();
    Object.keys(obj).forEach((key) => {
      const path = parentKey.length ? `${parentKey}.${key}` : key;
      const value = obj[key];
      if (isObject(value)) {
        Object.assign(result, this.objectPaths(obj[key], path));
      } else {
        result[path] = value;
      }
    });

    return result;
  }
}

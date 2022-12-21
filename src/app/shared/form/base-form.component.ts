import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable()
export abstract class BaseFormComponent {
  public abstract formGroup: FormGroup;

  constructor() { }

  public isInvalid(name: string | AbstractControl): boolean {
    const formControl = name instanceof AbstractControl ? name : this.formGroup.get(name);
    return formControl?.invalid && formControl?.touched ? true : false;
  }
}

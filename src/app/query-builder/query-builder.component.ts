import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isDefined } from '@tylertech/forge-core';
import { ForgeAutocompleteModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeMenuModule, ForgeOptionModule, ForgeSelectModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { IFilter } from 'src/app/shared/interfaces/filter.interface';
import { FormControlInvalidDirective } from 'src/app/shared/directives/form-control-invalid/form-control-invalid.directive';

@Component({
  selector: 'app-query-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ForgeAutocompleteModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeMenuModule, ForgeOptionModule, ForgeSelectModule, ForgeTextFieldModule, FormControlInvalidDirective],
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent {
  public formGroup = new FormGroup({
    filters: new FormArray([this.buildFilterFormGroup()])
  });

  public conditionOptions = [
    { value: 'and', label: 'And' },
    { value: 'or', label: 'Or' }
  ];

  public propertyOptions = [
    { value: 'firstName', label: 'First name' },
    { value: 'lastName', label: 'Last name' },
    { value: 'dateOfBirth', label: 'Date of birth' },
    { value: 'gender', label: 'Gender' },
    { value: 'occupation', label: 'Occupation' }
  ];

  public operatorOptions = [
    { value: 0, label: 'Equal' },
    { value: 1, label: 'Not equal' },
    { value: 2, label: 'Greater than' },
    { value: 3, label: 'Less than' },
    { value: 4, label: 'Greater than equal to' },
    { value: 5, label: 'Less than equal to' },
    { value: 6, label: 'Range' },
    { value: 7, label: 'Contains' },
    { value: 8, label: 'Not contains' },
    { value: 9, label: 'Empty' }
  ];

  public filterOptions = [
    { value: 'condition', label: 'Add condition' },
    { value: 'group', label: 'Add group' }
  ];

  public propertyFilter = (value: string) => Utils.filterData(this.propertyOptions, [{ key: 'label', value }]);

  public onAddFilter(formGroup: FormGroup, type: 'condition' | 'group') {
    if (formGroup === this.formGroup) {
      this.formGroup.controls.filters.push(this.buildFilterFormGroup());
    } else {
      switch (type) {
        case 'condition': {
          const index = (formGroup.parent as FormArray).controls.indexOf(formGroup) + 1;
          (formGroup.parent as FormArray).insert(index, this.buildFilterFormGroup());
          break;
        }
        case 'group':
          (formGroup.get('filters') as FormArray).push(this.buildFilterFormGroup());
          break;
      }
    }
  }

  public onDeleteFilter(formGroup: FormGroup) {
    const formArray = formGroup.parent as FormArray;
    const index = formArray.controls.indexOf(formGroup);
    if (index !== -1) {
      formArray.removeAt(index);
    }
  }

  private buildFilterFormGroup(filter?: IFilter): FormGroup {
    return new FormGroup({
      property: new FormControl(filter?.property, { validators: [Validators.required] }),
      condition: new FormControl(filter?.condition || 'and', { validators: [Validators.required] }),
      operator: new FormControl(filter?.operator, { validators: [Validators.required] }),
      value: new FormControl(filter?.value, { validators: [this.validateFilterValue('value')] }),
      minValue: new FormControl(filter?.minValue, { validators: [this.validateFilterValue('minValue')] }),
      maxValue: new FormControl(filter?.minValue, { validators: [this.validateFilterValue('maxValue')] }),
      filters: new FormArray([])
    });
  }

  private validateFilterValue(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control.parent;
      if (!formGroup) {
        return null;
      }

      const operator = formGroup.value.operator;
      if (!isDefined(operator)) {
        return null;
      }

      switch (operator) {
        case 6: {
          if (controlName === 'value') {
            return null;
          }

          if (!isDefined(control.value) || !control.value.toString().length) {
            return { required: true };
          }

          const minValue = formGroup.value.minValue;
          const maxValue = formGroup.value.maxValue;

          if (controlName === 'minValue') {
            if (isDefined(maxValue) && minValue.localeCompare(maxValue, navigator.language, { numeric: true, ignorePunctuation: true }) < 1) {
              formGroup.get('maxValue')?.setErrors(null);
            }
          }

          if (controlName === 'maxValue') {
            if (!isDefined(minValue)) {
              return null;
            }

            if (minValue.localeCompare(maxValue, navigator.language, { numeric: true, ignorePunctuation: true }) > 0) {
              return { range: true };
            }
          }

          return null;
        }
        default:
          if (controlName === 'minValue' || controlName === 'maxValue') {
            return null;
          }

          if (!isDefined(control.value) || !control.value.toString().length) {
            return { required: true };
          }

          return null;
      }
    };
  }
}

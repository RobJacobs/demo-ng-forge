import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeModule } from '@tylertech/forge-angular';
import { map, of } from 'rxjs';
import { FormlyDemoService } from '../formly-demo.service';
import { isValid as isValidDate } from 'date-fns';

@Component({
  selector: 'app-formly-date-picker',
  template: `
  <forge-date-picker [max]="props.max" [min]="props.min">
    <forge-text-field [required]="props.required" [invalid]="showError">
      <input
        [id]="id"
        type="text"
        [placeholder]="props.placeholder"
        [readonly]="props.readonly"
        [formControl]="formControl"
        [formlyAttributes]="field" />
      <label [attr.for]="id" *ngIf="props.label" slot="label">{{props.label}}</label>
      <span slot="helper-text" *ngIf="showError">
        <formly-validation-message [field]="field"></formly-validation-message>
      </span>
    </forge-text-field>
  </forge-date-picker>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ForgeModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatePickerTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  constructor(
    private moduleService: FormlyDemoService
  ) {
    super();
  }

  public ngOnInit() {
    this.formControl.addAsyncValidators((control: AbstractControl) => {
      if (control.pristine) {
        return of(null);
      }

      if (control.value && !isValidDate(new Date(control.value))) {
        control.setValue(null);
        if (this.field.props.required) {
          return of({ required: true });
        }
      }

      return this.moduleService.validateField(this.field.key as string, control.value).pipe(
        map(r => {
          return r.invalid ? { server: { message: r.message } } : null;
        })
      );
    });
  }
}
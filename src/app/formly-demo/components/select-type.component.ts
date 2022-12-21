import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeModule } from '@tylertech/forge-angular';
import { finalize, map, of } from 'rxjs';
import { FormlyDemoService } from '../formly-demo.service';

@Component({
  selector: 'app-formly-select',
  template: `
  <forge-select
    [id]="id"
    [options]="props.options"
    [label]="props.label"
    [placeholder]="props.placeholder"
    [invalid]="showError"
    [formControl]="formControl"
    [formlyAttributes]="field">
    <span slot="helper-text" *ngIf="showError">
      <formly-validation-message [field]="field"></formly-validation-message>
    </span>
  </forge-select>
  `,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ForgeModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {

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

      // this.formControl.disable();
      return this.moduleService.validateField(this.field.key as string, control.value).pipe(
        // finalize(() => this.formControl.enable()),
        map(r => {
          return r.invalid ? { server: { message: r.message } } : null;
        })
      );
    });
  }
}
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { map, of, Subject, takeUntil } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeDatePickerModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { isValid as isValidDate } from 'date-fns';

import { FormlyDemoService } from '../formly-demo.service';
@Component({
    selector: 'app-formly-date-picker',
    template: `
    <forge-date-picker [max]="$any(props.max)" [min]="$any(props.min)">
      <forge-text-field [required]="props.required" [invalid]="showError">
        <input [id]="id" type="text" [placeholder]="props.placeholder" [readonly]="props.readonly" [formControl]="formControl" [formlyAttributes]="field" />
        @if (props.label) {
          <label [attr.for]="id" slot="label">{{ props.label }}</label>
        }
        @if (showError) {
          <span slot="helper-text">
            <formly-validation-message [field]="field"></formly-validation-message>
          </span>
        }
      </forge-text-field>
    </forge-date-picker>
  `,
    styles: [
        `
      :host {
        display: block;
      }

      // forge-text-field {
      //   --forge-text-field-height: 2rem;
      // }
    `
    ],
    imports: [CommonModule, ReactiveFormsModule, FormlyModule, ForgeDatePickerModule, ForgeTextFieldModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatePickerTypeComponent extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {
  private moduleService = inject(FormlyDemoService);

  private unsubscribe = new Subject<void>();

  public ngOnInit() {
    this.formControl.addAsyncValidators((control: AbstractControl) => {
      this.unsubscribe.next();
      this.unsubscribe.complete();

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
        takeUntil(this.unsubscribe),
        map((r) => {
          return r.invalid ? { server: { message: r.message } } : null;
        })
      );
    });
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

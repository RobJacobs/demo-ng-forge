import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnDestroy, OnInit, inject, viewChild } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { map, of, Subject, takeUntil } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { FormlyDemoService } from '../formly-demo.service';

@Component({
  selector: 'app-formly-input',
  template: `
    <forge-text-field [required]="props.required" [invalid]="showError">
      <input
        #input
        [id]="id"
        [type]="inputType"
        [placeholder]="props.placeholder"
        [readonly]="props.readonly"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
      @if (props.label) {
        <label [attr.for]="id" slot="label">{{ props.label }}</label>
      }
      @if (showError) {
        <span slot="helper-text">
          <formly-validation-message [field]="field"></formly-validation-message>
        </span>
      }
    </forge-text-field>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      // forge-text-field {
      //   --forge-text-field-height: 2rem;
      // }

      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `
  ],
  imports: [ReactiveFormsModule, FormlyModule, ForgeTextFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputTypeComponent extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  private moduleService = inject(FormlyDemoService);
  private readonly inputElement = viewChild<ElementRef>('input');

  public inputType = 'text';

  public ngOnInit() {
    this.inputType = this.props?.type || 'text';

    this.formControl.addAsyncValidators((control: AbstractControl) => {
      this.unsubscribe.next();
      this.unsubscribe.complete();

      if (control.pristine) {
        return of(null);
      }

      // (this.inputElement.nativeElement as HTMLInputElement).disabled = true;
      return this.moduleService.validateField(this.field.key as string, control.value).pipe(
        // finalize(() => (this.inputElement.nativeElement as HTMLInputElement).disabled = false),
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

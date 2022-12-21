import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeModule } from '@tylertech/forge-angular';
import { finalize, map, of, Subject, takeUntil } from 'rxjs';
import { FormlyDemoService } from '../formly-demo.service';

@Component({
  selector: 'app-formly-input',
  template: `
  <forge-text-field [required]="props.required" [invalid]="showError">
    <input
      [id]="id"
      [type]="inputType"
      [placeholder]="props.placeholder"
      [readonly]="props.readonly"
      [formControl]="formControl"
      [formlyAttributes]="field" />
    <label [attr.for]="id" *ngIf="props.label" slot="label">{{props.label}}</label>
    <span slot="helper-text" *ngIf="showError">
      <formly-validation-message [field]="field"></formly-validation-message>
    </span>
  </forge-text-field>
  `,
  styles: [`
    :host {
      display: block;
    }

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
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
export class InputTypeComponent extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  public inputType = 'text';

  constructor(
    private moduleService: FormlyDemoService
  ) {
    super();
  }

  public ngOnInit() {
    this.inputType = this.props?.type || 'text';

    this.formControl.addAsyncValidators((control: AbstractControl) => {
      if (control.pristine) {
        return of(null);
      }

      // control.disable();
      this.unsubscribe.next();
      this.unsubscribe.complete();
      return this.moduleService.validateField(this.field.key as string, control.value).pipe(
        // finalize(() => control.enable()),
        takeUntil(this.unsubscribe),
        map(r => {
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
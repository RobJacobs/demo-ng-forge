import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { map, of, Subject, takeUntil } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { FormlyDemoService } from '../formly-demo.service';

@Component({
  selector: 'app-formly-textarea',
  template: `
    <forge-text-field [required]="props.required" [invalid]="showError">
      <textarea
        [id]="id"
        [cols]="props.cols"
        [rows]="props.rows"
        [readonly]="props.readonly"
        [formControl]="formControl"
        [formlyAttributes]="field" >
      </textarea>
      @if (props.label) {
        <label [attr.for]="id" slot="label">{{props.label}}</label>
      }
      @if (showError) {
        <span slot="helper-text">
          <formly-validation-message [field]="field"></formly-validation-message>
        </span>
      }
    </forge-text-field>
  `,
  styles: [`
    :host {
      display: block;
    }

    textarea {
      resize: none;
    }
  `],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ForgeTextFieldModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TextareaTypeComponent extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {
  private moduleService = inject(FormlyDemoService);

  private unsubscribe = new Subject<void>();

  constructor() {
    super();
    this.defaultOptions = {
      props: {
        cols: 1,
        rows: 3
      }
    }
  }

  public ngOnInit() {
    this.formControl.addAsyncValidators((control: AbstractControl) => {
      this.unsubscribe.next();
      this.unsubscribe.complete();

      if (control.pristine) {
        return of(null);
      }

      return this.moduleService.validateField(this.field.key as string, control.value).pipe(
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

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeModule } from '@tylertech/forge-angular';
import { map, of } from 'rxjs';
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

    textarea {
      resize: none;
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
export class TextareaTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  constructor(
    private moduleService: FormlyDemoService
  ) {
    super();
    this.defaultOptions = {
      props: {
        cols: 1,
        rows: 3
      }
    }
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit() {
    this.formControl.addAsyncValidators((control: AbstractControl) => {
      if (control.pristine) {
        return of(null);
      }

      return this.moduleService.validateField(this.field.key as string, control.value).pipe(
        map(r => {
          return r.invalid ? { server: { message: r.message } } : null;
        })
      );
    });
  }
}
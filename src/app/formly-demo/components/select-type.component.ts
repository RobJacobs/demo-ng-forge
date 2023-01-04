import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeModule } from '@tylertech/forge-angular';
import { finalize, map, of, Subject, takeUntil } from 'rxjs';
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
  styles: [`
  :host {
    display: block;
  }

  // forge-select {
  //   --forge-select-height: 2rem;
  // }
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
export class SelectTypeComponent extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(
    private moduleService: FormlyDemoService
  ) {
    super();
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
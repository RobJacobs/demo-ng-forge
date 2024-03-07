import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { map, of, Subject, takeUntil } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeCheckboxModule } from '@tylertech/forge-angular';

import { FormlyDemoService } from '../formly-demo.service';

@Component({
  selector: 'app-formly-checkbox',
  template: `
    <forge-checkbox>
      <input
        [id]="id"
        type="checkbox"
        [readonly]="props.readonly"
        [formControl]="formControl"
        [formlyAttributes]="field" />
      @if (props.label) {
        <label [attr.for]="id" slot="label">{{props.label}}</label>
      }
      @if (props.description) {
        <span slot="helper-text">{{props.description}}</span>
      }
    </forge-checkbox>
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
    ForgeCheckboxModule
  ],
  standalone: true
})
export class CheckboxTypeComponent extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {
  private moduleService = inject(FormlyDemoService);

  private unsubscribe = new Subject<void>();

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

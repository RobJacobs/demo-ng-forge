import { Component, inject, signal, viewChild, ChangeDetectionStrategy, DestroyRef, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyFormOptions, FormlyForm, provideFormlyCore, FormlyFieldConfig } from '@ngx-formly/core';
import { delay, finalize, lastValueFrom, Observable, of } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';
import { ForgeToolbarModule, ForgeButtonModule } from '@tylertech/forge-angular';
import { FORMLY_PROVIDER_CONFIG, FormlyFieldPropsExtended } from './lib/formly.constants';

import { AppDataService } from '@app/app-data.service';
import { IFilterParameter, IFilterResponse } from '@app/shared/interfaces';
import { FormlyDemoService } from './formly-demo.service';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html',
  styleUrls: ['./formly-demo.component.scss'],
  providers: [
    FormlyDemoService,
    provideFormlyCore({
      ...FORMLY_PROVIDER_CONFIG
    })
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [JsonPipe, ReactiveFormsModule, FormlyForm, ForgeToolbarModule, ForgeButtonModule]
})
export class FormlyDemoComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private formlyForm = viewChild(FormlyForm);
  private appDataService = inject(AppDataService);
  public formlyDemoService = inject(FormlyDemoService);

  public formGroup = new FormGroup({});
  public formOptions: FormlyFormOptions = {
    // detectChanges: (field) => {
    //   console.log(field);
    // }
    // checkExpressions: (field) => {
    //   console.log(field);
    // }
    // showError(field) {
    //   console.log(field);
    //   return false;
    // },
    // build: (field) => {
    //   console.log(field);
    //   return field;
    // }
  };
  public model = signal({
    displayOnly: {
      field01: 'Field 01 value',
      field02: 'Field 02 value'
    },
    tab01: {
      field01: 'Tab 01 field 01 value',
      field02: 'Tab 01 field 02 value'
    },
    tab02: {
      field01: 'Tab 02 field 01 value',
      field02: 'Tab 02 field 02 value'
    }
  });

  public formDefinition = signal<FormlyFieldConfig<FormlyFieldPropsExtended>[] | null>(null);

  public ngOnInit() {
    this.formlyDemoService.config.set({
      autocompleteFilter: this.autocompleteFilter,
      validateFieldAsync: this.validateFieldAsync,
      fieldHelpConfig: {
        dataObservable: this.fieldHelpData,
        transform: this.fieldHelpTransform
      }
    });
    this.formlyDemoService.buttonClick.subscribe((field) => {
      console.log(field);
      let activeElement = document.activeElement as HTMLElement;
      this.formGroup.disable();
      this.formlyDemoService.isBusy.set(true);
      // checkFieldExpressions(this.formlyForm(), this.formDefinition());
      setTimeout(() => {
        this.formGroup.enable();
        this.formlyDemoService.isBusy.set(false);
        // checkFieldExpressions(this.formlyForm(), this.formDefinition());
        requestAnimationFrame(() => {
          activeElement.focus();
          activeElement = undefined;
        });
      }, 3000);
    });
    this.onFooterAction('form-def');
  }

  public onFooterAction(action: 'data' | 'form-def' | 'form-def-update' | 'disable') {
    switch (action) {
      case 'data': {
        this.formlyDemoService.isBusy.set(true);
        this.formlyDemoService
          .getFormData()
          .pipe(
            takeUntilDestroyed(this.destroyRef),
            finalize(() => this.formlyDemoService.isBusy.set(false))
          )
          .subscribe((response) => {
            this.formGroup.patchValue(response);
          });
        break;
      }
      case 'form-def': {
        this.formlyDemoService.isBusy.set(true);
        this.formlyDemoService
          .getFormDefinition()
          .pipe(
            takeUntilDestroyed(this.destroyRef),
            finalize(() => this.formlyDemoService.isBusy.set(false))
          )
          .subscribe((response) => {
            this.formDefinition.set([response]);
          });
        break;
      }
      case 'form-def-update': {
        this.formlyDemoService.isBusy.set(true);
        this.formlyDemoService
          .getFormDefinitionUpdate()
          .pipe(
            takeUntilDestroyed(this.destroyRef),
            finalize(() => this.formlyDemoService.isBusy.set(false))
          )
          .subscribe((response) => {
            response.forEach((fieldDef) => {
              this.formDefinition().forEach((field) => {
                const fieldConfig = field.get(fieldDef.key);
                if (fieldConfig) {
                  FormlyDemoService.mergeFields(fieldConfig, fieldDef);
                } else {
                  // TODO insert fieldConfig
                }
              });
            });

            this.formDefinition.set(this.formDefinition());
          });
        break;
      }
      case 'disable': {
        this.formlyDemoService.isBusy.set(!this.formlyDemoService.isBusy());
        if (this.formGroup.disabled) {
          this.formGroup.enable();
        } else {
          this.formGroup.disable();
        }
        break;
      }
    }
  }

  private autocompleteFilter = (key: string | number | (string | number)[]) => {
    return (filterText: string, value: string) => {
      switch (key) {
        case 'occupation': {
          if (isDefined(value)) {
            return this.formlyDemoService.options.filter((o) => o.value === value);
          } else {
            return lastValueFrom(of(this.formlyDemoService.options.filter((o) => o.label.toLowerCase().includes(filterText.toLowerCase()))).pipe(delay(1000)));
          }
        }
        default: {
          return [];
        }
      }
    };
  };

  private fieldHelpData = (key: string | number | (string | number)[]) => {
    return (params: IFilterParameter): Observable<IFilterResponse<any>> => {
      switch (key) {
        case 'partner': {
          return this.appDataService.getPeople(params);
        }
        default: {
          return of(null);
        }
      }
    };
  };

  private fieldHelpTransform = (key: string | number | (string | number)[]) => {
    return (value: any): any => {
      switch (key) {
        case 'partner':
          return `${value.id} - ${value.firstName} ${value.lastName}`;
        default:
          return value;
      }
    };
  };

  private validateFieldAsync(control: AbstractControl, field: FormlyFieldConfig): Observable<ValidationErrors> {
    switch (field.key) {
      case 'firstName': {
        if (control.value?.length === 1) {
          return of({ duplicate: 'First name is duplicated.' }).pipe(delay(1000));
        } else {
          return of(null).pipe(delay(1000));
        }
      }
      case 'stringMask': {
        const pattern = /\d{3}-\d{2}-\d{4}/;
        if (!pattern.test(control.value)) {
          return of({ invalid: 'Invalid format' });
        } else {
          return of(null);
        }
      }
    }
    return of(null).pipe(delay(1000));
  }
}

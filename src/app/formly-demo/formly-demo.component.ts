import { Component, inject, signal, viewChild, ChangeDetectionStrategy, DestroyRef, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyFormOptions, FormlyForm, provideFormlyCore, FormlyFieldConfig } from '@ngx-formly/core';
import { delay, finalize, lastValueFrom, Observable, of, Subject } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';
import { IFilePickerChangeEventData } from '@tylertech/forge';
import { ForgeToolbarModule, ForgeButtonModule, BusyIndicatorService } from '@tylertech/forge-angular';
import { fieldEvents, FORMLY_PROVIDER_CONFIG, FormlyFieldPropsMerged, IFormlyFieldDefinitionConfig, IFormMessage } from './lib/formly.constants';

import { AppDataService } from '@app/app-data.service';
import { IFilterParameter, IFilterResponse } from '@app/shared/interfaces';
import { FormlyDemoService } from './formly-demo.service';
import { FormlyService } from './lib/formly.service';

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
  private busyIndicatorService = inject(BusyIndicatorService);
  public formlyDemoService = inject(FormlyDemoService);
  private formEventsSubject = new Subject<IFormMessage>();

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
  public model = signal({});
  public formDefinition: FormlyFieldConfig<FormlyFieldPropsMerged>[] | null;

  public formlyFieldDefinitions: any[];

  public ngOnInit() {
    this.onFooterAction('form-def');
    this.onFooterAction('data');
    FormlyService.formMessageBuffer(this.formEventsSubject)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        if (response?.length) {
          this.formEventsBufferHandler(response);
        }
      });
  }

  public onFooterAction(action: 'data' | 'form-def' | 'update' | 'disable') {
    switch (action) {
      case 'data': {
        this.formlyDemoService.isBusy.set(true);
        const busyRef = this.busyIndicatorService.open({ message: 'Fetching data...', variant: 'spinner' });
        this.model.set(null);
        this.formlyDemoService
          .getFormData()
          .pipe(
            takeUntilDestroyed(this.destroyRef),
            finalize(() => {
              this.formlyDemoService.isBusy.set(false);
              busyRef.hide();
            })
          )
          .subscribe((response) => {
            this.model.set(response);
          });
        break;
      }
      case 'form-def': {
        this.formlyDemoService.isBusy.set(true);
        const busyRef = this.busyIndicatorService.open({ message: 'Fetching form...', variant: 'spinner' });
        this.formlyDemoService
          .getFormDefinition()
          .pipe(
            takeUntilDestroyed(this.destroyRef),
            finalize(() => {
              this.formlyDemoService.isBusy.set(false);
              busyRef.hide();
            })
          )
          .subscribe((response) => {
            this.formlyFieldDefinitions = response;
            this.formDefinition = response.map((fd) => FormlyService.formlyFieldDefinitionAdapter(fd, this.fieldDefinitionConfig));
          });
        break;
      }
      case 'update': {
        this.formlyDemoService.isBusy.set(true);
        const busyRef = this.busyIndicatorService.open({ message: 'Fetching form update...', variant: 'spinner' });
        this.formlyDemoService
          .getFormUpdate()
          .pipe(
            takeUntilDestroyed(this.destroyRef),
            finalize(() => {
              this.formlyDemoService.isBusy.set(false);
              busyRef.hide();
            })
          )
          .subscribe((response) => {
            if (response?.data) {
              this.model.set(FormlyService.mergeModels(this.model(), response.data));
            }
            if (response.form) {
              FormlyService.mergeFields(this.formDefinition, response.form, this.fieldDefinitionConfig);
            }
            this.formOptions.build();
            if (response?.validation?.length) {
              FormlyService.setFieldValidation(this.formDefinition, response.validation);
            }
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

  private autocompleteFilter = (field: FormlyFieldConfig) => {
    return (filterText: string, value: string) => {
      switch (field.key) {
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

  private onBlur = (field: FormlyFieldConfig) => {
    this.formEventsSubject.next({ event: fieldEvents.blur, path: FormlyService.getPropertyPath(field), value: { ...this.model() } });
  };

  private onClick = (field: FormlyFieldConfig) => {
    this.formEventsSubject.next({ event: fieldEvents.click, path: FormlyService.getPropertyPath(field), value: { ...this.model() } });
  };

  private onChange = (field: FormlyFieldConfig) => {
    this.formEventsSubject.next({ event: fieldEvents.change, path: FormlyService.getPropertyPath(field), value: { ...this.model() } });
  };

  private fieldHelpData = (field: FormlyFieldConfig) => {
    return (params: IFilterParameter): Observable<IFilterResponse<any>> => {
      switch (field.key) {
        case 'partner': {
          return this.appDataService.getPeople(params);
        }
        default: {
          return of(null);
        }
      }
    };
  };

  private fieldHelpTransform = (field: FormlyFieldConfig) => {
    return (value: any): any => {
      switch (field.key) {
        case 'partner':
          return `${value.id} - ${value.firstName} ${value.lastName}`;
        default:
          return value;
      }
    };
  };

  private onFilePickerChange = (field: FormlyFieldConfig, event: CustomEvent<IFilePickerChangeEventData>) => {
    console.log(field);
    console.log(event);
    // this.formMessageSubject.next({ event: fieldEvents.change, key: field.key, value: event });
  };

  private onFocus = (field: FormlyFieldConfig) => {
    this.formEventsSubject.next({ event: fieldEvents.focus, path: FormlyService.getPropertyPath(field), value: { ...this.model() } });
  };

  private validateFieldAsync = () => {
    return (control: AbstractControl, field: FormlyFieldConfig): Observable<ValidationErrors> => {
      if (control.dirty || control.touched) {
        this.formEventsSubject.next({ path: FormlyService.getPropertyPath(field), event: fieldEvents.validate, value: control.value });
      }
      return of(control.errors);
    };
  };

  private fieldDefinitionConfig: IFormlyFieldDefinitionConfig = {
    autocompleteFilter: this.autocompleteFilter,
    blur: this.onBlur,
    click: this.onClick,
    change: this.onChange,
    fieldHelpConfig: {
      dataObservable: this.fieldHelpData,
      transform: this.fieldHelpTransform
    },
    focus: this.onFocus,
    filePickerChange: this.onFilePickerChange,
    validateFieldAsync: this.validateFieldAsync
  };

  private formEventsBufferHandler(messages: IFormMessage[]) {
    console.log(messages);
    this.formlyDemoService
      .postFormMessages(messages)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        if (response?.data?.length) {
          this.model.set(FormlyService.mergeModels(this.model(), response.data));
        }
        if (response?.form?.length) {
          FormlyService.mergeFields(this.formDefinition, response.form, this.fieldDefinitionConfig);
        }
        this.formOptions.build();
        if (response?.validation?.length) {
          FormlyService.setFieldValidation(this.formDefinition, response.validation);
        }
      });
  }
}

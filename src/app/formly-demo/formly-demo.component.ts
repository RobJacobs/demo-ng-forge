import { Component, inject, signal, viewChild, ChangeDetectionStrategy, DestroyRef, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyFormOptions, FormlyForm, provideFormlyCore, FormlyFieldConfig } from '@ngx-formly/core';
import { delay, finalize, lastValueFrom, map, Observable, of } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';
import { ForgeToolbarModule, ForgeButtonModule } from '@tylertech/forge-angular';
import { FORMLY_PROVIDER_CONFIG, FormlyFieldPropsMerged } from './lib/formly.constants';

import { AppDataService } from '@app/app-data.service';
import { IFilterParameter, IFilterResponse } from '@app/shared/interfaces';
import { FormlyDemoService } from './formly-demo.service';
import { IFilePickerChangeEventData } from '@tylertech/forge';
import { FormlyFieldPropsButton, FormlyFieldPropsFilePicker } from './lib/components';
import { FormlyService } from './lib/formly.service';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html',
  styleUrls: ['./formly-demo.component.scss'],
  providers: [
    FormlyService,
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
  private formlyService = inject(FormlyService);
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
  public model = signal({});

  public formDefinition = signal<FormlyFieldConfig<FormlyFieldPropsMerged>[] | null>(null);

  public ngOnInit() {
    this.formlyService.config.set({
      autocompleteFilter: this.autocompleteFilter,
      validateFieldAsync: this.validateFieldAsync,
      fieldHelpConfig: {
        dataObservable: this.fieldHelpData,
        transform: this.fieldHelpTransform
      }
    });
    this.formlyService.buttonClick.subscribe((response) => this.onButtonClick(response.field, response.event));
    this.formlyService.filePickerChange.subscribe((response) => this.onFilePickerChange(response.field, response.event));
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
            this.formDefinition.set(response.map((f) => this.formlyService.formlyFieldDefinitionAdapter(f)));
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
            if (response?.length) {
              this.formlyService.mergeFieldDefinitions(this.formDefinition(), response);
              this.formDefinition.set(this.formDefinition());
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

  private onButtonClick(field: FormlyFieldConfig<FormlyFieldPropsButton>, event: MouseEvent) {
    console.log(field);
    console.log(event);
  }

  private onFilePickerChange(field: FormlyFieldConfig<FormlyFieldPropsFilePicker>, event: CustomEvent<IFilePickerChangeEventData>) {
    console.log(field);
    console.log(event);
  }

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

  private validateFieldAsync = () => {
    return (control: AbstractControl, field: FormlyFieldConfig): Observable<ValidationErrors> => {
      if (control.dirty || control.touched) {
        return this.formlyDemoService.postFormMessages([{ key: field.key, event: 'change', value: control.value }]).pipe(
          takeUntilDestroyed(this.destroyRef),
          map((response) => response?.data?.validation)
        );
      }
      return of(null);
    };
  };
}

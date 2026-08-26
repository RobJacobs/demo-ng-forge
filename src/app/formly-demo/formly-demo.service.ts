import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { TextFieldComponentDelegate } from '@tylertech/forge';

import { FORMLY_COMPONENT_TYPES, FormlyFieldPropsExtended, IFormlyFieldDefinition, IFormlyFieldDefinitionConfig } from './lib/formly.constants';

@Injectable()
export class FormlyDemoService {
  private httpClient = inject(HttpClient);

  public options = [
    { label: 'Option 01', value: '01' },
    { label: 'Option 02', value: '02' },
    { label: 'Option 03', value: '03' },
    { label: 'Option 04', value: '04' },
    { label: 'Option 05', value: '05' },
    { label: 'Option 06', value: '06' },
    { label: 'Option 07', value: '07' },
    { label: 'Option 08', value: '08' },
    { label: 'Option 09', value: '09' },
    { label: 'Option 10', value: '10' }
  ];

  public isBusy = signal(false);

  public getFormDefinition(): Observable<FormlyFieldConfig<FormlyFieldPropsExtended>> {
    return this.httpClient.get<IFormlyFieldDefinition>('mock-data/formly-definition.json').pipe(map((response) => this.formlyFieldDefinitionAdapter(response)));
  }

  public getFormDefinitionUpdate(): Observable<IFormlyFieldDefinition[]> {
    return this.httpClient.get<IFormlyFieldDefinition[]>('mock-data/formly-definition-update.json');
  }

  public getFormData(): Observable<any> {
    return this.httpClient.get<any[]>('mock-data/formly-data.json');
  }

  // TODO move to lib

  public buttonClick = new Subject<FormlyFieldConfig<FormlyFieldPropsExtended>>();

  public config = signal<IFormlyFieldDefinitionConfig | null>(null);

  public static mergeFields(fieldConfig: any, fieldDefinition: any) {
    Object.keys(fieldDefinition)
      .filter((k) => k !== 'key')
      .forEach((key) => {
        if (!isDefined(fieldConfig[key])) {
          fieldConfig[key] = {};
        }
        switch (key) {
          // TODO when to merge values vs overwrite
          case 'className': {
            fieldConfig[key] = `${fieldConfig[key]} ${fieldDefinition[key]}`;
            break;
          }
          case 'attributes':
          case 'props': {
            this.mergeFields(fieldConfig[key], fieldDefinition[key]);
            break;
          }
          default: {
            fieldConfig[key] = fieldDefinition[key];
          }
        }
      });
  }

  private formlyFieldDefinitionAdapter(fieldDefinition: IFormlyFieldDefinition): FormlyFieldConfig<FormlyFieldPropsExtended> {
    const fieldConfig: FormlyFieldConfig<FormlyFieldPropsExtended> = { ...fieldDefinition };
    if (this.config().validateFieldAsync) {
      fieldConfig.asyncValidators = { validation: [this.config().validateFieldAsync] };
    }
    // TODO overrides props.disabled property
    // fieldConfig.expressions = {
    //   ...fieldConfig.expressions,
    //   'props.disabled': (field) => {
    //     return this.isBusy();
    //   }
    // };
    switch (fieldConfig.type) {
      case FORMLY_COMPONENT_TYPES.autocomplete: {
        fieldConfig.props = { ...fieldConfig.props, autocompleteFilter: this.config().autocompleteFilter(fieldConfig.key) };
        break;
      }
      case FORMLY_COMPONENT_TYPES.button:
      case FORMLY_COMPONENT_TYPES.iconButton: {
        fieldConfig.props.click = (field) => this.buttonClick.next(field);
        break;
      }
      case FORMLY_COMPONENT_TYPES.textFieldInputHelp: {
        fieldConfig.props.fieldHelpConfig.dataObservable = this.config().fieldHelpConfig.dataObservable(fieldConfig.key);
        if (isDefined(this.config().fieldHelpConfig.transform)) {
          fieldConfig.props.fieldHelpConfig.transform = this.config().fieldHelpConfig.transform(fieldConfig.key);
        }
        fieldConfig.props.fieldHelpConfig.columnConfigurations.forEach((col) => {
          col.filterDelegate = new TextFieldComponentDelegate({ props: { ariaLabel: col.header } });
        });
        break;
      }
    }

    if (fieldDefinition.fieldGroup?.length) {
      fieldConfig.fieldGroup = fieldDefinition.fieldGroup.map((f) => this.formlyFieldDefinitionAdapter(f));
    }

    return fieldConfig;
  }
}

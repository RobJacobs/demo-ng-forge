import { Injectable, signal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';
import { IFilePickerChangeEventData, TextFieldComponentDelegate } from '@tylertech/forge';
import { FORMLY_COMPONENT_TYPES, FormlyFieldPropsBase, FormlyFieldPropsMerged, IFormlyFieldDefinition, IFormlyFieldDefinitionConfig } from './formly.constants';
import { FormlyFieldPropsButton, FormlyFieldPropsFilePicker } from './components';

@Injectable()
export class FormlyService {
  public buttonClick = new Subject<{ field: FormlyFieldConfig<FormlyFieldPropsButton>; event: MouseEvent }>();
  public filePickerChange = new Subject<{ field: FormlyFieldConfig<FormlyFieldPropsFilePicker>; event: CustomEvent<IFilePickerChangeEventData> }>();

  public config = signal<IFormlyFieldDefinitionConfig | null>(null);

  private mergeFieldDefinition(fieldConfig: any, fieldDefinition: any) {
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
            this.mergeFieldDefinition(fieldConfig[key], fieldDefinition[key]);
            break;
          }
          default: {
            fieldConfig[key] = fieldDefinition[key];
          }
        }
      });
  }

  public mergeFieldDefinitions(fieldConfigs: FormlyFieldConfig<FormlyFieldPropsBase>[], fieldDefintions: IFormlyFieldDefinition[]) {
    fieldDefintions.forEach((fieldDef) => {
      fieldConfigs.forEach((f) => {
        if (f.key === fieldDef.key) {
          this.mergeFieldDefinition(f, fieldDef);
        } else {
          const childFieldConfig = f.get(fieldDef.key);
          if (childFieldConfig) {
            this.mergeFieldDefinition(childFieldConfig, fieldDef);
          } else {
            // TODO insert config?
          }
        }
      });
    });
  }

  public formlyFieldDefinitionAdapter(fieldDefinition: IFormlyFieldDefinition): FormlyFieldConfig<FormlyFieldPropsBase> {
    const fieldConfig: FormlyFieldConfig<FormlyFieldPropsMerged> = { ...fieldDefinition };

    const validationFieldTypes = [
      FORMLY_COMPONENT_TYPES.autocomplete,
      FORMLY_COMPONENT_TYPES.checkbox,
      FORMLY_COMPONENT_TYPES.datePicker,
      FORMLY_COMPONENT_TYPES.filePicker,
      FORMLY_COMPONENT_TYPES.radio,
      FORMLY_COMPONENT_TYPES.select,
      FORMLY_COMPONENT_TYPES.switch,
      FORMLY_COMPONENT_TYPES.textFieldInput,
      FORMLY_COMPONENT_TYPES.textFieldInputHelp,
      FORMLY_COMPONENT_TYPES.textFieldTextarea
    ];
    if (fieldDefinition.key && validationFieldTypes.includes(fieldConfig.type as string) && this.config().validateFieldAsync) {
      fieldConfig.asyncValidators = { validation: [this.config().validateFieldAsync()] };
    }

    // TODO overrides props.disabled property
    // fieldConfig.expressions = {
    //   ...fieldConfig.expressions,
    //   'props.disabled': (field) => {
    //     return this.isBusy();
    //   }
    // };
    if (!fieldConfig.props) {
      fieldConfig.props = {};
    }
    // focus?: FormlyAttributeEvent;
    // blur?: FormlyAttributeEvent;
    // keyup?: FormlyAttributeEvent;
    // keydown?: FormlyAttributeEvent;
    // click?: FormlyAttributeEvent;
    // change?: FormlyAttributeEvent;
    // keypress?: FormlyAttributeEvent;
    // wheel?: FormlyAttributeEvent;
    switch (fieldConfig.type) {
      case FORMLY_COMPONENT_TYPES.autocomplete: {
        fieldConfig.props.autocompleteFilter = this.config().autocompleteFilter(fieldConfig.key);
        break;
      }
      case FORMLY_COMPONENT_TYPES.button:
      case FORMLY_COMPONENT_TYPES.iconButton: {
        fieldConfig.props.click = (field, event) => this.buttonClick.next({ field, event });
        break;
      }
      case FORMLY_COMPONENT_TYPES.filePicker: {
        fieldConfig.props.filePickerChange = (field, event) => this.filePickerChange.next({ field, event });
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

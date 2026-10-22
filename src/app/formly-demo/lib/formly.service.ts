import { Injectable } from '@angular/core';
import { buffer, debounceTime, map, Observable, Subject } from 'rxjs';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { isDefined, isNumber, isString } from '@tylertech/forge-core';
import { TextFieldComponentDelegate } from '@tylertech/forge';
import {
  fieldEvents,
  FORMLY_COMPONENT_TYPES,
  FormlyFieldPropsMerged,
  IFormlyFieldDefinition,
  IFormlyFieldDefinitionConfig,
  IFormMessage,
  IPatchOperation
} from './formly.constants';

@Injectable()
export class FormlyService {
  public static mergeModels(source: any, patches: IPatchOperation[]): any {
    patches.forEach((patch) => this.patchPropertyValue(source, patch));
    return source;
  }

  public static mergeFields(source: FormlyFieldConfig[], patches: IPatchOperation[], fieldDefinitionConfig: IFormlyFieldDefinitionConfig) {
    patches.forEach((patch) => this.patchFormlyField(source, patch));
    return source.map((f) => this.formlyFieldDefinitionAdapter(f as any, fieldDefinitionConfig));
  }

  public static formlyFieldDefinitionAdapter = (
    fieldDefinition: IFormlyFieldDefinition,
    fieldDefinitionConfig: IFormlyFieldDefinitionConfig
  ): FormlyFieldConfig<FormlyFieldPropsMerged> => {
    const fieldConfig: FormlyFieldConfig<FormlyFieldPropsMerged> = fieldDefinition;

    const inputFieldTypes = [
      FORMLY_COMPONENT_TYPES.autocomplete,
      FORMLY_COMPONENT_TYPES.checkbox,
      FORMLY_COMPONENT_TYPES.datePicker,
      FORMLY_COMPONENT_TYPES.radio,
      FORMLY_COMPONENT_TYPES.select,
      FORMLY_COMPONENT_TYPES.switch,
      FORMLY_COMPONENT_TYPES.textFieldInput,
      FORMLY_COMPONENT_TYPES.textFieldInputHelp,
      FORMLY_COMPONENT_TYPES.textFieldTextarea
    ];

    if (!fieldConfig.props) {
      fieldConfig.props = {};
    }

    if (!fieldConfig.props.attributes) {
      fieldConfig.props.attributes = {};
    }

    if (fieldConfig.key && !fieldConfig.props.attributes['data-key'] && !isNaN(parseInt(fieldConfig.key as string, 10))) {
      fieldConfig.props.attributes['data-key'] = fieldConfig.key.toString();
    }

    // focus?: FormlyAttributeEvent;
    // blur?: FormlyAttributeEvent;
    // keyup?: FormlyAttributeEvent;
    // keydown?: FormlyAttributeEvent;
    // click?: FormlyAttributeEvent;
    // change?: FormlyAttributeEvent;
    // keypress?: FormlyAttributeEvent;
    // wheel?: FormlyAttributeEvent;

    if (fieldDefinition.props.events?.includes(fieldEvents.blur) && fieldDefinitionConfig?.blur) {
      fieldConfig.props.blur = (field, event) => fieldDefinitionConfig.blur(field);
    } else {
      delete fieldConfig.props.blur;
    }

    if (fieldDefinition.props.events?.includes(fieldEvents.change) && fieldDefinitionConfig.change && inputFieldTypes.includes(fieldConfig.type as string)) {
      fieldConfig.props.change = (field, event) => fieldDefinitionConfig.change(field);
    } else {
      delete fieldConfig.props.change;
    }

    if (fieldDefinition.props.events?.includes(fieldEvents.focus) && fieldDefinitionConfig.focus) {
      fieldConfig.props.focus = (field, event) => fieldDefinitionConfig.focus(field);
    } else {
      delete fieldConfig.props.focus;
    }

    if (
      fieldDefinition.props.events?.includes(fieldEvents.validate) &&
      fieldDefinitionConfig.validateFieldAsync &&
      inputFieldTypes.includes(fieldConfig.type as string)
    ) {
      fieldConfig.asyncValidators = { validation: [fieldDefinitionConfig.validateFieldAsync()] };
    } else {
      delete fieldConfig.asyncValidators;
    }

    switch (fieldConfig.type) {
      case FORMLY_COMPONENT_TYPES.autocomplete: {
        if (fieldDefinitionConfig?.autocompleteFilter) {
          fieldConfig.props.autocompleteFilter = fieldDefinitionConfig.autocompleteFilter(fieldConfig);
        } else {
          delete fieldConfig.props.autocompleteFilter;
        }
        break;
      }
      case FORMLY_COMPONENT_TYPES.button:
      case FORMLY_COMPONENT_TYPES.iconButton: {
        fieldConfig.props.click = (field, event) => fieldDefinitionConfig.click(field);
        break;
      }
      case FORMLY_COMPONENT_TYPES.filePicker: {
        fieldConfig.props.filePickerChange = (field, event) => fieldDefinitionConfig.filePickerChange(field, event);
        break;
      }
      case FORMLY_COMPONENT_TYPES.textFieldInputHelp: {
        // TODO
        const fieldHelpConfig = fieldConfig.props.fieldHelpConfig;
        const serviceFieldHelpConfig = fieldDefinitionConfig?.fieldHelpConfig;
        if (!fieldHelpConfig || !serviceFieldHelpConfig) {
          break;
        }
        fieldHelpConfig.dataObservable = serviceFieldHelpConfig.dataObservable(fieldConfig);
        if (isDefined(serviceFieldHelpConfig.transform)) {
          fieldHelpConfig.transform = serviceFieldHelpConfig.transform(fieldConfig);
        }
        fieldConfig.props?.fieldHelpConfig?.columnConfigurations.forEach((col) => {
          col.filterDelegate = new TextFieldComponentDelegate({ props: { ariaLabel: col.header } });
        });
        break;
      }
    }

    if (fieldDefinition.fieldGroup?.length) {
      fieldConfig.fieldGroup = fieldDefinition.fieldGroup.map((f) => FormlyService.formlyFieldDefinitionAdapter(f, fieldDefinitionConfig));
    } else if (fieldDefinition.fieldArray?.fieldGroup?.length) {
      (fieldConfig.fieldArray as any).fieldGroup = fieldDefinition.fieldArray.fieldGroup.map((f) =>
        FormlyService.formlyFieldDefinitionAdapter(f as IFormlyFieldDefinition, fieldDefinitionConfig)
      );
    }

    return fieldConfig;
  };

  public static formMessageBuffer(formMessageSubject: Subject<IFormMessage>, interval = 500): Observable<IFormMessage[]> {
    const notifier = formMessageSubject.pipe(debounceTime(interval));
    return formMessageSubject.pipe(
      buffer(notifier),
      map((results) => {
        return results
          .reduceRight((prev, curr) => {
            if (prev.at(-1)?.event !== curr.event || prev.at(-1)?.path !== curr.path) {
              prev.push(curr);
            }
            return prev;
          }, [] as IFormMessage[])
          .reverse();
      })
    );
  }

  public static getField(fields: FormlyFieldConfig[], key: string): FormlyFieldConfig | null {
    for (const field of fields) {
      if (field.key === key) {
        return field;
      }
      const child = field.get(key);
      if (child) {
        return child;
      }
    }
    return null;
  }

  public static getPropertyPath(field: FormlyFieldConfig): string {
    const pathArray = [field.key];
    while (field.parent) {
      field = field.parent;
      if (field.key?.toString().length) {
        pathArray.push(field.key);
      }
    }

    return pathArray.reverse().join('.');
  }

  public static setFieldValidation(fields: FormlyFieldConfig[], validation: IPatchOperation[]) {
    // TODO form-control-invalid directive not displaying validation errors when set manually
    validation?.forEach((msg) => {
      const field = FormlyService.getField(fields, msg.path);
      if (field?.formControl) {
        switch (msg.op) {
          case 'add': {
            field.formControl.setErrors(msg.value, { emitEvent: true });
            break;
          }
          case 'delete': {
            const errors = { ...field.formControl.errors };
            Object.entries(msg.value).forEach(([key, value]) => {
              delete errors[key];
            });
            field.formControl.setErrors(errors, { emitEvent: true });
            break;
          }
          case 'update': {
            const errors = { ...field.formControl.errors };
            Object.entries(msg.value).forEach(([key, value]) => {
              errors[key] = value;
            });
            field.formControl.setErrors(errors, { emitEvent: true });
            break;
          }
        }
      }
    });
  }

  private static patchPropertyValue(obj: any, patch: IPatchOperation) {
    let path = patch.path.replace(/\[(\w+)\]/g, '.$1'); // Convert indexes to properties
    path = path.replace(/^\./, ''); // Strip a leading dot
    const pathArray = path.split('.');

    for (let i = 0; i < pathArray.length - 1; i++) {
      const key = pathArray[i];
      obj = obj[key] ?? (obj[key] = {});
    }

    if (patch.op === 'delete') {
      obj[pathArray[pathArray.length - 1]] = undefined;
    } else {
      obj[pathArray[pathArray.length - 1]] = patch.value;
    }
  }

  private static patchFormlyField(fields: FormlyFieldConfig[], patch: IPatchOperation) {
    let patchField: FormlyFieldConfig;

    let path = patch.path.replace(/\[(\w+)\]/g, '.$1'); // Convert indexes to properties
    path = path.replace(/^\./, ''); // Strip a leading dot
    const pathArray = path.split('.');
    let patchFieldPath: string;

    for (const field of fields) {
      for (let i = 0; i < pathArray.length; i++) {
        const fieldPathIndex = pathArray.length - 1 - i;
        patchFieldPath = pathArray.slice(0, fieldPathIndex).join('.');
        patchField = field.get(patchFieldPath);
        if (patchField) {
          patchFieldPath = pathArray.slice(fieldPathIndex).join('.');
          break;
        }
      }

      if (patchField) {
        break;
      }
    }

    if (patchField && patchFieldPath?.length) {
      this.patchPropertyValue(patchField, { op: patch.op, path: patchFieldPath, value: patch.value });
    }
  }
}

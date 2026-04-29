import { Component, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyForm, provideFormlyCore, FormlyFieldConfig } from '@ngx-formly/core';
import { CellAlign, TextFieldComponentDelegate } from '@tylertech/forge';
import { ForgeToolbarModule } from '@tylertech/forge-angular';
import { checkFieldExpressions, FORMLY_CLASSES, FORMLY_COMPONENT_TYPES, FORMLY_PROVIDER_CONFIG, FormlyFieldPropsExtended } from './lib/formly.constants';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { IPerson } from 'src/app/shared/interfaces';
import { IFieldHelpConfig } from 'src/app/shared/components/field-help/field-help.constants';
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
  imports: [CommonModule, ReactiveFormsModule, FormlyForm, ForgeToolbarModule]
})
export class FormlyDemoComponent {
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

  private partnerFieldHelpConfig: IFieldHelpConfig = {
    columnConfigurations: [
      {
        property: 'image',
        width: 48,
        align: CellAlign.Center,
        template: (rowIndex: number, cellElement: HTMLElement, data: any) => {
          const imgElement = document.createElement('img') as HTMLImageElement;
          imgElement.src = `mock-data/${Utils.formatNumber(data.id, '2.0-0')}-small.png`;
          imgElement.style.width = '48px';
          imgElement.style.height = '48px';
          imgElement.style.borderRadius = '50%';
          imgElement.setAttribute('alt', '');
          return imgElement;
        }
      },
      {
        header: 'Id',
        property: 'id',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Id');
          return delegate;
        }
      },
      {
        header: 'First',
        property: 'firstName',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'First Nmae');
          return delegate;
        }
      },
      {
        header: 'Last',
        property: 'lastName',
        initialSort: true,
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Last Nmae');
          return delegate;
        }
      },
      {
        header: 'Gender',
        property: 'gender',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Gender');
          return delegate;
        }
      },
      {
        header: 'Occupation',
        property: 'occupation',
        sortable: true,
        filter: true,
        filterDelegate: () => {
          const delegate = new TextFieldComponentDelegate();
          delegate.inputElement.setAttribute('aria-label', 'Occupation');
          return delegate;
        }
      }
    ],
    title: 'Browse people',
    key: 'id',
    dataObservable: (param) => this.appDataService.getPeople(param),
    transform: (value: IPerson) => {
      return `${value.id} - ${value.firstName} ${value.lastName}`;
    }
    // multiselect: true
    // transform: (value: IPerson[]) => {
    //   return value.map((p) => `${p.firstName} ${p.lastName}`).join(', ');
    // }
  };

  public isBusy = signal(false);

  public formDefinition = signal<FormlyFieldConfig<FormlyFieldPropsExtended>[]>([
    {
      className: FORMLY_CLASSES.containerGrid,
      props: {
        attributes: {
          style: 'grid-template-columns: 1fr 1fr;'
        }
      },
      fieldGroup: [
        {
          template: `<h3 class="forge-typography--subheading4">Group header</h3>`,
          props: {
            attributes: {
              style: 'grid-column: 1 / -1;'
            }
          }
        },
        {
          key: 'displayOnly',
          fieldGroup: [
            {
              type: FORMLY_COMPONENT_TYPES.labelValue,
              key: 'field01',
              props: {
                label: 'Field 01'
              }
            },
            {
              type: FORMLY_COMPONENT_TYPES.labelValue,
              key: 'field02',
              props: {
                label: 'Field 02'
              }
            }
          ]
        },
        {
          type: FORMLY_COMPONENT_TYPES.textFieldInput,
          key: 'firstName',
          props: {
            label: 'First name',
            required: true
          },
          asyncValidators: {
            validation: [this.formlyDemoService.validateFieldAsync]
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.textFieldInput,
          key: 'lastName',
          props: {
            label: 'Last name',
            required: true
          },
          asyncValidators: {
            validation: [this.formlyDemoService.validateFieldAsync]
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.select,
          key: 'gender',
          props: {
            label: 'Gender',
            required: true,
            options: [
              { label: 'Male', value: 'm' },
              { label: 'Female', value: 'f' },
              { label: 'Unknown', value: 'u' }
            ]
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.autocomplete,
          key: 'occupation',
          props: {
            label: 'Occupation',
            required: true,
            autocompleteFilter: this.formlyDemoService.autocompleteFilter
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.datePicker,
          key: 'dateOfBirth',
          props: {
            label: 'Date of birth',
            required: true,
            minDate: '06/01/1970',
            maxDate: '07/31/2030'
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.textFieldInputHelp,
          key: 'partner',
          props: {
            label: 'Partner',
            required: true,
            fieldHelpConfig: this.partnerFieldHelpConfig
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.checkbox,
          key: 'citizen',
          defaultValue: true,
          props: {
            label: 'Am I a citizen'
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.switch,
          key: 'deceased',
          defaultValue: false,
          props: {
            label: 'Am I deceased'
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.divider,
          props: {
            attributes: {
              style: 'grid-column: 1 / -1;'
            }
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.radio,
          key: 'size',
          defaultValue: 'sm',
          props: {
            label: 'Select a size',
            orientation: 'vertical',
            radioOptions: [
              { label: 'Small', value: 'sm' },
              { label: 'Medium', value: 'md' },
              { label: 'Large', value: 'lg' }
            ]
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.textFieldTextarea,
          key: 'comment',
          props: {
            label: 'Comment',
            required: true,
            rows: 4,
            attributes: {
              style: 'grid-column: 1 / -1;'
            }
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.tabBar,
          props: {
            attributes: {
              style: 'grid-column: 1 / -1;'
            }
          },
          fieldGroup: [
            {
              className: FORMLY_CLASSES.containerGrid,
              props: {
                label: 'Tab 01',
                attributes: {
                  style: 'grid-template-columns: 1fr 1fr; padding-block: 8px;'
                }
              },
              expressions: {
                'props.disabled': () => this.isBusy()
              },
              fieldGroup: [
                {
                  type: FORMLY_COMPONENT_TYPES.textFieldInput,
                  key: 'tab01.stringMask',
                  props: {
                    label: 'String mask',
                    required: true,
                    mask: '000-00-0000',
                    description: 'format: ###-##-####'
                  },
                  asyncValidators: {
                    validation: [this.formlyDemoService.validateFieldAsync]
                  },
                  expressions: {
                    'props.disabled': () => this.isBusy()
                  }
                },
                {
                  type: FORMLY_COMPONENT_TYPES.textFieldInput,
                  key: 'tab01.numberMask',
                  props: {
                    label: 'Number mask',
                    type: 'number',
                    required: true,
                    mask: '&&&,&&#.##'
                  },
                  expressions: {
                    'props.disabled': () => this.isBusy()
                  }
                }
              ]
            },
            {
              className: FORMLY_CLASSES.containerGrid,
              props: {
                label: 'Tab  02',
                attributes: {
                  style: 'grid-template-columns: 1fr 1fr; padding-block: 8px;'
                }
              },
              expressions: {
                'props.disabled': () => this.isBusy()
              },
              fieldGroup: [
                {
                  type: FORMLY_COMPONENT_TYPES.labelValue,
                  key: 'tab02.field01',
                  props: {
                    label: 'Tab 02 Field 01'
                  }
                },
                {
                  type: FORMLY_COMPONENT_TYPES.labelValue,
                  key: 'tab02.field02',
                  props: {
                    label: 'Tab 02 Field 02'
                  }
                }
              ]
            }
          ]
        },
        {
          type: FORMLY_COMPONENT_TYPES.button,
          props: {
            label: `Click me`,
            buttonVariant: 'outlined',
            theme: 'warning',
            click: (field) => {
              this.buttonClick(field);
            },
            attributes: {
              style: 'align-self: center'
            }
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.iconButton,
          props: {
            label: 'Edit record',
            iconName: 'edit',
            iconButtonVariant: 'tonal',
            click: (field) => {
              this.buttonClick(field);
            },
            attributes: {
              style: 'align-self: center'
            }
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        },
        {
          type: FORMLY_COMPONENT_TYPES.filePicker,
          props: {
            filePickerChange: (event) => {
              console.log(event);
            },
            label: 'Add attachments',
            multiple: true,
            accept: '.jpg, .pdf, .txt'
          },
          expressions: {
            'props.disabled': () => this.isBusy()
          }
        }
      ]
    }
  ]);

  private buttonClick(field: FormlyFieldConfig<FormlyFieldPropsExtended>) {
    let activeElement = document.activeElement as HTMLElement;
    this.isBusy.set(true);
    checkFieldExpressions(this.formlyForm(), this.formDefinition());
    setTimeout(() => {
      this.isBusy.set(false);
      checkFieldExpressions(this.formlyForm(), this.formDefinition());
      requestAnimationFrame(() => {
        activeElement.focus();
        activeElement = undefined;
      });
    }, 3000);
  }
}

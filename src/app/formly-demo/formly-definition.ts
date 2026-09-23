import { inject, signal } from '@angular/core';
import { FORMLY_CLASSES, FORMLY_COMPONENT_TYPES, FormlyFieldPropsMerged } from './lib/formly.constants';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyDemoService } from './formly-demo.service';

export class FormlyDefinition {
  public isBusy = signal(false);

  public formDefinition = signal<FormlyFieldConfig<FormlyFieldPropsMerged>[]>([
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
            // validation: [this.validateFieldAsync]
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
            // validation: [this.validateFieldAsync]
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
            required: true
            // autocompleteFilter: this.autocompleteFilter
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
            required: true
            // TODO
            // fieldHelpConfig: this.partnerFieldHelpConfig
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
                    // validation: [this.validateFieldAsync]
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
              // TODO
              // this.buttonClick(field);
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
              // TODO
              // this.buttonClick(field);
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
}

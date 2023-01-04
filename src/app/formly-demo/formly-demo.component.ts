import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isDefined } from '@tylertech/forge-core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyDemoService } from './formly-demo.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html',
  styleUrls: ['./formly-demo.component.scss']
})
export class FormlyDemoComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  public formGroup = new FormGroup({});
  public formDefinition?: FormlyFieldConfig[];
  public formOptions: FormlyFormOptions = {
    // build: (field) => {
    //   console.log(field);
    //   return {
    //   };
    // },
  };
  public model = {
    firstName: '',
    lastName: '',
    isActive: null,
    address: {
      street: '',
      city: '',
      state: ''
    },
    children: [
      {
        firstName: 'Child1first',
        lastName: 'Child1last'
      },
      {
        firstName: 'Child2first',
        lastName: 'Child2last'
      }
    ]
  } as any;
  public record: any;
  public formMessage: { id: string; message: string; };

  constructor(
    private moduleService: FormlyDemoService
  ) {
    this.moduleService.formMessage.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(result => {
      this.formMessage = result;
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit() {
    this.formDefinition = [
      {
        // type: 'container',
        props: {
          label: 'Container',
          type: 'grid',
          attributes: {
            columns: 2
          }
        },
        fieldGroup: [
          {
            key: 'firstName',
            type: 'input',
            props: {
              label: 'First name',
              required: true,
              description: 'Persons first name',
              attributes: {
                width: 480
              }
            }
          },
          {
            key: 'lastName',
            type: 'input',
            props: {
              label: 'Last name',
              description: 'Persons last name',
              attributes: {
                width: 320,
                column: 1,
                row: 2
              }
            }
          },
          {
            key: 'age',
            type: 'input',
            props: {
              label: 'Age',
              type: 'number'
            }
          },
          {
            key: 'isActive',
            type: 'checkbox',
            props: {
              label: 'Is active'
            }
          },
          {
            key: 'birthDate',
            type: 'date-picker',
            props: {
              label: 'DOB',
              description: 'Persons date of birth',
              required: true
            }
          },
          {
            key: 'gender',
            type: 'select',
            props: {
              label: 'Gender',
              options: [
                { label: 'Male', value: 'M' },
                { label: 'Female', value: 'F' },
                { label: 'Other', value: 'O' }
              ]
            }
          },
          {
            key: 'comment',
            type: 'textarea',
            props: {
              label: 'Comment',
              required: true
            }
          },
          {
            key: 'size',
            type: 'radio',
            props: {
              label: 'Size',
              description: 'What is your size?',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' }
              ],
              required: true
            }
          },
          {
            key: 'officeLocation',
            type: 'input-help',
            props: {
              label: 'Office location',
              description: 'What is your office location',
              optionsKey: 'id',
              options: [
                { label: 'Address', property: 'address' },
                { label: 'City', property: 'city' },
                { label: 'State', property: 'state' }
              ]
            }
          }
        ]
      },
      {
        className: 'form-divider',
        template: '<forge-divider style="margin: 16px 0"></forge-divider>',
        props: {
          safeHtml: true
        }
      } as FormlyFieldConfig,
      {
        // type: 'container',
        props: {
          type: 'group',
          label: 'Address'
        },
        fieldGroup: [
          {
            props: {
              type: 'hbox'
            },
            fieldGroup: [
              {
                key: 'address.street',
                type: 'input',
                props: {
                  label: 'Street'
                }
              },
              {
                key: 'address.city',
                type: 'input',
                props: {
                  label: 'City'
                }
              },
              {
                key: 'address.state',
                type: 'input',
                props: {
                  label: 'State'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'tab',
        fieldGroup: [
          {
            props: {
              label: 'Tab 1'
            },
            fieldGroup: [
              {
                props: {
                  type: 'hbox'
                },
                fieldGroup: [
                  {
                    key: 'tab.field1',
                    type: 'input',
                    props: {
                      label: 'Field 1'
                    }
                  },
                  {
                    key: 'tab.field2',
                    type: 'input',
                    props: {
                      label: 'Field 2'
                    }
                  }
                ]
              }
            ]
          },
          {
            props: {
              label: 'Tab 2'
            },
            fieldGroup: [
              {
                props: {
                  type: 'vbox'
                },
                fieldGroup: [
                  {
                    key: 'tab.field3',
                    type: 'input',
                    props: {
                      label: 'Field 3'
                    }
                  },
                  {
                    key: 'tab.field4',
                    type: 'input',
                    props: {
                      label: 'Field 4'
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        key: 'children',
        type: 'table',
        props: {
          columns: [
            {
              label: 'First name',
              key: 'firstName',
              defaultValue: null
            },
            {
              label: 'Last name',
              key: 'lastName',
              defaultValue: null
            }
          ]
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'firstName',
              type: 'input',
              props: {
                required: true
              }
            },
            {
              key: 'lastName',
              type: 'input'
            }
          ]
        }
      }
    ];
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

    // this.moduleService.getFormDefinition().subscribe(result => {
    //   this.formDefinition = result.map(f => {
    //     f.modelOptions = { updateOn: 'blur' };

    //     return f;
    //   });
    // });

    // this.moduleService.getGeneroFormDefinition().subscribe(result => {
    //   let formDefinition: any[] = [];

    //   const document = new DOMParser().parseFromString(result, 'application/xml') as XMLDocument;

    //   const buildContainerElement = (type: string, node: Element): FormlyFieldConfig => {
    //     const fieldConfig: FormlyFieldConfig = {};

    //     // fieldConfig.wrappers = ['container'];
    //     fieldConfig.props = {
    //       type: type.toLocaleLowerCase()
    //     };
    //     const label = node.getAttribute('text');
    //     if (label?.length) {
    //       fieldConfig.props.label = label;
    //     }

    //     defineLayoutProperty(node, fieldConfig);

    //     return fieldConfig;
    //   }

    //   const buildFormElement = (node: Element, label?: string): FormlyFieldConfig | undefined => {
    //     const inputNode = node.firstElementChild;
    //     if (!inputNode) {
    //       return;
    //     }

    //     const fieldConfig = {
    //       key: node.getAttribute('colName'),
    //       props: {
    //         required: node.hasAttribute('required')
    //       },
    //       modelOptions: { updateOn: 'blur' }
    //     } as any;

    //     // const defaultValue = node.getAttribute('defaultValue');
    //     // if (defaultValue?.length) {
    //     //   element.defaultValue = defaultValue;
    //     // }

    //     if (label?.length) {
    //       fieldConfig.props.label = label;
    //     }

    //     switch (inputNode.tagName) {
    //       case 'ComboBox': {
    //         fieldConfig.type = 'select';
    //         fieldConfig.props.options = Array.from(inputNode.children).map(n => ({ value: n.getAttribute('name'), label: n.getAttribute('text') }));

    //         defineLayoutProperty(inputNode, fieldConfig);
    //         break;
    //       }
    //       case 'Edit': {
    //         fieldConfig.type = 'input';
    //         defineLayoutProperty(inputNode, fieldConfig);
    //         break;
    //       }
    //       case 'RadioGroup': {
    //         fieldConfig.type = 'radio';
    //         fieldConfig.props.options = Array.from(inputNode.children).map(n => ({ value: n.getAttribute('name'), label: n.getAttribute('text') }));
    //         defineLayoutProperty(inputNode, fieldConfig);
    //         break;
    //       }
    //     }

    //     return fieldConfig;
    //   }

    //   const parseNode = (node: Element): FormlyFieldConfig | undefined => {
    //     let siblingElement: Element | null;

    //     switch (node.tagName) {
    //       case 'Grid':
    //       case 'Group':
    //       case 'HBox':
    //       case 'VBox': {
    //         const element = buildContainerElement(node.tagName, node);
    //         if (node.children?.length) {
    //           element.fieldGroup = [];
    //           Array.from(node.children).forEach(n => {
    //             const childNode = parseNode(n);
    //             if (isDefined(childNode))
    //               element.fieldGroup!.push(childNode as FormlyFieldConfig);
    //           });
    //         }
    //         // element.props = {
    //         //   ...element.props,
    //         //   attributes: {
    //         //     appAttribute: ''
    //         //   }
    //         // }
    //         return element;
    //       }
    //       case 'Label': {
    //         siblingElement = node.nextElementSibling;
    //         if (siblingElement && siblingElement.tagName === 'FormField') {
    //           return buildFormElement(siblingElement, node.getAttribute('text') as string);
    //         }
    //         break;
    //       }
    //       case 'FormField': {
    //         siblingElement = node.previousElementSibling;
    //         if (siblingElement && siblingElement.tagName !== 'Label') {
    //           return buildFormElement(node);
    //         }
    //         break;
    //       }
    //       case 'Button': {
    //         return {
    //           type: 'button',
    //           props: {
    //             label: node.getAttribute('text') as string
    //           }
    //         }
    //       }
    //     }

    //     return;
    //   };

    //   const buildModel = (node: Element): any => {
    //     let model = {} as any;
    //     Array.from(node.children).forEach(n => {
    //       if (n.tagName === 'FormField') {
    //         const key = n.getAttribute('colName');
    //         if (key?.length) {
    //           model[key] = n.getAttribute('defaultValue');
    //           // model[key] = null;
    //         }
    //       }

    //       if (n.children?.length) {
    //         model = { ...model, ...buildModel(n) }
    //       }

    //     });

    //     return model;
    //   };

    //   const defineLayoutProperty = (node: Element, element: FormlyFieldConfig) => {
    //     Object.defineProperty(element, 'layout', {
    //       configurable: true,
    //       enumerable: true,
    //       value: {
    //         posX: node.hasAttribute('posX') ? parseInt(node.getAttribute('posX') as string) : undefined,
    //         posY: node.hasAttribute('posY') ? parseInt(node.getAttribute('posY') as string) : undefined,
    //         gridWidth: node.hasAttribute('gridWidth') ? parseInt(node.getAttribute('gridWidth') as string) : undefined,
    //         gridHeight: node.hasAttribute('gridHeight') ? parseInt(node.getAttribute('gridHeight') as string) : undefined,
    //         width: node.hasAttribute('width') ? parseInt(node.getAttribute('width') as string) : undefined,
    //         height: node.hasAttribute('height') ? parseInt(node.getAttribute('height') as string) : undefined
    //       },
    //       writable: true
    //     });
    //   }

    //   const rootNode = document.querySelector('Form') as Element;

    //   Array.from(rootNode?.children).filter(n => n.getAttribute('tabName') !== 'formonly').forEach(node => {
    //     formDefinition.push(parseNode(node));
    //   });

    //   this.model = buildModel(rootNode);
    //   // console.log(this.model);

    //   this.formDefinition = formDefinition;
    //   console.log(this.formDefinition);

    //   this.moduleService.getData().subscribe(record => {
    //     this.formGroup.patchValue(record);
    //   });

    // });
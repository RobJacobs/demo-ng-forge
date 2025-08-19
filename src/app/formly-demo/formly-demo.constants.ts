const formDefinitionBasic = [
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
        key: 'name',
        type: 'input',
        props: {
          label: 'Name',
          type: 'string',
          format: '###-##-####',
          required: true,
          description: 'Persons name',
          attributes: {
            width: 480
          }
        }
      },
      {
        key: 'age',
        type: 'input',
        props: {
          label: 'Age',
          type: 'number',
          format: '#,###,###,##&.&&',
          required: true,
          description: 'Persons age',
          attributes: {
            width: 480
          }
        }
      }
    ]
  }
];

const formDefinitionAll = [
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
        defaultValue: 18,
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
  },
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

const formDefinitionLayout = [
  {
    props: {
      type: 'vbox'
    },
    fieldGroup: [
      {
        props: {
          type: 'grid',
          attributes: {
            width: 83,
            height: 10
          }
        },
        fieldGroup: [
          {
            props: {
              type: 'group',
              attributes: {
                posX: 1,
                posY: 1,
                gridWidth: 83,
                gridHeight: 6
              }
            },
            fieldGroup: [
              {
                type: 'label',
                props: {
                  label: 'Year',
                  attributes: {
                    posX: 2,
                    posY: 2,
                    gridWidth: 4
                  }
                }
              },
              {
                key: 'tax_year',
                type: 'input',
                defaultValue: '2023',
                props: {
                  type: 'number',
                  disabled: true,
                  attributes: {
                    posX: 20,
                    posY: 2,
                    gridWidth: 4,
                    width: 4
                  }
                }
              },
              {
                key: 'which_value',
                type: 'radio',
                props: {
                  description: 'Value to use on report.',
                  options: [
                    { label: 'Original full value', value: 'O' },
                    { label: 'Current full value', value: 'C' }
                  ],
                  required: true,
                  attributes: {
                    posX: 2,
                    posY: 3,
                    gridWidth: 31,
                    width: 31
                  }
                }
              },
              {
                type: 'label',
                props: {
                  label: 'Minimum value',
                  required: true,
                  attributes: {
                    posX: 2,
                    posY: 4,
                    gridWidth: 13
                  }
                }
              },
              {
                key: 'min_val',
                type: 'input',
                props: {
                  type: 'number',
                  required: true,
                  attributes: {
                    posX: 20,
                    posY: 4,
                    gridWidth: 13,
                    width: 13
                  }
                }
              },
              {
                type: 'label',
                props: {
                  label: 'Sort vehicles by',
                  required: true,
                  attributes: {
                    posX: 2,
                    posY: 5,
                    gridWidth: 17
                  }
                }
              },
              {
                key: 'seq_sw',
                type: 'select',
                props: {
                  required: true,
                  options: [
                    { label: 'Sequence number', value: 'S' },
                    { label: 'Owner name', value: 'O' }
                  ],
                  attributes: {
                    posX: 20,
                    posY: 5,
                    gridWidth: 17,
                    width: 15
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

export const formlyDemoConstants = {
  formDefinitionBasic,
  formDefinitionAll,
  formDefinitionLayout
};

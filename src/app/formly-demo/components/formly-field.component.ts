import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormlyField, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field',
  template: `
    <formly-field #formlyField [field]="field"></formly-field>
  `,
  imports: [
    CommonModule,
    FormlyModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormlyFieldComponent implements OnInit {
  @ViewChild('formlyField', { static: true })
  private formlyField: FormlyField;

  @Input()
  public field: FormlyFieldConfig;

  constructor(
    private elementRef: ElementRef
  ) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit() {
    // console.log(this.field);
    // console.log(this.formlyField);
    // console.log(this.elementRef.nativeElement);
  }
}
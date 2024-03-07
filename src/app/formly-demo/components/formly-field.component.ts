import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { FormlyField, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field',
  template: `
    <formly-field #formlyField [field]="$any(field)"></formly-field>
  `,
  imports: [
    CommonModule,
    FormlyModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormlyFieldComponent implements OnInit {
  private elementRef = inject(ElementRef);

  @ViewChild('formlyField', { static: true })
  private formlyField?: FormlyField;

  @Input()
  public field?: FormlyFieldConfig;

  public ngOnInit() {
    // console.log(this.field);
    // console.log(this.formlyField);
    // console.log(this.elementRef.nativeElement);
  }
}

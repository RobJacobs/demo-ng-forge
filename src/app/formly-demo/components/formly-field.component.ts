import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, inject, viewChild, input } from '@angular/core';
import { FormlyField, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field',
  template: ` <formly-field #formlyField [field]="$any(field())"></formly-field> `,
  imports: [FormlyModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormlyFieldComponent implements OnInit {
  private elementRef = inject(ElementRef);

  private readonly formlyField = viewChild<FormlyField>('formlyField');

  public readonly field = input<FormlyFieldConfig>();

  public ngOnInit() {
    // console.log(this.field);
    // console.log(this.formlyField);
    // console.log(this.elementRef.nativeElement);
  }
}

import { Input } from '@angular/core';
import { Directive, ElementRef, OnInit } from '@angular/core';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyDemoService } from '../formly-demo.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formlyFieldDirective]',
  standalone: true
})
export class FormlyFieldDirective implements OnInit {
  @Input()
  field: FormlyFieldConfig
  @Input()
  formlyFieldDirective: FormlyField;

  constructor(
    private elementRef: ElementRef,
    private moduleService: FormlyDemoService
  ) {

  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit() {
    // console.log(this.field);
    // console.log(this.formlyFieldDirective);
    // console.log(this.elementRef.nativeElement);
    const element = this.elementRef.nativeElement as HTMLElement;

    if (this.field.props?.attributes) {
      if (this.field.props.attributes && this.field.props.attributes['width']) {
        element.style.width = `${this.field.props.attributes['width']}px`;
      }

      if (this.field.props.attributes['column']) {
        element.style.gridColumn = `${this.field.props.attributes['column']}`;
      }

      if (this.field.props.attributes['row']) {
        element.style.gridRow = `${this.field.props.attributes['row']}`;
      }
    }

    if (this.field.props.description?.length) {
      element.addEventListener('focusin', () => {
        this.moduleService.formMessage.next({ id: this.field.id, message: this.field.props.description });
      });
      element.addEventListener('focusout', () => {
        this.moduleService.formMessage.next({ id: this.field.id, message: '' });
      });
    }

    if (this.field.props.required) {
      this.field.validation.messages = {
        required: `A ${this.field.props.label || 'value'} is required`
      };
    }

  }
}
import { Component, ChangeDetectionStrategy, inject, DestroyRef, viewChild, ElementRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FieldHelpButtonComponent, IFieldHelpConfig } from '@app/shared/components/field-help';
import { FormControlInvalidDirective } from '@app/shared/directives';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsTextFieldInputHelp extends FormlyFieldPropsBase {
  fieldHelpConfig?: IFieldHelpConfig;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-text-field-input',
  template: `
    <forge-text-field [formlyAttributes]="field" [required]="props.required" [appFormControlInvalid]="formControl">
      @if (props.label) {
        <label slot="label" [attr.for]="'--' + id">{{ props.label }}</label>
      }
      <input #inputElement [id]="'--' + id" type="text" [formControl]="formControl" />
      @if (props.description) {
        <span slot="support-text">{{ props.description }}</span>
      }
      <app-field-help-button
        slot="accessory"
        [control]="formControl"
        [config]="props.fieldHelpConfig"
        (optionSelected)="onChange($event)"
      ></app-field-help-button>
    </forge-text-field>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, FormlyModule, ForgeTextFieldModule, FormControlInvalidDirective, FieldHelpButtonComponent]
})
export class FormlyTextFieldInputHelpTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsTextFieldInputHelp>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef);
  private fieldHelpButton = viewChild(FieldHelpButtonComponent);

  public ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'blur', { capture: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => isDefined(this.props?.blur) && !this.elementRef.nativeElement.contains((event as any).relatedTarget))
      )
      .subscribe((event) => {
        this.props.blur(this.field, event);
      });
    fromEvent(this.elementRef.nativeElement, 'focus', { capture: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => isDefined(this.props?.focus) && !this.elementRef.nativeElement.contains((event as any).relatedTarget))
      )
      .subscribe((event) => {
        this.props.focus(this.field, event);
      });
  }

  public onChange(value: any) {
    if (this.props?.change) {
      this.props.change(this.field);
    }
  }
}

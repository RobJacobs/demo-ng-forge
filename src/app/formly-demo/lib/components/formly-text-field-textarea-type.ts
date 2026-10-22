import { Component, ChangeDetectionStrategy, inject, viewChild, DestroyRef, ElementRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FormControlInvalidDirective } from '@app/shared/directives';
import { FormlyFieldPropsBase } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-text-field-textarea',
  template: `
    <forge-text-field [formlyAttributes]="field" [required]="props.required" [appFormControlInvalid]="formControl">
      @if (props.label) {
        <label slot="label" [attr.for]="'--' + id">{{ props.label }}</label>
      }
      <textarea #inputElement [id]="'--' + id" [cols]="props.cols" [rows]="props.rows" [formControl]="formControl"></textarea>
      @if (props.description) {
        <span slot="support-text">{{ props.description }}</span>
      }
    </forge-text-field>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, FormlyModule, ForgeTextFieldModule, FormControlInvalidDirective]
})
export class FOrmlyTextFieldTextareaTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsBase>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef);

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
}

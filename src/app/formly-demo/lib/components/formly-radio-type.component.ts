import { Component, ChangeDetectionStrategy, inject, DestroyRef, ElementRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ForgeLabelModule, ForgeRadioGroupModule, ForgeRadioModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsRadio extends FormlyFieldPropsBase {
  orientation?: 'horizontal' | 'vertical';
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-radio',
  template: `
    <forge-radio-group
      [formlyAttributes]="field"
      [attr.name]="'radio-group--' + id"
      [style.--formly--radio--orientation]="props.orientation === 'vertical' ? 'column' : 'row'"
      [style.--formly--radio--alignment]="props.orientation === 'vertical' ? 'flex-start' : 'center'"
    >
      @if (props.label) {
        <forge-label legend>{{ props.label }}</forge-label>
      }
      @for (option of $any(props).options; track i; let i = $index) {
        <forge-radio [id]="'--radio--' + i + '-' + id" [attr.name]="'radio-group--' + id" [value]="option.value" [formControl]="formControl">
          {{ option.label }}
        </forge-radio>
      }
    </forge-radio-group>
  `,
  styles: `
    :host {
      display: contents;
    }

    forge-radio-group {
      display: flex;
      flex-direction: var(--formly--radio--orientation, row);
      align-items: var(--formly--radio--alignment, flext-start);
      gap: 8px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, FormlyModule, ForgeLabelModule, ForgeRadioGroupModule, ForgeRadioModule]
})
export class FormlyRadioTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsRadio>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

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

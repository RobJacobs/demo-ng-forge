import { Component, ChangeDetectionStrategy, OnInit, inject, DestroyRef, ElementRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent } from 'rxjs';
import { FieldArrayType, FieldGroupTypeConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { FormlyFieldPropsBase } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-list',
  template: `
    @for (field of field.fieldGroup; track i; let i = $index) {
      @if (field.fieldGroup?.length) {
        <formly-field [field]="field" [formlyAttributes]="field"></formly-field>
      } @else {
        <formly-field [field]="field"></formly-field>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule]
})
export class FormlyListTypeComponent extends FieldArrayType<FieldGroupTypeConfig<FormlyFieldPropsBase>> implements OnInit {
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

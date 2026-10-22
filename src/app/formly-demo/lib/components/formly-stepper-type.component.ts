import { Component, ChangeDetectionStrategy, signal, OnInit, inject, DestroyRef, ElementRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent } from 'rxjs';
import { FieldGroupTypeConfig, FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ForgeStepModule, ForgeStepperModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-stepper',
  template: `
    <forge-stepper [id]="'--' + id" [selectedIndex]="selectedIndex()" (forge-step-select)="onStepSelect($event)" layout-align="left" layout-mode="clustered">
      @for (field of field.fieldGroup; track i; let i = $index) {
        <forge-step [disabled]="field.props.disabled">
          {{ field.props?.label }}
        </forge-step>
      }
    </forge-stepper>
    <formly-field [field]="activeField()"></formly-field>
  `,
  imports: [FormlyModule, ForgeStepModule, ForgeStepperModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    :host {
      display: contents;
    }
    forge-stepper {
      padding-bottom: 16px;
    }
  `
})
export class FormlyStepperTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsBase>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef);
  public selectedIndex = signal(0);
  public activeField = signal<FormlyFieldConfig<FormlyFieldPropsBase> | undefined>(undefined);

  public ngOnInit() {
    this.activeField.set(this.field.fieldGroup[0]);
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

  public onStepSelect(event: CustomEvent<number>) {
    this.selectedIndex.set(event.detail);
    this.activeField.set(this.field.fieldGroup[event.detail]);
    if (this.props?.change) {
      this.props.change(this.field);
    }
  }
}

import { Component, OnInit, signal, ChangeDetectionStrategy, inject, DestroyRef, ElementRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ITabBarChangeEventData } from '@tylertech/forge';
import { ForgeTabBarModule, ForgeTabModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-tab-bar',
  template: `
    <forge-tab-bar [id]="'--' + id" [activeTab]="activeTab()" (forge-tab-bar-change)="onTabBarChange($event)" clustered>
      @for (field of field.fieldGroup; track i; let i = $index) {
        <forge-tab [disabled]="field.props.disabled">
          {{ field.props?.label }}
        </forge-tab>
      }
    </forge-tab-bar>
    <formly-field [field]="activeField()"></formly-field>
  `,
  styles: `
    :host {
      display: block;
    }
    forge-tab-bar {
      padding-bottom: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule, ForgeTabBarModule, ForgeTabModule]
})
export class FormlyTabBarTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsBase>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef);
  public activeTab = signal(0);
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

  public onTabBarChange(event: CustomEvent<ITabBarChangeEventData>) {
    this.activeTab.set(event.detail.index);
    this.activeField.set(this.field.fieldGroup[event.detail.index]);
    if (this.props?.change) {
      this.props.change(this.field);
    }
  }
}

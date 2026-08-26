import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeStepModule, ForgeStepperModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';
import { FormlyFieldDirective } from '../formly-field.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-stepper-type',
  template: `
    <forge-stepper [id]="id" [selectedIndex]="selectedIndex()" (forge-step-select)="onStepSelect($event)" layout-align="left" layout-mode="clustered">
      @for (f of field.fieldGroup; track i; let i = $index) {
        <forge-step [disabled]="f.props.disabled">
          {{ f.props?.label }}
        </forge-step>
      }
    </forge-stepper>
    <formly-field #formlyField [formlyField]="formlyField" [field]="activeField()" [formlyAttributes]="activeField()"></formly-field>
  `,
  imports: [FormlyModule, FormlyFieldDirective, ForgeStepModule, ForgeStepperModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    :host {
      display: contents;
    }
  `
})
export class FormlyStepperTypeComponent extends FieldType<FieldGroupTypeConfig<FormlyFieldPropsExtended>> implements OnInit {
  public selectedIndex = signal(0);
  public activeField = signal<FormlyFieldConfig<FormlyFieldPropsExtended> | undefined>(undefined);

  public ngOnInit() {
    this.activeField.set(this.field.fieldGroup[0]);
  }

  public onStepSelect(event: CustomEvent<number>) {
    this.selectedIndex.set(event.detail);
    this.activeField.set(this.field.fieldGroup[event.detail]);
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ITabBarChangeEventData } from '@tylertech/forge';
import { ForgeTabBarModule, ForgeTabModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';
import { FormlyFieldDirective } from '../formly-field.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-tab-bar-type',
  template: `
    <forge-tab-bar [id]="id" [activeTab]="activeTab()" (forge-tab-bar-change)="onTabBarChange($event)" clustered>
      @for (f of field.fieldGroup; track i; let i = $index) {
        <forge-tab [disabled]="f.props.disabled">
          {{ f.props?.label }}
        </forge-tab>
      }
    </forge-tab-bar>
    <formly-field #formlyField [field]="activeField()" [formlyField]="formlyField" [formlyAttributes]="activeField()"></formly-field>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [FormlyModule, ForgeTabBarModule, ForgeTabModule, FormlyFieldDirective]
})
export class FormlyTabBarTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> implements OnInit {
  public activeTab = signal(0);
  public activeField = signal<FormlyFieldConfig<FormlyFieldPropsExtended> | undefined>(undefined);

  public ngOnInit() {
    this.activeField.set(this.field.fieldGroup[0]);
  }

  public onTabBarChange(event: CustomEvent<ITabBarChangeEventData>) {
    this.activeTab.set(event.detail.index);
    this.activeField.set(this.field.fieldGroup[event.detail.index]);
  }
}

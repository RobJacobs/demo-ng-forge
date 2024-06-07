import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeTabBarModule, ForgeTabModule } from '@tylertech/forge-angular';
import { FormlyDemoService } from '../formly-demo.service';

@Component({
  selector: 'app-formly-tab',
  template: `
    <forge-tab-bar secondary [activeTab]="activeTab">
      @for (field of $any(field.fieldGroup); track i; let i = $index) {
        <forge-tab (forge-tab-select)="onTabSelected(field)">
          {{field.props?.label}}
        </forge-tab>
      }
    </forge-tab-bar>
    <formly-field [field]="$any(activeField)" #formlyField [formlyFieldDirective]="formlyField"></formly-field>
  `,
  styles: [`
    :host {
      display: block;
    }

    forge-tab-bar {
      &::part(container) {
        justify-items: flex-start;
      }

      margin: 16px 0;
    }

    forge-tab {
      min-width: 240px;
    }
  `],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ForgeTabBarModule,
    ForgeTabModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  private moduleService = inject(FormlyDemoService);

  public activeTab = 0;
  public activeField?: FieldTypeConfig;

  public ngOnInit() {
    this.activeField = this.field.fieldGroup![0] as FieldTypeConfig;
  }

  public onTabSelected(field: FieldTypeConfig) {
    this.activeField = field;
  }
}

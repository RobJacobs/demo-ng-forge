import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeModule } from '@tylertech/forge-angular';
import { FormlyDemoService } from '../formly-demo.service';

@Component({
  selector: 'app-formly-tab',
  template: `
  <forge-tab-bar [activeTab]="activeTab">
    <forge-tab *ngFor="let field of field.fieldGroup" (forge-tab-interacted)="onTabSelected(field)">
      {{field.props.label}}
    </forge-tab>
  </forge-tab-bar>
  <formly-field [field]="activeField" #formlyField [formlyFieldDirective]="formlyField"></formly-field>
  `,
  styles: [`
    :host {
      display: block;
    }

    forge-tab-bar {
      display: inline-flex;
      width: 100%;
      border-bottom: var(--forge-theme-border);
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
    ForgeModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  public activeTab = 0;
  public activeField: FieldTypeConfig;

  constructor(
    private moduleService: FormlyDemoService
  ) {
    super();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit() {
    this.activeField = this.field.fieldGroup[0] as FieldTypeConfig;
  }

  public onTabSelected(field: FieldTypeConfig) {
    this.activeField = field;
  }
}
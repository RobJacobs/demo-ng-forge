import { OnInit, viewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';

import { FormlyFieldDirective } from './formly-field.directive';

@Component({
  selector: 'app-formly-container',
  template: `
    @if (props.label) {
      <div class="label">{{ props.label }}</div>
    }

    <div #fieldContainer>
      @for (f of field.fieldGroup; track i; let i = $index) {
        <formly-field #formlyField [field]="f" [formlyFieldDirective]="formlyField"></formly-field>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      ::ng-deep {
        .form-grid {
          display: grid;
          gap: 16px;
        }

        .form-vbox {
          display: flex;
          flex-direction: column;
          row-gap: 16px;
        }

        .form-hbox {
          display: flex;
          flex-direction: row;
          column-gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          row-gap: 16px;
          border: 1px solid #e6e6e6;
          border-radius: 4px;
          padding: 16px;
        }
      }

      .label {
        padding: 8px;
      }
    `
  ],
  imports: [FormlyModule, FormlyFieldDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerTypeComponent extends FieldType implements OnInit {
  private readonly fieldContainer = viewChild<ElementRef>('fieldContainer');

  public ngOnInit() {
    const fieldContainerElement = this.fieldContainer()?.nativeElement as HTMLElement;
    switch (this.field.props?.type) {
      case 'grid':
        fieldContainerElement.classList.add('form-grid');
        if (this.props.attributes!['columns']) {
          fieldContainerElement.style.gridTemplateColumns = `repeat(${this.props.attributes!['columns']}, auto)`;
        }
        break;
      case 'vbox':
        fieldContainerElement.classList.add('form-vbox');
        break;
      case 'hbox':
        fieldContainerElement.classList.add('form-hbox');
        break;
      case 'group':
        fieldContainerElement.classList.add('form-group');
        break;
    }
  }
}

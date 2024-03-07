import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostBinding, inject, OnInit, ViewChild } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldDirective } from './formly-field.directive';

@Component({
  selector: 'app-formly-group',
  template: `
    @if (props.label?.length && field.parent?.type !== 'tab') {
      <div class="label">{{props.label}}</div>
    }
    <div #fieldContainer>
      @for (f of field.fieldGroup; track i; let i = $index) {
        <formly-field [field]="f" #formlyField [formlyFieldDirective]="formlyField"></formly-field>
      }
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: fit-content;

      ::ng-deep {
        .form-grid {
          display: grid !important;
          row-gap: 8px !important;
          // row-gap: 0 !important;
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
          border: var(--forge-theme-border);
          border-radius: 4px;
          padding: 16px;
        }
      }
    }

    .label {
      padding-bottom: 8px;
    }
  `],
  imports: [
    CommonModule,
    FormlyModule,
    FormlyFieldDirective
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupTypeComponent extends FieldType<FieldGroupTypeConfig> implements OnInit {
  private elementRef = inject(ElementRef);

  @ViewChild('fieldContainer', { static: true })
  private fieldContainer?: ElementRef;
  // @HostBinding('style.display')
  // private displayStyle = 'block';

  public ngOnInit() {
    const fieldContainerElement = this.fieldContainer?.nativeElement as HTMLElement;
    switch (this.field.props?.type) {
      case 'grid':
        fieldContainerElement.classList.add('form-grid');

        if (this.props.attributes) {
          if (this.props.attributes['width']) {
            fieldContainerElement.style.gridTemplateColumns = `repeat(${this.props.attributes['width']}, 8px)`;
          }
          // if (this.props.attributes['height']) {
          //   fieldContainerElement.style.gridTemplateRows = `repeat(${this.props.attributes['height']}, 8px)`;
          // }
        }
        break;
      case 'vbox':
        fieldContainerElement.classList.add('form-vbox');
        break;
      case 'hbox':
        fieldContainerElement.classList.add('form-hbox');
        // this.displayStyle = 'inline-block';
        break;
      case 'group':
        fieldContainerElement.classList.add('form-group');

        if (this.props.attributes && (this.props.attributes['gridWidth'] || this.props.attributes['gridHeight'])) {
          fieldContainerElement.classList.add('form-grid');
          if (this.props.attributes['gridWidth']) {
            fieldContainerElement.style.gridTemplateColumns = `repeat(${this.props.attributes['gridWidth']}, 8px)`;
          }
          // if (this.props.attributes['gridHeight']) {
          //   fieldContainerElement.style.gridTemplateRows = `repeat(${this.props.attributes['gridHeight']}, 8px)`;
          // }
        }
        break;
    }

  }

}

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FieldGroupTypeConfig, FieldType, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldDirective } from './formly-field.directive';

@Component({
  selector: 'app-formly-group',
  template: `
    <div class="label" *ngIf="props.label?.length && field.parent?.type !== 'tab'">{{props.label}}</div>
    <div #fieldContainer>
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f" #formlyField [formlyFieldDirective]="formlyField"></formly-field>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
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
        border: var(--forge-theme-border);
        border-radius: 4px;
        padding: 16px;
      }
    }

    .label {
      padding: 8px;
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
  @ViewChild('fieldContainer', { static: true })
  private fieldContainer: ElementRef;

  constructor(
    private elementRef: ElementRef
  ) {
    super();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit() {
    // console.log(this.field.type);
    // console.log(this.field.props.label);

    const fieldContainerElement = this.fieldContainer.nativeElement as HTMLElement;
    switch (this.field.props?.type) {
      case 'grid':
        fieldContainerElement.classList.add('form-grid');
        if (this.props.attributes['columns']) {
          fieldContainerElement.style.gridTemplateColumns = `repeat(${this.props.attributes['columns']}, auto)`
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
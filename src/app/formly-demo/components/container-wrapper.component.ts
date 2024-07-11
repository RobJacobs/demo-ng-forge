import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper-container',
  template: `
    @if (props.label) {
      <div class="label">{{ props.label }}</div>
    }
    <ng-container #fieldComponent></ng-container>
  `,
  styles: [
    `
      :host {
        display: inline-block;

        ::ng-deep {
          formly-field {
            display: block;
          }

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
      }

      .label {
        padding: 8px;
      }
    `
  ],
  imports: [CommonModule],
  standalone: true
})
export class ContainerWrapperComponent extends FieldWrapper implements OnInit {
  private elementRef = inject(ElementRef);

  public ngOnInit() {
    const formlyGroup = this.elementRef.nativeElement.querySelector('formly-group') as HTMLElement;
    if (formlyGroup) {
      switch (this.field.props?.type) {
        case 'grid':
          formlyGroup.classList.add('form-grid');
          break;
        case 'vbox':
          formlyGroup.classList.add('form-vbox');
          break;
        case 'hbox':
          formlyGroup.classList.add('form-hbox');
          break;
        case 'group':
          formlyGroup.classList.add('form-group');
          break;
      }
    }
  }
}

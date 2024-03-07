import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldDirective } from './formly-field.directive';

@Component({
  selector: 'app-formly-table',
  template: `
    <table class="forge-table" #table>
      <thead>
        <tr class="forge-table-row forge-table-head__row">
          @for (th of $any(props).columns; track i; let i = $index) {
            <th scope="col" class="forge-table-cell forge-table-head__cell">
              <div class="forge-table-head__cell-container">
                <span class="forge-table-head__cell-text">{{th.label}}</span>
              </div>
            </th>
          }
          <th class="forge-table-cell forge-table-head__cell forge-table-cell__button"></th>
        </tr>
      </thead>
      <tbody>
        @for (fg of field.fieldGroup; track i; let i = $index) {
          <tr class="forge-table-row forge-table-body__row">
            @for (f of fg.fieldGroup; track ii; let ii = $index) {
              <td class="forge-table-cell forge-table-body__cell">
                <formly-field [field]="f" #formlyField [formlyFieldDirective]="formlyField"></formly-field>
              </td>
            }
            <td class="forge-table-cell forge-table-body__cell forge-table-cell__button">
              <forge-icon-button>
                <button type="button" (click)="onRemove(i)">
                  <forge-icon name="delete"></forge-icon>
                </button>
              </forge-icon-button>
            </td>
          </tr>
        }
      </tbody>
      <tfoot>
        <tr>
          <td>
            <forge-button>
              <button type="button" (click)="onAdd()">Add</button>
            </forge-button>
          </td>
        </tr>
      </tfoot>
    </table>
  `,
  styles: [`
    :host {
      display: block;
    }

    .forge-table {
      // --forge-table-theme-row-hover-background: transparent;

      &-cell {
        padding-right: 24px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &__button {
          width: 48px;
        }
      }

      &-body {

        &__cell {
          padding-top: 8px;
          padding-bottom: 8px;
          vertical-align: top;

          formly-field {
            background-color: var(--mdc-theme-surface);
          }
        }
      }
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
export class TableTypeComponent extends FieldArrayType {
  @ViewChild('table')
  private tableElement?: ElementRef;

  public onAdd() {
    const model = this.props['columns'].filter((c: any) => c.key?.length).map((c: any) => [c.key, c.defaultValue]);

    this.add(this.formControl.length, Object.fromEntries(model));

    requestAnimationFrame(() => {
      const tr = Array.from(this.tableElement?.nativeElement.querySelectorAll('tbody > tr')).reverse()[0] as HTMLTableRowElement;
      if (tr) {
        const focusElement = tr.querySelector(`[id*="${model[0][0]}"]`) as HTMLElement;
        if (focusElement) {
          focusElement.focus();
        }
      }
    });
  }

  public onRemove(index: number) {
    this.remove(index);
  }
}

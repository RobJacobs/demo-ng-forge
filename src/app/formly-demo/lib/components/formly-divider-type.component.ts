import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ForgeDividerModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsExtended } from '../formly.constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-divider-type',
  template: ` <forge-divider [vertical]="props.orientation === 'vertical'"></forge-divider> `,
  styles: `
    :hhost {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule, ForgeDividerModule]
})
export class FormlyDividerTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> {}

import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { TextFieldComponentDelegate } from '@tylertech/forge';
import { DialogService, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { finalize, map, of, Subject, takeUntil } from 'rxjs';
import { IFilterParameter } from 'src/app/shared/interfaces';
import { FormlyDemoService } from '../formly-demo.service';
import { FieldHelpDialogComponent } from './field-help-dialog/field-help-dialog.component';
@Component({
  selector: 'app-formly-input-help',
  template: `
    <forge-text-field [required]="props.required" [invalid]="showError">
      @if (props.label) {
        <label slot="label" [attr.for]="id">{{ props.label }}</label>
      }
      <input
        #input
        [id]="id"
        type="text"
        [placeholder]="props.placeholder"
        [readonly]="props.readonly"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
      <forge-icon-button slot="addon-end" dense aria-label="Browse options" [disabled]="formControl.disabled" (click)="onShowDialog()">
        <forge-icon name="more_horiz"></forge-icon>
      </forge-icon-button>
      @if (showError) {
        <span slot="helper-text">
          <formly-validation-message [field]="field"></formly-validation-message>
        </span>
      }
    </forge-text-field>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      // forge-text-field {
      //   --forge-text-field-height: 2rem;
      // }
    `
  ],
  imports: [ReactiveFormsModule, FormlyModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputHelpTypeComponent extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {
  private dialogService = inject(DialogService);
  private moduleService = inject(FormlyDemoService);

  private unsubscribe = new Subject<void>();

  public ngOnInit() {
    this.formControl.addAsyncValidators((control: AbstractControl) => {
      this.unsubscribe.next();
      this.unsubscribe.complete();

      if (control.pristine) {
        return of(null);
      }

      return this.moduleService.validateField(this.field.key as string, control.value).pipe(
        takeUntil(this.unsubscribe),
        map((r) => {
          return r.invalid ? { server: { message: r.message } } : null;
        })
      );
    });
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public onShowDialog() {
    this.dialogService
      .open(FieldHelpDialogComponent, {
        data: {
          columnConfigurations: (this.props.options as { label: string; property: string }[]).map((o) => ({
            header: o.label,
            property: o.property,
            sortable: true,
            filter: true,
            filterDelegate: new TextFieldComponentDelegate()
          })),
          dataObservable: (param: IFilterParameter) => this.moduleService.getFieldHelp(this.key as string, param),
          key: this.props['optionsKey'],
          title: `Select a ${this.props.label}`
        }
      })
      .afterClosed.subscribe({
        next: (result) => {
          if (result) {
            this.formControl.setValue(result);
          }
        }
      });
  }
}

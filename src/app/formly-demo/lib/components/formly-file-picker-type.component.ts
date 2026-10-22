import { Component, ChangeDetectionStrategy, OnInit, inject, viewChild, ElementRef, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ButtonVariant, IFilePickerChangeEventData } from '@tylertech/forge';
import { ForgeButtonModule, ForgeFilePickerModule } from '@tylertech/forge-angular';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsFilePicker extends FormlyFieldPropsBase {
  filePickerChange?: (field: FormlyFieldConfig, event: CustomEvent<IFilePickerChangeEventData>) => void;
  accept?: string;
  buttonVariant?: ButtonVariant;
  multiple?: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-file-picker',
  template: `
    <forge-file-picker
      [formlyAttributes]="field"
      compact
      (forge-file-picker-change)="props.filePickerChange(field, $event)"
      [multiple]="props.multiple"
      [accept]="props.accept"
    >
      <forge-button [variant]="props.buttonVariant || 'outlined'" [disabled]="props.disabled">{{ props.label }}</forge-button>
    </forge-file-picker>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormlyModule, ForgeButtonModule, ForgeFilePickerModule]
})
export class FormlyFilePickerTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsFilePicker>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef);

  public ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'blur', { capture: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => isDefined(this.props?.blur) && !this.elementRef.nativeElement.contains((event as any).relatedTarget))
      )
      .subscribe((event) => {
        this.props?.blur(this.field, event);
      });
    fromEvent(this.elementRef.nativeElement, 'focus', { capture: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => isDefined(this.props?.focus) && !this.elementRef.nativeElement.contains((event as any).relatedTarget))
      )
      .subscribe((event) => {
        this.props.focus(this.field, event);
      });
  }
}

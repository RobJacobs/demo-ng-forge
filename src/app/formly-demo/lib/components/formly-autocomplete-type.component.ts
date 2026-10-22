import { Component, ChangeDetectionStrategy, OnInit, inject, DestroyRef, ElementRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { AutocompleteFilterCallback, IconRegistry } from '@tylertech/forge';
import { tylIconArrowDropDown } from '@tylertech/tyler-icons';
import { ForgeAutocompleteModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FormControlInvalidDirective } from '@app/shared/directives';
import { FormlyFieldPropsBase } from '../formly.constants';

export interface FormlyFieldPropsAutocomplete extends FormlyFieldPropsBase {
  autocompleteFilter?: AutocompleteFilterCallback;
  multiple?: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-autocomplete',
  template: `
    <forge-autocomplete
      [formlyAttributes]="field"
      [filter]="props.autocompleteFilter"
      [multiple]="props.multiple"
      [formControl]="formControl"
      (forge-autocomplete-change)="onChange()"
    >
      <forge-text-field [required]="props.required" [appFormControlInvalid]="formControl">
        @if (props.label) {
          <label slot="label" [attr.for]="'--' + id">{{ props.label }}</label>
        }
        <input [id]="'--' + id" type="text" />
        <forge-icon slot="end" class="forge-dropdown-icon" name="arrow_drop_down"></forge-icon>
        @if (props.description) {
          <span slot="support-text">{{ props.description }}</span>
        }
      </forge-text-field>
    </forge-autocomplete>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, FormlyModule, ForgeAutocompleteModule, ForgeTextFieldModule, ForgeIconModule, FormControlInvalidDirective]
})
export class FormlyAutocompleteTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsAutocomplete>> implements OnInit {
  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    super();
    IconRegistry.define([tylIconArrowDropDown]);
  }

  public ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'blur', { capture: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => isDefined(this.props?.blur) && !this.elementRef.nativeElement.contains((event as any).relatedTarget))
      )
      .subscribe((event) => {
        this.props.blur(this.field, event);
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

  public onChange() {
    if (this.props?.change) {
      this.props.change(this.field);
    }
  }
}

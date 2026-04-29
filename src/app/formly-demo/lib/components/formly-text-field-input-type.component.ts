import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { isDefined } from '@tylertech/forge-core';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';
import { IMaskDirective } from 'angular-imask';
import * as IMask from 'imask';
import { FormControlInvalidDirective } from 'src/app/shared/directives';
import { FormlyFieldPropsExtended } from '../formly.constants';

// string mask: (0) any digit, (a) any letter, (*) any char
// number mask: (#) required digit, (&) optional digit, (-) sign, (.) decimal

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-text-field-input-type',
  template: `
    <forge-text-field [required]="props.required" [appFormControlInvalid]="formControl">
      @if (props.label) {
        <label slot="label" [attr.for]="id">{{ props.label }}</label>
      }
      <input
        [id]="id"
        type="text"
        [imask]="mask()"
        [unmask]="unmask()"
        [formControl]="formControl"
        [style.text-align]="props.type === 'number' ? 'right' : null"
      />
      @if (props.description) {
        <span slot="support-text">{{ props.description }}</span>
      }
    </forge-text-field>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  imports: [ReactiveFormsModule, FormlyModule, ForgeTextFieldModule, IMaskDirective, FormControlInvalidDirective]
})
export class FormlyTextFieldInputTypeComponent extends FieldType<FieldTypeConfig<FormlyFieldPropsExtended>> implements OnInit {
  public mask = signal<IMask.FactoryArg | undefined>(undefined);
  public unmask = signal<'typed' | boolean>(false);
  public ngOnInit() {
    if (this.props.mask) {
      switch (this.props.type) {
        case 'number':
          this.mask.set(this.buildNumberMask(this.props.mask));
          break;
        default:
          this.mask.set(this.buildStringMask(this.props.mask));
          break;
      }
    }
  }

  private buildStringMask(format?: string): IMask.MaskedPattern | IMask.MaskedRegExp {
    if (!format?.length) {
      return {
        mask: /./
      } as IMask.MaskedRegExp;
    }

    const mask = format.replace(/([0a*]*)/g, (value) => {
      // adds ` to prevent symbols shift back
      return value.length ? `\`${value}` : '';
    });

    return new IMask.MaskedPattern({
      mask,
      lazy: false,
      placeholderChar: ' '
    });
  }

  private buildNumberMask(format?: string): IMask.MaskedRegExp {
    if (!format?.length) {
      return { mask: /^-?[\d]*\.*[\d]*\s*$/ } as IMask.MaskedRegExp;
    }

    this.unmask.set('typed');
    const max = parseFloat(format.replace(/[#&-]/g, '9').replace(/,/g, ''));
    const min = format.includes('&') ? (format.includes('-') ? max * -1 : 0) : NaN;
    return new NullableNumberMask({
      mask: Number,
      thousandsSeparator: format!.includes(',') ? ',' : '',
      radix: '.',
      padFractionalZeros: format!.includes('.') ? true : false,
      scale: format!.split('.')[1]?.length || 0,
      signed: format!.includes('-') ? true : false,
      max: isFinite(max) ? max : undefined,
      min: isFinite(min) ? min : undefined
    } as any) as any;
  }
}

export class NullableNumberMask extends IMask.MaskedNumber {
  constructor(options: any) {
    options.format = (value: any) => (isDefined(value) ? value.toString() : '');
    super(options);
  }

  public override append(str: string, flags?: IMask.AppendFlags, tail?: string | string | IMask.TailDetails): IMask.ChangeDetails {
    return super.append(isDefined(str) ? str.toString() : '', flags, tail);
  }

  public override get typedValue(): number | null {
    return this.unmaskedValue !== '' ? super.typedValue : null;
  }

  public override set typedValue(value: number | null) {
    super.typedValue = value ?? ('' as any);
  }
}

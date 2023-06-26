import * as IMask from 'imask';
import { isDefined } from '@tylertech/forge-core';

export class NullableNumberMask extends IMask.MaskedNumber {
  constructor(options: any) {
    options.format = (value: any) => isDefined(value) ? value.toString() : '';
    super(options);
  }

  public override append(str: string, flags?: IMask.AppendFlags, tail?: string | String | IMask.TailDetails): IMask.ChangeDetails {
    return super.append(isDefined(str) ? str.toString() : '', flags, tail);
  }

  // @ts-ignore
  public override get typedValue() {
    return this.unmaskedValue !== '' ? super.typedValue : null;
  }

  // @ts-ignore
  public override set typedValue(value) {
    super.typedValue = value ?? '' as any;
  }
}
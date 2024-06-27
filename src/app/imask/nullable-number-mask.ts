import * as IMask from 'imask';
import { isDefined } from '@tylertech/forge-core';

export class NullableNumberMask extends IMask.MaskedNumber {
  constructor(options: any) {
    options.format = (value: any) => isDefined(value) ? value.toString() : '';
    super(options);
  }

  public override append(str: string, flags?: IMask.AppendFlags, tail?: string | string | IMask.TailDetails): IMask.ChangeDetails {
    return super.append(isDefined(str) ? str.toString() : '', flags, tail);
  }

  public override get typedValue(): number | null {
    return this.unmaskedValue !== '' ? super.typedValue : null;
  }

  public override set typedValue(value: number | null) {
    super.typedValue = value ?? '' as any;
  }
}

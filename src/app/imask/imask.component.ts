// https://github.com/uNmAnNeR/imaskjs/issues/876

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IMaskDirective } from 'angular-imask';
import * as IMask from 'imask';
import { IOption } from '@tylertech/forge';

import { NullableNumberMask } from './nullable-number-mask';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-imask',
  templateUrl: './imask.component.html',
  styleUrls: ['./imask.component.scss']
})
export class ImaskComponent implements AfterViewInit {
  @ViewChild('imaskRef')
  public imaskRef: IMaskDirective<any>;

  public formGroup = new FormGroup({
    format: new FormControl<string | null>('000-aa-****'),
    input: new FormControl<string | null>(null),
    maskType: new FormControl<string>('string')
  });
  public unmask: 'typed' | boolean = true;
  public mask?: IMask.FactoryArg;
  public maskOptions: IOption[] = [
    { value: 'string', label: 'String' },
    { value: 'number', label: 'Number' },
    { value: 'number-search', label: 'Number search' },
    { value: 'date', label: 'Date' },
    { value: 'date-search', label: 'Date search' }
  ];

  constructor() {
    this.unmask = false;
    this.mask = this.buildStringMask(this.formGroup.value.format);
  }

  public ngAfterViewInit() {
    console.log(this.imaskRef);
  }

  public onApply() {
    this.formGroup.get('input').setValue(null);

    requestAnimationFrame(() => {
      switch (this.formGroup.value.maskType) {
        case 'string':
          this.mask = this.buildStringMask(this.formGroup.value.format);
          break;
        case 'number':
          this.mask = this.buildNumberMask(this.formGroup.value.format);
          break;
        case 'number-search':
          this.mask = this.buildNumberSearchMask();
          break;
        case 'date':
          this.mask = this.buildDateMask();
          break;
        case 'date-search':
          this.mask = this.buildDateSearchMask();
          break;
      }
    });
  }

  private buildStringMask(format?: string): IMask.MaskedPattern | IMask.MaskedRegExp {
    if (!format?.length) {
      return {
        mask: /./
      } as IMask.MaskedRegExp
    }

    const mask = format.replace(/([0a*]*)/g, value => {
      // adds ` to prevent symbols shift back
      return value.length ? `\`${value}` : '';
    });

    return new IMask.MaskedPattern({
      mask,
      lazy: false,
      placeholderChar: ' '
    });
  }

  private buildNumberMask(format?: string): IMask.MaskedNumber {
    if (!format?.length) {
      return new NullableNumberMask({
        mask: Number,
        scale: 0,
        signed: true
      })
    }

    const max = parseFloat(format.replace(/[#&-]/g, '9').replace(/,/g, ''));
    const min = format.includes('&') ? format.includes('-') ? max * -1 : 0 : NaN;
    return new NullableNumberMask({
      mask: Number,
      thousandsSeparator: format!.includes(',') ? ',' : '',
      radix: '.',
      padFractionalZeros: format!.includes('.') ? true : false,
      scale: format!.split('.')[1]?.length || 0,
      signed: format!.includes('-') ? true : false,
      max: isFinite(max) ? max : undefined,
      min: isFinite(min) ? min : undefined
    });
  }

  private buildNumberSearchMask(): IMask.MaskedRegExp {
    return {
      mask: /^\s*[!\-.\d:<>=|\s+]*\s*$/
    } as IMask.MaskedRegExp
  }

  private buildDateMask(): IMask.MaskedDate {
    return new IMask.MaskedDate({
      mask: Date,
      pattern: 'm/`d/`Y',
      placeholderChar: ' ',
      blocks: {
        m: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        } as any,
        d: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        } as any,
        Y: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: 9999,
          maxLength: 4
        } as any
      },
      autofix: false,
      lazy: false,
      overwrite: false,
      format: function (date) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const value = [month, day, year].join('/');
        return value;
      },
      parse: function (str) {
        const mdy = str.split('/');
        const date = new Date(parseInt(mdy[2], 10), parseInt(mdy[0], 10) - 1, parseInt(mdy[1]));
        return date;
      },
    });
  }

  private buildDateSearchMask(): IMask.MaskedRegExp {
    return {
      mask: /^\s*[!\-.\d:<>=|\s/]*\s*$/
    } as IMask.MaskedRegExp
  }
}

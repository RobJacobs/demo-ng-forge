// https://github.com/uNmAnNeR/imaskjs/issues/876

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IMaskDirective } from 'angular-imask';
import * as IMask from 'imask';
import { IOption } from '@tylertech/forge';
import { ForgeButtonModule, ForgeOptionModule, ForgeSelectModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { parse as dateParse, format as dateFormat, isValid as dateIsValid } from 'date-fns';

import { NullableNumberMask } from './nullable-number-mask';
@Component({
  selector: 'app-imask',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IMaskDirective, ForgeButtonModule, ForgeOptionModule, ForgeSelectModule, ForgeTextFieldModule, ForgeToolbarModule],
  templateUrl: './imask.component.html',
  styleUrls: ['./imask.component.scss']
})
export class ImaskComponent implements AfterViewInit {
  @ViewChild('imaskRef')
  public imaskRef?: IMaskDirective<any>;

  public formGroup = new FormGroup({
    format: new FormControl<string | null>('000-aa-****'),
    input: new FormControl<string | null>(null),
    maskType: new FormControl<string>('string')
  });
  public unmask: 'typed' | boolean = false;
  public mask?: IMask.FactoryArg;
  public maskOptions: IOption[] = [
    { value: 'string', label: 'String' },
    { value: 'number', label: 'Number' },
    { value: 'number-search', label: 'Number search' },
    { value: 'date', label: 'Date' },
    { value: 'date-search', label: 'Date search' },
    { value: 'datetime', label: 'Date time' }
  ];
  public helpText = '';

  constructor() {
    this.mask = this.buildStringMask(this.formGroup.value.format as string);
  }

  public ngAfterViewInit() {
    console.log(this.imaskRef);
  }

  public onApply() {
    this.imaskRef?.destroyMask();
    this.formGroup.controls.input.setValue(null);

    requestAnimationFrame(() => {
      this.helpText = '';
      this.unmask = false;

      switch (this.formGroup.value.maskType) {
        case 'string':
          this.mask = this.buildStringMask(this.formGroup.value.format as string);
          break;
        case 'number':
          this.mask = this.buildNumberMask(this.formGroup.value.format as string);
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
        case 'datetime':
          this.mask = this.buildDateTimeMask();
          break;
      }
    });
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

  private buildNumberMask(format?: string): IMask.MaskedNumber {
    this.unmask = 'typed';

    if (!format?.length) {
      return new NullableNumberMask({
        mask: Number,
        scale: 0,
        signed: true
      }) as IMask.MaskedNumber;
    }

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
    }) as IMask.MaskedNumber;
  }

  private buildNumberSearchMask(): IMask.MaskedRegExp {
    return {
      mask: /^\s*[!\-.\d:<>=|\s+]*\s*$/
    } as IMask.MaskedRegExp;
  }

  private buildDateMask(): IMask.MaskedDate {
    this.unmask = 'typed';
    this.helpText = 'MM/dd/yyyy';

    return new IMask.MaskedDate({
      mask: Date,
      pattern: 'MM/`dd/`yyyy',
      placeholderChar: ' ',
      blocks: {
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        } as IMask.FactoryArg,
        dd: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        } as IMask.FactoryArg,
        yyyy: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: 9999,
          maxLength: 4
        } as IMask.FactoryArg
      },
      autofix: false,
      lazy: false,
      overwrite: false,
      format: (value: any): string => {
        return dateIsValid(value) ? dateFormat(value, 'MM/dd/yyyy') : '';
      },
      parse: (value: string): Date => {
        return dateParse(value, 'MM/dd/yyyy', new Date());
      }
    });
  }

  private buildDateTimeMask(): IMask.MaskedDate {
    this.unmask = 'typed';
    this.helpText = 'MM/dd/yyyy hh:mm:ss aa';

    return new IMask.MaskedDate({
      mask: Date,
      pattern: 'MM/`dd/`yyyy `hh:`mm:`ss `aa',
      placeholderChar: ' ',
      blocks: {
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        } as IMask.FactoryArg,
        dd: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        } as IMask.FactoryArg,
        yyyy: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: 9999,
          maxLength: 4
        } as IMask.FactoryArg,
        hh: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        } as IMask.FactoryArg,
        mm: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 59,
          maxLength: 2
        } as IMask.FactoryArg,
        ss: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 59,
          maxLength: 2
        } as IMask.FactoryArg,
        aa: {
          mask: IMask.MaskedEnum,
          enum: ['am', 'pm']
        } as IMask.FactoryArg
      },
      autofix: false,
      lazy: false,
      overwrite: false,
      format: (value: any): string => {
        return dateIsValid(value) ? dateFormat(value, 'MM/dd/yyyy hh:mm:ss aaa') : '';
      },
      parse: (value: string): Date => {
        return dateParse(value, 'MM/dd/yyyy hh:mm:ss aaa', new Date());
      }
    });
  }

  private buildDateSearchMask(): IMask.MaskedRegExp {
    return {
      mask: /^\s*[!\-.\d:<>=|\s/]*\s*$/
    } as IMask.MaskedRegExp;
  }
}

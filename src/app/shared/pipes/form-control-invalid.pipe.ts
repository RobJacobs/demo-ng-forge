import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFormControlInvalid',
  standalone: true
})
export class FormControlInvalidPipe implements PipeTransform {
  transform(value: boolean[], ...args: any[]) {
    return value.some(v => v === false) ? false : true;
  }
}
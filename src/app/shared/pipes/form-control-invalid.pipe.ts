import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFormControlInvalid',
  standalone: true
})
export class FormControlInvalidPipe implements PipeTransform {
  transform(value: boolean[], ...args: any[]) {
    console.log(value);
    return value.some(v => v === false) ? false : true;
  }
}
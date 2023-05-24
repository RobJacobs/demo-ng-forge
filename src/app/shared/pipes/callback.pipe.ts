import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCallback',
  standalone: true
})
export class CallbackPipe implements PipeTransform {
  transform(value: any, callback: (value: any, ...args: any[]) => boolean, ...args: any[]): any {
    return callback(value, ...args);
  }
}
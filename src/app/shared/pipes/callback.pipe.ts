import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCallback'
})
export class CallbackPipe implements PipeTransform {
  transform(value: any, callback: (value: any, ...args: any[]) => boolean, ...args: any[]): any {
    return callback(value, ...args);
  }
}

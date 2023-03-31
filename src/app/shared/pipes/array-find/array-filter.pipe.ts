
import { Pipe, PipeTransform } from '@angular/core';
import { isDeepEqual } from '@tylertech/forge-core';

@Pipe({
  name: 'appArrayFilter',
  standalone: true
})
export class ArrayFilterPipe implements PipeTransform {
  transform(items: any[], callback: (item: any) => boolean): any {
    if (!items || !callback) {
      return items;
    }
    return items.filter(item => callback(item));
  }
}

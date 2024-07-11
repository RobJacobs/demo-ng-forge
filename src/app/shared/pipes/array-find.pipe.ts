import { Pipe, PipeTransform } from '@angular/core';
import { isDeepEqual } from '@tylertech/forge-core';

@Pipe({
  name: 'appArrayFind',
  standalone: true
})
export class ArrayFindPipe implements PipeTransform {
  transform(value: string | number, source: any[], filterProperty: string, returnProperty?: string) {
    if (!value?.toString().length || !source.length || !filterProperty.length) {
      return;
    }
    const sourceValue = source.find((o) => isDeepEqual(o[filterProperty], value));
    if (!sourceValue) {
      return;
    }

    return returnProperty ? sourceValue[returnProperty] : sourceValue;
  }
}

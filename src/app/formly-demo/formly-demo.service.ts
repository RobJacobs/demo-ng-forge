/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IFilterParameter, IFilterResponse } from '../shared/interfaces/filter.interface';

@Injectable()
export class FormlyDemoService {
  public formMessage = new Subject<{ id: string; message: string }>();

  public validateField(field: string, value: any): Observable<{ invalid: boolean; message: string }> {
    const validation = {
      invalid: false,
      message: `Error from server: ${field}`
    };

    return of(validation).pipe(delay(1000));
  }

  public getFieldHelp(field: string, param: IFilterParameter): Observable<IFilterResponse<any>> {
    if (param.filters?.length) {
      return of({ count: 0, data: [] }).pipe(delay(1000));
    } else {
      const result = [];
      for (let index = param.skip as number; index < <number>param.skip + <number>param.take; index++) {
        result.push({
          id: index,
          address: `${index} street`,
          city: `${index} city`,
          state: `${index} state`
        });
      }

      return of({ count: 75, data: result }).pipe(delay(1000));
    }
  }
}

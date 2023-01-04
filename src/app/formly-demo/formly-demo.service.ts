import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { isDefined } from '@tylertech/forge-core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IFilterParameter, IFilterResponse } from '../shared/interfaces/filter.interface';

@Injectable()
export class FormlyDemoService {
  public formMessage = new Subject<{ id: string; message: string; }>();

  constructor(private httpClient: HttpClient) { }

  public getFormDefinition(): Observable<FormlyFieldConfig[]> {
    return this.httpClient.get<FormlyFieldConfig[]>('mock-data/form-definition.json').pipe(
      delay(1000)
    );
  }

  public getGeneroFormDefinition(): Observable<string> {
    return this.httpClient.get('mock-data/genero-form-definition.xml', { responseType: 'text' });
  }

  public getData(): Observable<any> {
    return this.httpClient.get('mock-data/form-data.json');
  }

  public validateField(field: string, value: any): Observable<{ invalid: boolean; message: string }> {
    const validation = {
      invalid: true,
      message: `Error from server: ${field}`
    };

    return of(validation).pipe(
      delay(1000)
    );

    // return this.httpClient.get<{ invalid: boolean; message: string }>('http://localhost:5000/validate-get');
    // return this.httpClient.post<{ invalid: boolean; message: string }>('http://localhost:5000/validate-post', { field, value });
  }

  public getFieldHelp(field: string, param: IFilterParameter): Observable<IFilterResponse<any>> {
    if (param.filters?.length) {
      return of({ count: 0, data: [] }).pipe(
        delay(1000)
      )
    } else {
      const result = [];
      for (let index = param.skip; index < param.skip + param.take; index++) {
        result.push(
          {
            id: index,
            address: `${index} street`,
            city: `${index} city`,
            state: `${index} state`
          }
        );
      }

      return of({ count: 75, data: result }).pipe(
        delay(1000)
      )
    }
  }
}
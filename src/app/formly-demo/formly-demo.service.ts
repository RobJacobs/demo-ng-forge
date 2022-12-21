import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { isDefined } from '@tylertech/forge-core';
import { FormlyFieldConfig } from '@ngx-formly/core';

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

    // const validation = {
    //   invalid: false,
    //   message: ''
    // };
    // if (!isDefined(value) || !value.length) {
    //   validation.invalid = true;
    //   validation.message = `Error from server: ${field}`;
    // }

    return of(validation).pipe(
      delay(1000)
    );
  }
}
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

import { IFormlyFieldDefinition, IFormMessage, IPatchOperation } from './lib/formly.constants';

@Injectable()
export class FormlyDemoService {
  private httpClient = inject(HttpClient);
  private delayTime = 1000;

  public options = [
    { label: 'Option 01', value: '01' },
    { label: 'Option 02', value: '02' },
    { label: 'Option 03', value: '03' },
    { label: 'Option 04', value: '04' },
    { label: 'Option 05', value: '05' },
    { label: 'Option 06', value: '06' },
    { label: 'Option 07', value: '07' },
    { label: 'Option 08', value: '08' },
    { label: 'Option 09', value: '09' },
    { label: 'Option 10', value: '10' }
  ];

  public isBusy = signal(false);

  public getFormDefinition(): Observable<IFormlyFieldDefinition[]> {
    return this.httpClient.get<IFormlyFieldDefinition[]>('mock-data/formly-definition.json').pipe(delay(this.delayTime));
  }

  public getFormUpdate(): Observable<{ data?: IPatchOperation[]; form?: IPatchOperation[]; validation?: IPatchOperation[] }> {
    return this.httpClient.get('mock-data/formly-update.json').pipe(delay(this.delayTime));
  }

  public getFormData(): Observable<any> {
    return this.httpClient.get('mock-data/formly-data.json').pipe(delay(this.delayTime));
  }

  public postFormMessages(messages: IFormMessage[]): Observable<{ data?: IPatchOperation[]; form?: IPatchOperation[]; validation?: IPatchOperation[] }> {
    const response = { data: [] as IPatchOperation[], form: [] as IPatchOperation[], validation: [] as IPatchOperation[] };

    messages.forEach((m) => {
      switch (m.event) {
        case 'blur':
          break;
        case 'change':
          if (m.path === 'lastName') {
            response.form.push({ op: 'update', path: 'lastName.props.label', value: 'lastName label updated' });
            response.data.push({ op: 'update', path: 'lastName', value: 'lastName value updated' });
            response.validation.push({ op: 'add', path: 'lastName', value: { duplicate: 'Duplicate last name' } });
          }
          break;
        case 'click':
          break;
        case 'focus':
          break;
      }
    });

    return of(response).pipe(delay(this.delayTime));
  }
}

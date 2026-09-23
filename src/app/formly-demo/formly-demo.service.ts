import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of } from 'rxjs';

import { IFormlyFieldDefinition, IFormMessage } from './lib/formly.constants';

@Injectable()
export class FormlyDemoService {
  private httpClient = inject(HttpClient);

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
    return this.httpClient.get<IFormlyFieldDefinition[]>('mock-data/formly-definition.json');
  }

  public getFormDefinitionUpdate(): Observable<IFormlyFieldDefinition[]> {
    return this.httpClient.get<IFormlyFieldDefinition[]>('mock-data/formly-definition-update.json');
  }

  public getFormData(): Observable<any> {
    return this.httpClient.get<any[]>('mock-data/formly-data.json');
  }

  public postFormMessages(messages: IFormMessage[]): Observable<{ data?: any; fieldDefinitions?: IFormlyFieldDefinition[] }> {
    if (messages.at(0).event === 'click') {
      switch (messages.at(0).key) {
        case 'form.refresh': {
          return forkJoin([
            this.httpClient.get<IFormlyFieldDefinition[]>('mock-data/formly-data.json', { headers: { authorization: '' } }),
            this.httpClient.get<IFormlyFieldDefinition[]>('mock-data/formly-definition-update.json', { headers: { authorization: '' } })
          ]).pipe(
            map((response) => {
              return {
                data: response[0],
                fieldDefinitions: response[1]
              };
            })
          );
        }
        default: {
          return of(null);
        }
      }
    } else if (messages.at(0).event === 'change') {
      switch (messages.at(0).key) {
        case 'firstName': {
          if (messages.at(0).value.length === 1) {
            return of({ data: { validation: { length: 'First name must be longer than 1 character.' } } });
          }
        }
      }
      return of(null);
    } else {
      return of(null);
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/utils';

export interface IRecord {
  id: number;
  code: string;
  description: string;
}

@Injectable()
export class ExamplesService {
  public mockData: IRecord[] = [];

  constructor() {
    for (let index = 0; index < 300; index++) {
      this.mockData.push({
        id: index,
        code: Utils.formatNumber(index, '3.0'),
        description: `Item ${Utils.formatNumber(index, '3.0')}`
      });
    }
  }

  public getSingleSelectOptions(filterText?: string, value?: string | number | null, take = 100): Observable<IRecord[]> {
    // NOTES
    // if there is filter text, query records with case insensitive include - sort, take
    // if there is a value, query records for value match, return single result as []
    // if there is no value or filter text query top - sort, take
    return new Observable((o) => {
      setTimeout(() => {
        let records = [];
        if (filterText?.length) {
          records = this.mockData.filter((d) => d.description.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())).slice(0, take);
        } else if (value) {
          records = this.mockData.filter((d) => d.id.toString() === value.toString());
        } else {
          records = this.mockData.slice(0, take);
        }
        o.next(records);
        o.complete();
      }, 1000);
    });
  }

  public getMutlipleSelectOptions(filterText?: string, values?: string[] | number[] | null, take = 100): Observable<IRecord[]> {
    // NOTES
    // if there is filter text, query records with case insensitive include - sort, take
    // if there are values and no filter text, query records for values and top - sort by selected, take
    // if there are no values or filter text query top - sort, take
    return new Observable((o) => {
      setTimeout(() => {
        let records = [];
        if (filterText?.length) {
          records = this.mockData.filter((d) => d.description.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())).slice(0, take);
        } else {
          if (values?.length) {
            records = [
              ...new Set([...this.mockData.filter((d) => values.map((v) => v.toString()).includes(d.id.toString())), ...this.mockData.slice(0, take)])
            ];
          } else {
            records = this.mockData.slice(0, take);
          }
        }

        o.next(records);
        o.complete();
      }, 1000);
    });
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { isDefined, isNumber } from '@tylertech/forge-core';
import { IPerson, IProfile } from 'src/app/shared/interfaces/person.interface';
import { ISearch } from 'src/app/shared/interfaces/search.interface';
import { IFilterParameter } from 'src/app/shared/interfaces/filter.interface';
import { Utils } from 'src/utils';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private httpClient = inject(HttpClient);

  public getProfile(): Observable<IProfile> {
    return this.httpClient.get<IProfile>('mock-data/profile.json');
  }

  public getPeople(filter?: IFilterParameter): Observable<{ count: number; data: Array<IPerson> }> {
    return this.httpClient.get<Array<IPerson>>('mock-data/people.json').pipe(
      // delay(2000),
      map((r) => {
        let count = r.length;
        if (filter) {
          if (filter.filters?.length) {
            r = Utils.filterData(
              r,
              filter.filters.map((f) => ({ key: f.property, value: f.value, strict: f.property === 'gender' || f.property === 'id' }))
            );
            count = r.length;
          }

          if (filter.sort) {
            r = Utils.sortData(r, filter.sort.property, 'string', filter.sort.direction);
          }

          if (isNumber(filter.skip) && isNumber(filter.take)) {
            r = r.slice(filter.skip, filter.skip + filter.take);
          }
        }
        return { count, data: r };
      })
    );
  }

  public getPerson(id: number): Observable<IPerson | undefined> {
    return this.httpClient.get('mock-data/people.json').pipe(map((r) => (r as IPerson[]).find((p) => p.id.toString() === id.toString())));
  }

  public getSearches(key: string): Observable<ISearch[]> {
    return new Observable<ISearch[]>((o) => {
      let searches = localStorage.getItem(key);
      if (isDefined(searches)) {
        searches = JSON.parse(searches as string);
      }
      o.next(searches as any);
      o.complete();
    });
  }

  public saveSearches(key: string, searches: ISearch[]): Observable<boolean> {
    return new Observable<boolean>((o) => {
      localStorage.setItem(key, JSON.stringify(searches));
      o.next(true);
      o.complete();
    });
  }

  public getLongRequest(): Observable<string> {
    return this.httpClient.get<string>('http://localhost:5000/long-request');
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { isDefined, isNumber } from '@tylertech/forge-core';
import { Observable, Subject, timer } from 'rxjs';
import { map, delay, concatMap, take, timeout, filter } from 'rxjs/operators';

import { SHOW_BUSY_INDICATOR } from 'src/app/shared/interceptors/busy.interceptor';
import { IFilterParameter, IPerson, IProfile, ISearch } from 'src/app/shared/interfaces';
import { Utils } from 'src/utils';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private httpClient = inject(HttpClient);

  public getProfile(): Observable<IProfile> {
    return this.httpClient.get<IProfile>('mock-data/profile.json');
  }

  public getPeople(filter?: IFilterParameter): Observable<{ count: number; data: IPerson[] }> {
    return this.httpClient.get<IPerson[]>('mock-data/people.json').pipe(
      delay(1000),
      map((r) => {
        let count = r.length;
        if (filter) {
          if (filter.filters?.length) {
            r = Utils.filterData(
              r,
              filter.filters.map((f) => ({
                key: f.property,
                value: f.value,
                strict: f.property === 'gender' || f.property === 'id'
              }))
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

  public getLongRequest(): Observable<unknown> {
    return this.httpClient.get<string>('http://localhost:5000/long-request', {
      context: new HttpContext().set(SHOW_BUSY_INDICATOR, true)
    });
  }

  public getFile(fileName: string): Observable<Blob> {
    return this.httpClient.get(`mock-data/${fileName}`, {
      responseType: 'blob'
    });
  }

  public pollingRequest(name: string): Observable<IPerson> {
    let id = 0;
    const responseSub = new Subject<IPerson>();
    timer(0, 100)
      .pipe(
        concatMap(() => {
          id++;
          return this.getPerson(id);
        }),
        filter((response) => {
          return response.lastName?.toLowerCase() === name.toLowerCase() || response.firstName?.toLowerCase() === name.toLowerCase();
        }),
        take(1),
        timeout(60000)
      )
      .subscribe({
        next: (result) => {
          responseSub.next(result);
          responseSub.complete();
        },
        error: (error) => {
          responseSub.error(error);
          responseSub.complete();
        }
      });
    return responseSub;
  }
}

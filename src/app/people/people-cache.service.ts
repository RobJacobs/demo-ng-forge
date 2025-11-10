import { Injectable } from '@angular/core';
import { SortDirection } from '@tylertech/forge';
import { IFilter, IPerson } from 'src/app/shared/interfaces';

@Injectable()
export class PeopleCacheService {
  public people?: IPerson[];
  public homeView = {
    storageKey: 'people-home',
    showFilter: false,
    filter: {
      sort: {
        property: 'lastName',
        direction: SortDirection.Ascending
      },
      filters: [] as IFilter[],
      skip: 0,
      take: 25
    }
  };
}

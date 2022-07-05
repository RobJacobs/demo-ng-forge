import { Injectable } from '@angular/core';
import { SortDirection } from '@tylertech/forge';
import { IPerson } from 'src/app/shared/interfaces/person.interface';

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
      filters: [] as any[],
      skip: 0,
      take: 25
    }
  };
}

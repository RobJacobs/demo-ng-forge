import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

import { IPerson } from 'src/app/shared/interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBStorageService {
  public storageDb = new Dexie('demo-ng-forge');
  public people?: Table<IPerson>;

  constructor() {
    // https://dexie.org/docs/Version/Version.stores()
    this.storageDb.version(1).stores({
      people: '++id, firstName, lastName, gender, occupation'
    });
    this.people = this.storageDb['people'];
  }
}

import Dexie, { Table } from 'dexie';

import { IPerson } from 'src/app/shared/interfaces/person.interface';

export class IndexedDBStorage extends Dexie {
  public people?: Table<IPerson>;

  constructor() {
    super('demo-ng-forge');
    // https://dexie.org/docs/Version/Version.stores()
    this.version(1).stores({
      people: '++id, firstName, lastName, gender, occupation'
    });
  }
}

export const storageDb = new IndexedDBStorage();

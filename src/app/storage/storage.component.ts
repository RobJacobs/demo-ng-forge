import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { Observable as DexieObservable } from 'dexie';
import { ForgeButtonModule, ForgeLabelValueModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { IPerson } from 'src/app/shared/interfaces';
import { IndexedDBStorageService } from './indexed-db-storage.service';

@Component({
  selector: 'app-storage',
  imports: [CommonModule, ForgeButtonModule, ForgeLabelValueModule, ForgeToolbarModule],
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  private appDataService = inject(AppDataService);
  private dbStorageService = inject(IndexedDBStorageService);

  private readonly storageKey = 'app--storage-key';

  public storageSpace = {
    total: '?',
    used: '?',
    localStorage: '?'
  };

  public localStorageData?: IPerson[] = [];

  // https://dexie.org/docs/liveQuery()
  // public indexedDbData$ = from(liveQuery(() => storageDb.people.toArray()));
  public indexedDbData?: IPerson[];

  public ngOnInit() {
    this.calcStorageSpace();
    // this.onLoadLocal();
    // this.onLoadDb();
  }

  public onSaveLocal() {
    this.appDataService.getPeople().subscribe({
      next: (result) => {
        this.localStorageData = result.data;
        localStorage.setItem(`${this.storageKey}`, JSON.stringify(this.localStorageData));
        this.calcStorageSpace();
      }
    });
  }

  public onDeleteLocal() {
    this.localStorageData = undefined;
    localStorage.removeItem(this.storageKey);
    this.calcStorageSpace();
  }

  public onLoadLocal() {
    const localStorageResult = localStorage.getItem(this.storageKey);
    if (localStorageResult?.length) {
      try {
        this.localStorageData = JSON.parse(localStorageResult);
        // eslint-disable-next-line no-empty
      } catch {}
    }
  }

  public onDeleteDb() {
    this.dbStorageService.people?.clear().finally(() => {
      this.onLoadDb();
      this.calcStorageSpace();
    });
  }

  public onSaveDb() {
    this.appDataService.getPeople().subscribe({
      next: (result) => {
        this.dbStorageService.people
          ?.bulkAdd([
            ...result.data.map((p) => {
              delete (p as any).id;
              return p;
            })
          ])
          .finally(() => {
            this.onLoadDb();
            this.calcStorageSpace();
          });
      }
    });
  }

  public onLoadDb() {
    this.dbStorageService.people
      ?.toArray()
      .then((result) => (this.indexedDbData = result))
      .catch((error) => console.log(error));

    // this.dexiePromiseToSubject(storageDb.people.toArray()).subscribe({
    //   next: value => console.log(value),
    //   error: error => console.log(console.error)
    // });

    // this.dexieObservableToSubject(liveQuery(() => storageDb.people.toArray()))
    //   .subscribe({
    //     next: result => this.indexedDbData = result,
    //     error: error => console.log(error)
    //   });
  }

  private calcStorageSpace() {
    navigator.storage.estimate().then((result) => {
      this.storageSpace = {
        total: `${Utils.formatNumber((result.quota ?? 0) / 1000000)}mb`,
        used: `${Utils.formatNumber((result.usage ?? 0) / 1000000)}mb`,
        localStorage: `${Utils.formatNumber((localStorage.getItem(this.storageKey)?.length ?? 0) / 1000000)}mb`
      };
    });
  }

  private dexieObservableToSubject<T>(o: DexieObservable<T>): Subject<T> {
    const subject = new Subject<T>();
    const dexieSub = o.subscribe({
      next: (value) => {
        subject.next(value);
        dexieSub.unsubscribe();
        subject.complete();
      },
      error: (error) => {
        subject.error(error);
        dexieSub.unsubscribe();
        subject.complete();
      }
    });
    return subject;
  }

  private dexiePromiseToSubject<T>(p: Promise<T>): Subject<T> {
    const subject = new Subject<T>();
    p.then((value) => {
      subject.next(value);
      subject.complete();
    }).catch((error) => {
      subject.error(error);
      subject.complete();
    });
    return subject;
  }
}

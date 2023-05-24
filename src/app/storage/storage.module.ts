import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StorageComponent } from './storage.component';
import { intervalToDuration, isBefore } from 'date-fns';

const routes: Routes = [
  { path: '**', component: StorageComponent }
];

@NgModule({
  declarations: [
    StorageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StorageModule {
  constructor() {
    const expireDate = new Date();
    // expireDate.setFullYear(expireDate.getFullYear() - 1);
    Object.keys(localStorage).filter(k => k.includes(':')).sort((a, b) => {
      const aValue = parseInt(a.split(':')[1], 10);
      if (!isFinite(aValue)) {
        return -1;
      }
      const bValue = parseInt(b.split(':')[1], 10);
      if (!isFinite(bValue)) {
        return 1;
      }
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }).forEach(k => {
      const time = parseInt(k.split(':')[1], 10);
      if (isFinite(time)) {
        const entryDate = new Date(time);
        console.log(entryDate);
        console.log(isBefore(entryDate, expireDate));
      }
    });
    // console.log(Object.keys(localStorage));
    // Object.keys(localStorage).slice(10).forEach(k => {
    //   console.log(k);
    //   localStorage.removeItem(k);
    // });
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { initializeTableState } from '../shared/components/table/table-full/table-full.constants';

@Injectable()
export class TableFullDemoService {
  public tableState = initializeTableState({ id: 'lastName', desc: false });
}

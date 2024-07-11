import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOption, SortDirection } from '@tylertech/forge';
import { isDefined } from '@tylertech/forge-core';
import { ForgeIconButtonModule, ForgeIconModule, ForgeOptionModule, ForgePaginatorModule, ForgeSelectDropdownModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef, ColumnMovedEvent, ColumnResizedEvent, ColumnVisibleEvent, GridOptions, GridReadyEvent, ICellRendererComp, ICellRendererParams, SortChangedEvent } from 'ag-grid-community';
import { finalize } from 'rxjs';

import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { Utils } from 'src/utils';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-ag-grid-demo',
  standalone: true,
  imports: [CommonModule, ForgeIconButtonModule, ForgeIconModule, ForgeOptionModule, ForgePaginatorModule, ForgeSelectDropdownModule, ForgeToolbarModule, AgGridModule],
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgGridDemoComponent implements OnInit {
  private appDataService = inject(AppDataService);

  @ViewChild('agGrid', { read: AgGridAngular })
  private agGrid?: AgGridAngular;
  private storageKey = 'ag-grid-demo';

  public isBusy = false;
  public filterCache = {
    sort: {
      property: 'lastName',
      direction: SortDirection.Ascending
    },
    filters: [],
    skip: 0,
    take: 25
  };
  public recordset: IPerson[] = [];
  public recordCount = 0;

  public gridOptions: GridOptions = {
    domLayout: 'normal'
  };
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true
  };
  public columnDefs: ColDef[] = [
    { field: 'image', headerName: '', cellRenderer: ImageCellRendererComponent, sortable: false, width: 80, suppressSizeToFit: true, suppressAutoSize: false, resizable: false },
    { field: 'firstName', headerName: 'First', filter: true },
    { field: 'lastName', headerName: 'Last' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'occupation', headerName: 'Occupation' }
  ];

  public get optionalTableColumns(): IOption[] {
    return this.columnDefs.filter((c) => c.field).map((c) => ({ value: c.field, label: c.headerName || c.field })) as IOption[];
  }
  public selectedTableColumns?: (string | undefined)[];

  public ngOnInit() {
    this.getRecords();
  }

  public onGridReady(event: GridReadyEvent) {
    this.agGrid?.api.sizeColumnsToFit();
    const columnState = localStorage.getItem(this.storageKey);
    if (columnState?.length) {
      this.agGrid?.api.applyColumnState({
        state: JSON.parse(columnState),
        applyOrder: true
      });
    }
    this.selectedTableColumns = this.agGrid?.api.getAllDisplayedColumns().map((c) => c.getColDef().field);
  }

  public onTableSort(event: SortChangedEvent) {
    localStorage.setItem(this.storageKey, JSON.stringify(event.api.getColumnState()));
  }

  public onTableStateChange(event: ColumnResizedEvent | ColumnMovedEvent | ColumnVisibleEvent) {
    if (isDefined((event as ColumnResizedEvent).finished) && !(event as ColumnResizedEvent).finished) {
      return;
    }

    const eventSources = ['uiColumnResized', 'uiColumnMoved'];
    if (eventSources.includes(event.source) || event.type === 'columnVisible') {
      localStorage.setItem(this.storageKey, JSON.stringify(event.api.getColumnState()));
    }
  }

  public onTableColumnOptionSelected(columnFields: string[]) {
    this.selectedTableColumns = columnFields;
    this.agGrid?.api.setColumnsVisible(columnFields, true);
    this.agGrid?.api.setColumnsVisible(this.columnDefs.map((c) => c.field).filter((c) => !columnFields.includes(c as string)) as string[], false);
  }

  public onTablePaginatorChange(detail: { pageIndex: number; pageSize: number }) {
    this.filterCache.skip = detail.pageIndex * detail.pageSize;
    this.filterCache.take = detail.pageSize;
    this.getRecords();
  }

  private getRecords() {
    this.isBusy = true;
    this.appDataService
      .getPeople({
        sort: this.filterCache.sort,
        filters: this.filterCache.filters,
        skip: this.filterCache.skip,
        take: this.filterCache.take
      })
      .pipe(finalize(() => (this.isBusy = false)))
      .subscribe((result) => {
        this.recordset = result.data;
        this.recordCount = result.count;
      });
  }
}

class ImageCellRendererComponent implements ICellRendererComp {
  private cellElement?: HTMLImageElement;

  getGui(): HTMLElement {
    return this.cellElement as HTMLElement;
  }

  init?(params: ICellRendererParams<any, any, any>) {
    this.cellElement = document.createElement('img');
    this.cellElement.src = `mock-data/${Utils.formatNumber(params.data.id, '2.0-0')}-small.png`;
    this.cellElement.classList.add('table-cell__image');
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.cellElement!.src = `mock-data/${Utils.formatNumber(params.data.id, '2.0-0')}-small.png`;

    return true;
  }
}

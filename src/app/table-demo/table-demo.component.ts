import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { finalize, Subscription, fromEvent, tap, Subject, takeUntil, merge } from 'rxjs';
import { IColumnConfiguration, SortDirection } from '@tylertech/forge';
import { PopupDirective } from '@tylertech/forge-angular';

import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { AppDataService } from 'src/app/app-data.service';
import { CdkDragDrop, CdkDragSortEvent, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit, OnDestroy {
  @ViewChild('table', { static: true })
  private tableElementRef: ElementRef;
  @ViewChild('columnHeaderPopup', { read: PopupDirective })
  private columnHeaderPopupDirective: PopupDirective;
  private tableColumnResize$ = new Subject<void>();
  private isColumnResizing = false;

  public isBusy = false;
  public filterCache = {
    sort: {
      property: 'lastName',
      direction: SortDirection.Ascending
    },
    filters: [] as any[],
    skip: 0,
    take: 25
  }
  public recordset: IPerson[] = [];
  public recordCount = 0;
  public tableColumns: IColumnConfiguration[] = [
    { header: 'First', property: 'firstName', width: 400 },
    { header: 'Last', property: 'lastName' },
    { header: 'Gender', property: 'gender' },
    { header: 'Occupation', property: 'occupation' }
  ];

  constructor(
    private appDataService: AppDataService,
  ) { }

  public ngOnInit() {
    this.getRecords();
  }

  public ngOnDestroy() {
    this.tableColumnResize$.next();
    this.tableColumnResize$.complete();
  }

  public onColumnHeaderDragDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableColumns, event.previousIndex, event.currentIndex);
    this.tableColumns = [...this.tableColumns];
  }

  public isColumnVisible(column: IColumnConfiguration) {
    return column.hidden ? false : true;
  }

  public onColumnHeaderResize(event: MouseEvent, columnIndex: number, column: IColumnConfiguration) {
    event.stopPropagation();
    event.preventDefault();
    this.tableColumnResize$.next();

    let columnHeaderElement = (this.tableElementRef.nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[columnIndex];
    let columnElements = (this.tableElementRef.nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${columnIndex + 1})`);

    let positionX: number;
    if (columnHeaderElement) {
      this.isColumnResizing = true;
      this.tableElementRef.nativeElement.querySelector('.forge-table-head__row')?.classList.add('forge-table-head__row--resizing');
      columnHeaderElement.classList.add('forge-table-head__cell--resizing');
      columnElements.forEach(c => c.classList.add('forge-table-body__cell--resizing'));

      fromEvent(document.body, 'mousemove')
        .pipe(
          takeUntil(this.tableColumnResize$),
          tap((event: MouseEvent) => {
            column.width = columnHeaderElement.clientWidth + (event.clientX - positionX);
            positionX = event.clientX;
          })
        ).subscribe();

      const theadElement = this.tableElementRef.nativeElement.querySelector('thead');
      merge(
        fromEvent(theadElement, 'mouseup'),
        fromEvent(theadElement, 'mouseleave')
      )
        .pipe(
          finalize(() =>
            requestAnimationFrame(() => {
              this.isColumnResizing = false;
              columnHeaderElement = undefined;
              columnElements = undefined;
            })
          ),
          takeUntil(this.tableColumnResize$),
          tap((event: MouseEvent) => {
            this.tableColumnResize$.next();
            this.tableElementRef.nativeElement.querySelector('.forge-table-head__row')?.classList.remove('forge-table-head__row--resizing');
            columnHeaderElement.classList.remove('forge-table-head__cell--resizing');
            columnElements.forEach(c => c.classList.remove('forge-table-body__cell--resizing'));
          })
        ).subscribe();
    }
  }

  public onColumnHeaderRightClick(event: PointerEvent) {
    event.preventDefault();
    if (this.columnHeaderPopupDirective.popupElement) {
      this.columnHeaderPopupDirective.close();
    } else {
      this.columnHeaderPopupDirective.open();
    }
  }

  public onColumnPopupItemSelected(value: any) {
    switch (value) {
      case 'reset-column-width':
        this.tableColumns.forEach(c => c.width = undefined);
        break;
      case 'freeze-column': {
        let columnHeaderElement = (this.tableElementRef.nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[0];
        let columnElements = (this.tableElementRef.nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${1})`);
        columnHeaderElement.classList.add('forge-table-head__cell--frozen');
        columnElements.forEach(c => c.classList.add('forge-table-body__cell--frozen'));
        break;
      }

      default: {
        const tableColumn = this.tableColumns.find(c => c.property === value.property);
        if (tableColumn) {
          // prevent hiding all columns
          if (this.tableColumns.filter(c => !c.hidden).length) {
            tableColumn.hidden = !!tableColumn.hidden;
            tableColumn.sortDirection = undefined;
            this.tableColumns = [...this.tableColumns];
          }
        }
        break;
      }
    }
    this.columnHeaderPopupDirective.close();
  }

  public onTableSort(column: IColumnConfiguration) {
    if (!this.isColumnResizing) {
      this.tableColumns.filter(c => c.property !== column.property).forEach(c => c.sortDirection = undefined);
      if (column.sortDirection === SortDirection.Ascending) {
        column.sortDirection = SortDirection.Descending;
      } else if (column.sortDirection === SortDirection.Descending) {
        column.sortDirection = undefined;
      } else {
        column.sortDirection = SortDirection.Ascending;
      }

      this.filterCache.sort = column.sortDirection ? { property: column.property, direction: column.sortDirection } : undefined;
      this.filterCache.skip = 0;
      this.getRecords();
    }
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
      }).pipe(
        finalize(() => this.isBusy = false)
      )
      .subscribe((result) => {
        this.recordset = result.data;
        this.recordCount = result.count;
      });
  }
}

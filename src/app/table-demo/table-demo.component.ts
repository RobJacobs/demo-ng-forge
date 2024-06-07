import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize, fromEvent, tap, Subject, takeUntil, merge, BehaviorSubject } from 'rxjs';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { IColumnConfiguration, SortDirection } from '@tylertech/forge';
import { isDefined } from '@tylertech/forge-core';
import { ForgeCheckboxModule, ForgeDividerModule, ForgeIconButtonModule, ForgeIconModule, ForgeListItemModule, ForgeListModule, ForgePopoverModule, ForgeToolbarModule, PopoverDirective } from '@tylertech/forge-angular';

import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { AppDataService } from 'src/app/app-data.service';
import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { CallbackPipe } from 'src/app/shared/pipes/callback.pipe';
import { TableDetailComponent } from 'src/app/shared/components/table-detail/table-detail.component';

@Component({
  selector: 'app-table-demo',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    ScrollingModule,
    ForgeCheckboxModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgePopoverModule,
    ForgeToolbarModule,
    TableDetailComponent,
    AutoFocusDirective,
    CallbackPipe
  ],
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit, AfterViewInit, OnDestroy {
  private appDataService = inject(AppDataService);

  @ViewChild('table', { static: true })
  private tableElementRef?: ElementRef;
  @ViewChild('columnHeaderPopup', { read: PopoverDirective })
  private columnHeaderPopupDirective?: PopoverDirective;
  @ViewChild(CdkVirtualScrollViewport)
  public virtualScrollViewport?: CdkVirtualScrollViewport;
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
  public recordset$ = new BehaviorSubject<IPerson[]>([]);
  public recordCount = 0;
  public tableColumns: IColumnConfiguration[] = [
    { header: 'Id', property: 'id', width: 48 },
    { header: 'First', property: 'firstName' },
    { header: 'Last', property: 'lastName' },
    { header: 'Gender', property: 'gender' },
    { header: 'Occupation', property: 'occupation' }
  ];
  public tableHeaderOffset = 0;
  public expandedRows: any[] = [];

  public visibleColumns = (columns: IColumnConfiguration[]) => {
    return columns.filter(c => c.hidden !== true);
  }

  public recordsetTrackBy = (index: number, person: IPerson) => {
    return person.id;
  }

  public ngOnInit() {
    this.getRecords();
  }

  public ngAfterViewInit() {
    this.virtualScrollViewport?.renderedRangeStream.subscribe(o => {
      this.tableHeaderOffset = o.start;
      if (!this.isBusy && o.start > 0 && o.end + 67 > this.recordCount) {
        this.isBusy = true;
        this.appDataService
          .getPeople({
            sort: this.filterCache.sort
          }).pipe(
            finalize(() => this.isBusy = false)
          )
          .subscribe((result) => {
            const startId = this.recordset.length + 1;
            this.recordset = [...this.recordset, ...result.data.map((p, i) => {
              p.id = startId + p.id;
              return p;
            })];
            this.recordCount = this.recordset.length;
            this.recordset$.next(this.recordset);
          });
      }
    });
  }

  public ngOnDestroy() {
    this.tableColumnResize$.next();
    this.tableColumnResize$.complete();
  }

  public onColumnHeaderDragStart() {
    this.virtualScrollViewport?.scrollToOffset(0);
  }

  public onColumnHeaderDragDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableColumns, event.previousIndex, event.currentIndex);
    this.tableColumns = [...this.tableColumns];
  }

  public onColumnHeaderResize(event: MouseEvent, columnIndex: number, column: IColumnConfiguration) {
    event.stopPropagation();
    event.preventDefault();
    this.tableColumnResize$.next();

    let columnHeaderElement = (this.tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[columnIndex] as HTMLTableCellElement;
    let columnElements = (this.tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${columnIndex + 1})`);

    let positionX = event.clientX;
    if (columnHeaderElement) {
      this.isColumnResizing = true;
      this.tableElementRef?.nativeElement.querySelector('.forge-table-head__row')?.classList.add('forge-table-head__row--resizing');
      columnHeaderElement.classList.add('forge-table-head__cell--resizing');
      columnElements.forEach(c => c.classList.add('forge-table-body__cell--resizing'));

      fromEvent<MouseEvent>(document.body, 'mousemove')
        .pipe(
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            column.width = columnHeaderElement.offsetWidth + (event.clientX - positionX);
            positionX = event.clientX;
          })
        ).subscribe();

      const theadElement = this.tableElementRef?.nativeElement.querySelector('thead');
      merge(
        fromEvent(theadElement, 'mouseup'),
        fromEvent(theadElement, 'mouseleave')
      )
        .pipe(
          finalize(() =>
            requestAnimationFrame(() => {
              this.isColumnResizing = false;
              (columnHeaderElement as any) = undefined;
              (columnElements as any) = undefined;
            })
          ),
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            this.tableColumnResize$.next();
            this.tableElementRef?.nativeElement.querySelector('.forge-table-head__row')?.classList.remove('forge-table-head__row--resizing');
            columnHeaderElement.classList.remove('forge-table-head__cell--resizing');
            columnElements.forEach(c => c.classList.remove('forge-table-body__cell--resizing'));
          })
        ).subscribe();
    }
  }

  public onColumnHeaderRightClick(event: PointerEvent) {
    event.preventDefault();
    if (this.columnHeaderPopupDirective?.popoverElement) {
      this.columnHeaderPopupDirective.close();
    } else {
      this.columnHeaderPopupDirective?.open();
    }
  }

  public onColumnPopupItemSelected(value: any) {
    switch (value) {
      case 'reset-column-width':
        this.tableColumns.forEach(c => c.width = undefined);
        break;
      case 'freeze-column': {
        const columnHeaderElement = (this.tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[0];
        const columnElements = (this.tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${1})`);
        columnHeaderElement.classList.add('forge-table-head__cell--frozen');
        columnElements.forEach(c => c.classList.add('forge-table-body__cell--frozen'));
        break;
      }

      default: {
        const tableColumn = this.tableColumns.find(c => c.property === value.property);
        if (tableColumn) {
          // prevent hiding all columns
          if (this.tableColumns.filter(c => !c.hidden).length) {
            tableColumn.hidden = isDefined(tableColumn.hidden) ? !tableColumn.hidden : true;
            tableColumn.sortDirection = undefined;
            this.tableColumns = [...this.tableColumns];
          }
        }
        break;
      }
    }
    this.columnHeaderPopupDirective?.close();
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

      (this.filterCache as any).sort = column.sortDirection ? { property: column.property, direction: column.sortDirection } : undefined;
      this.filterCache.skip = 0;
      this.virtualScrollViewport?.scrollToOffset(0);
      this.expandedRows.length = 0;
      this.getRecords();
    }
  }

  public onTablePaginatorChange(detail: { pageIndex: number; pageSize: number }) {
    this.filterCache.skip = detail.pageIndex * detail.pageSize;
    this.filterCache.take = detail.pageSize;
    this.expandedRows.length = 0;
    this.getRecords();
  }

  public onExpandRow(index: number, value: any) {
    if (this.expandedRows[index]) {
      this.expandedRows[index] = undefined;
    } else {
      this.expandedRows[index] = value;
    }
  }

  private getRecords() {
    this.isBusy = true;
    this.appDataService
      .getPeople({
        sort: this.filterCache.sort
      }).pipe(
        finalize(() => this.isBusy = false)
      )
      .subscribe((result) => {
        this.recordset = result.data;
        this.recordCount = result.count;
        this.recordset$.next(this.recordset);
      });
  }
}

import { AfterViewInit, Component, DestroyRef, ElementRef, OnDestroy, OnInit, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize, fromEvent, tap, Subject, takeUntil, merge } from 'rxjs';
import { IColumnConfiguration, PopoverComponent, SortDirection } from '@tylertech/forge';
import { isDefined } from '@tylertech/forge-core';
import {
  ForgeCheckboxModule,
  ForgeDividerModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeListItemModule,
  ForgeListModule,
  ForgePopoverModule,
  ForgeToolbarModule
} from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { IPerson } from 'src/app/shared/interfaces';
import { CallbackPipe } from 'src/app/shared/pipes';
import { TableDetailComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-table-demo',
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
    CallbackPipe
  ],
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroyRef = inject(DestroyRef);
  private appDataService = inject(AppDataService);
  private readonly tableElementRef = viewChild<ElementRef<HTMLTableElement>>('table');
  private readonly columnHeaderPopover = viewChild<ElementRef<PopoverComponent>>('columnHeaderPopover');
  private readonly virtualScrollViewport = viewChild(CdkVirtualScrollViewport);
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
  };
  public recordset = signal<IPerson[]>([]);
  public tableColumns: IColumnConfiguration[] = [
    { header: 'Id', property: 'id', width: 48 },
    { header: 'First', property: 'firstName' },
    { header: 'Last', property: 'lastName' },
    { header: 'Gender', property: 'gender' },
    { header: 'Occupation', property: 'occupation' }
  ];
  public tableHeaderOffset = signal(0);
  public tableRowHeight = 56;
  public expandedRows: any[] = [];
  public id = Utils.elementId('app-');

  public visibleColumns = (columns: IColumnConfiguration[]) => {
    return columns.filter((c) => c.hidden !== true);
  };

  public recordsetTrackBy = (index: number, person: IPerson) => {
    return person.id;
  };

  public ngOnInit() {
    this.getRecords();
    this.virtualScrollViewport().checkViewportSize();
  }

  public ngAfterViewInit() {
    this.virtualScrollViewport()
      ?.renderedRangeStream.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (o) => {
          this.tableHeaderOffset.set(o.start);
          if (!this.isBusy && o.start > 0 && o.end + 20 > this.recordset().length) {
            this.isBusy = true;
            this.appDataService
              .getPeople({
                sort: this.filterCache.sort
              })
              .pipe(
                takeUntilDestroyed(this.destroyRef),
                finalize(() => (this.isBusy = false))
              )
              .subscribe({
                next: (result) => {
                  const startId = this.recordset().length + 1;
                  this.recordset.update((value) => {
                    return [
                      ...value,
                      ...result.data.map((p, i) => {
                        p.id = startId + p.id;
                        return p;
                      })
                    ];
                  });
                }
              });
          }
        }
      });
  }

  public ngOnDestroy() {
    this.tableColumnResize$.next();
    this.tableColumnResize$.complete();
  }

  public onColumnHeaderDragStart() {
    this.virtualScrollViewport()?.scrollToOffset(0);
  }

  public onColumnHeaderDragDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableColumns, event.previousIndex, event.currentIndex);
    this.tableColumns = [...this.tableColumns];
  }

  public onColumnHeaderResize(event: MouseEvent, columnIndex: number, column: IColumnConfiguration) {
    event.stopPropagation();
    event.preventDefault();
    this.tableColumnResize$.next();

    const tableElementRef = this.tableElementRef();
    let columnHeaderElement = (tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[columnIndex] as HTMLTableCellElement;
    let columnElements = (tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${columnIndex + 1})`);

    let positionX = event.clientX;
    if (columnHeaderElement) {
      this.isColumnResizing = true;
      tableElementRef?.nativeElement.querySelector('.forge-table-head__row')?.classList.add('forge-table-head__row--resizing');
      columnHeaderElement.classList.add('forge-table-head__cell--resizing');
      columnElements.forEach((c) => c.classList.add('forge-table-body__cell--resizing'));

      fromEvent<MouseEvent>(document.body, 'mousemove')
        .pipe(
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            column.width = columnHeaderElement.offsetWidth + (event.clientX - positionX);
            positionX = event.clientX;
          })
        )
        .subscribe();

      const theadElement = tableElementRef?.nativeElement.querySelector('thead');
      merge(fromEvent(theadElement, 'mouseup'), fromEvent(theadElement, 'mouseleave'))
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
            this.tableElementRef()?.nativeElement.querySelector('.forge-table-head__row')?.classList.remove('forge-table-head__row--resizing');
            columnHeaderElement.classList.remove('forge-table-head__cell--resizing');
            columnElements.forEach((c) => c.classList.remove('forge-table-body__cell--resizing'));
          })
        )
        .subscribe();
    }
  }

  public onColumnHeaderRightClick(event: PointerEvent, columnIndex: number) {
    event.preventDefault();
    const columnHeaderPopover = this.columnHeaderPopover();
    if (columnHeaderPopover.nativeElement.open) {
      columnHeaderPopover.nativeElement.open = false;
      requestAnimationFrame(() => {
        this.columnHeaderPopover().nativeElement.anchor = '';
      });
    } else {
      columnHeaderPopover.nativeElement.anchor = `th-${columnIndex}-${this.id}`;
      requestAnimationFrame(() => {
        this.columnHeaderPopover().nativeElement.open = true;
      });
    }
  }

  public onColumnPopoverItemSelected(value: any) {
    switch (value) {
      case 'reset-column-width':
        this.tableColumns.forEach((c) => (c.width = undefined));
        break;
      case 'freeze-column': {
        const tableElementRef = this.tableElementRef();
        const columnHeaderElement = (tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[0];
        const columnElements = (tableElementRef?.nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${1})`);
        columnHeaderElement.classList.add('forge-table-head__cell--frozen');
        columnElements.forEach((c) => c.classList.add('forge-table-body__cell--frozen'));
        break;
      }

      default: {
        const tableColumn = this.tableColumns.find((c) => c.property === value.property);
        if (tableColumn) {
          // prevent hiding all columns
          if (this.tableColumns.filter((c) => !c.hidden).length) {
            tableColumn.hidden = isDefined(tableColumn.hidden) ? !tableColumn.hidden : true;
            tableColumn.sortDirection = undefined;
            this.tableColumns = [...this.tableColumns];
          }
        }
        break;
      }
    }
    const columnHeaderPopover = this.columnHeaderPopover();
    columnHeaderPopover.nativeElement.open = false;
    columnHeaderPopover.nativeElement.anchor = '';
  }

  public onTableSort(event: MouseEvent, column: IColumnConfiguration) {
    event.stopPropagation();
    const columnHeaderPopover = this.columnHeaderPopover();
    columnHeaderPopover.nativeElement.open = false;
    columnHeaderPopover.nativeElement.anchor = '';

    if (!this.isColumnResizing) {
      this.tableColumns.filter((c) => c.property !== column.property).forEach((c) => (c.sortDirection = undefined));
      if (column.sortDirection === SortDirection.Ascending) {
        column.sortDirection = SortDirection.Descending;
      } else if (column.sortDirection === SortDirection.Descending) {
        column.sortDirection = undefined;
      } else {
        column.sortDirection = SortDirection.Ascending;
      }

      (this.filterCache as any).sort = column.sortDirection ? { property: column.property, direction: column.sortDirection } : undefined;
      this.filterCache.skip = 0;
      this.virtualScrollViewport()?.scrollToOffset(0);
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
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.isBusy = false))
      )
      .subscribe({
        next: (result) => {
          this.recordset.set(result.data);
        }
      });
  }
}

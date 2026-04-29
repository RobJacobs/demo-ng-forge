import { Component, computed, ElementRef, input, model, output, signal, TemplateRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  CellContext,
  Column,
  ColumnPinningState,
  createAngularTable,
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  HeaderContext,
  Row,
  Table
} from '@tanstack/angular-table';
import { finalize, fromEvent, merge, Subject, takeUntil, tap } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';
import {
  tylIconArrowDownward,
  tylIconArrowUpward,
  tylIconCancel,
  tylIconCheck,
  tylIconCheckBox,
  tylIconCheckboxBlankOff,
  tylIconCheckBoxOutlineBlank,
  tylIconDragHandle,
  tylIconEdit,
  tylIconFilterList,
  tylIconIndeterminateCheckBox,
  tylIconViewColumn
} from '@tylertech/tyler-icons';
import { CellAlign, IconButtonComponent, IconRegistry, IMenuOption, IMenuSelectEventData, IPaginatorChangeEventData, PopoverComponent } from '@tylertech/forge';
import {
  ForgeButtonModule,
  ForgeCheckboxModule,
  ForgeDividerModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeListItemModule,
  ForgeListModule,
  ForgeMenuModule,
  ForgeOpenIconModule,
  ForgePageStateModule,
  ForgePaginatorModule,
  ForgePopoverModule,
  ForgeSkeletonModule,
  ForgeToolbarModule,
  ForgeTooltipModule
} from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { columnIds, ComponentColumnDef, ITableState } from './table-full.constants';
import { TableCellFilterComponent } from '../table-cell-filter/table-cell-filter.component';
import { TableMobileComponent } from '../table-mobile/table-mobile.component';

@Component({
  selector: 'app-table-full',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    FlexRender,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgeMenuModule,
    ForgeOpenIconModule,
    ForgePageStateModule,
    ForgePaginatorModule,
    ForgePopoverModule,
    ForgeSkeletonModule,
    ForgeToolbarModule,
    ForgeTooltipModule,
    TableCellFilterComponent,
    TableMobileComponent
  ],
  templateUrl: './table-full.component.html',
  styleUrl: './table-full.component.scss'
})
export class TableFullComponent {
  private tableColumnResize$ = new Subject<void>();
  private tableElementRef = viewChild.required<ElementRef<HTMLTableElement>>('tableRef');
  private columnsConfigurePopover = viewChild.required<ElementRef<PopoverComponent>>('columnsConfigurePopover');
  private headerActionsMenu = viewChild.required<ElementRef<IconButtonComponent>>('headerActionsMenu');
  private tableCellHeaderDefaultTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<unknown, unknown> }>>('tableCellHeaderDefault');
  private tableCellDefaultTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<unknown, unknown> }>>('tableCellDefault');

  public tableRowSelectHeaderTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<unknown, unknown> }>>('tableRowSelectHeader');
  public tableRowSelectTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<unknown, unknown> }>>('tableRowSelect');
  public tableRowExpandTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<unknown, unknown> }>>('tableRowExpand');

  constructor() {
    IconRegistry.define([
      tylIconArrowDownward,
      tylIconArrowUpward,
      tylIconCancel,
      tylIconCheck,
      tylIconCheckBox,
      tylIconCheckboxBlankOff,
      tylIconCheckBoxOutlineBlank,
      tylIconDragHandle,
      tylIconEdit,
      tylIconFilterList,
      tylIconIndeterminateCheckBox,
      tylIconViewColumn
    ]);
  }

  public headerTitle = input<string>();
  public state = input<ITableState>();
  public layoutMode = input<'sm' | 'md' | 'lg'>('lg');
  public columnDefs = input<ComponentColumnDef<any>[]>();
  public tableRowDetailTemplate = input<TemplateRef<{ data: unknown; rowIndex: number }>>();
  public recordset = input<unknown[]>([]);
  public recordCount = input<number>(0);
  public isBusy = input<boolean>(false);
  public canEdit = input<boolean>(false);
  public isEditing = model<boolean>();
  public canFilter = input<boolean>(true);
  public isFiltering = model<boolean>(false);
  public canConfigureColumns = input<boolean>(true);
  public canRowClick = input(false);
  public rowClicked = output<{ event: Event; row: Row<any> }>();
  public filterShow = output();
  public editSubmit = output();
  public loadingIndicators = computed(() => {
    return new Array(this.state().take());
  });
  public headerOptions = computed<IMenuOption[]>(() => {
    const menuOptions: IMenuOption[] = [];
    if (this.canEdit()) {
      menuOptions.push({ label: 'Edit', value: 'edit', leadingIcon: 'edit', leadingIconType: 'component' });
    }
    if (this.canFilter()) {
      menuOptions.push({ label: 'Filter', value: 'filter', leadingIcon: 'filter_list', leadingIconType: 'component' });
    }
    if (this.canConfigureColumns()) {
      menuOptions.push({ label: 'Columns', value: 'columns', leadingIcon: 'view_column', leadingIconType: 'component' });
    }
    return menuOptions;
  });

  private columnPinning = computed<ColumnPinningState>(() => {
    const state: ColumnPinningState = {};
    const leftPinnedColumn = this.columnDefs()?.find((c) => c.frozen === 'left');
    if (leftPinnedColumn) {
      state.left = [leftPinnedColumn.id];
    }
    const rightPinnedColumn = this.columnDefs()?.find((c) => c.frozen === 'right');
    if (rightPinnedColumn) {
      state.right = [rightPinnedColumn.id];
    }
    return state;
  });

  public elementId = Utils.elementId('app-full-table');
  public columnIds = columnIds;

  public isColumnResizing = signal(false);
  public cellAlignEnum = CellAlign;
  public defaultColumnDef: Partial<ComponentColumnDef<any>> = {
    size: 0,
    minSize: 0,
    header: () => this.tableCellHeaderDefaultTemplate(),
    cell: () => this.tableCellDefaultTemplate(),
    enableColumnFilter: false
  };
  public hasFooter = computed(() => {
    return (
      this.table
        .getFooterGroups()
        .map((g) => g.headers.map((h) => h.column.columnDef.footer))
        .flat()
        .filter((h) => isDefined(h)).length > 0
    );
  });
  public configurableColumns = computed(() => {
    return this.table
      .getAllLeafColumns()
      .filter((c) => c.columnDef.enableHiding !== false || (c.columnDef as ComponentColumnDef<unknown>).enableOrdering !== false);
  });

  public table: Table<unknown> = createAngularTable(() => ({
    data: this.recordset(),
    defaultColumn: this.defaultColumnDef,
    columns: this.columnDefs(),
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    onColumnFiltersChange: (value) => {
      this.resetRowState();
      if (typeof value === 'function') {
        this.state()?.columns?.filters.update(value);
      } else {
        this.state()?.columns?.filters.set(value);
      }
    },
    onSortingChange: (value) => {
      if (this.isBusy() || this.isEditing() || this.isColumnResizing()) {
        return;
      }
      this.resetRowState();
      if (typeof value === 'function') {
        this.state()?.sorting.update(value);
      } else {
        this.state()?.sorting.set(value);
      }
    },
    onColumnSizingChange: (value) => {
      if (typeof value === 'function') {
        this.state()?.columns?.sizing.update(value);
      } else {
        this.state()?.columns?.sizing.set(value);
      }
    },
    onColumnVisibilityChange: (value) => {
      if (typeof value === 'function') {
        this.state()?.columns?.visibility.update(value);
      } else {
        this.state()?.columns?.visibility.set(value);
      }
    },
    onColumnOrderChange: (value) => {
      if (typeof value === 'function') {
        this.state()?.columns?.order.update(value);
      } else {
        this.state()?.columns?.order.set(value);
      }
    },
    onExpandedChange: (value) => {
      if (typeof value === 'function') {
        this.state()?.rows?.expanded.update(value);
      } else {
        this.state()?.rows?.expanded.set(value);
      }
    },
    getRowCanExpand: () => true,
    enableRowSelection: () => true,
    onRowSelectionChange: (value) => {
      if (typeof value === 'function') {
        this.state()?.rows?.selected.update(value);
      } else {
        this.state()?.rows?.selected.set(value);
      }
    },
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      columnFilters: this.state()?.columns?.filters(),
      columnOrder: this.state()?.columns?.order(),
      columnPinning: this.columnPinning(),
      columnSizing: this.state()?.columns?.sizing(),
      columnVisibility: this.state()?.columns?.visibility(),
      expanded: this.state()?.rows?.expanded(),
      rowSelection: this.state()?.rows?.selected(),
      sorting: this.state()?.sorting()
    },
    initialState: {
      columnFilters: this.state()?.columns?.filters(),
      columnOrder: this.state()?.columns?.order(),
      columnPinning: this.columnPinning(),
      columnSizing: this.state()?.columns?.sizing(),
      columnVisibility: this.state()?.columns?.visibility(),
      sorting: this.state()?.sorting()
    }
  }));

  public onColumnDragDrop(dragDropEvent: CdkDragDrop<CellContext<any, unknown>>) {
    this.onStopEvent(dragDropEvent.event);

    const columns = this.table.getAllFlatColumns();
    const previousIndex = columns.findIndex((c) => c.id === dragDropEvent.item.data.id);
    const currentIndex = columns.findIndex((c) => c.id === this.configurableColumns()[dragDropEvent.currentIndex].id);

    if ((columns[currentIndex].columnDef as ComponentColumnDef<unknown>).enableOrdering === false) {
      return;
    }
    moveItemInArray(columns, previousIndex, currentIndex);
    this.table.setColumnOrder(columns.map((c) => c.id));
  }

  public columnOrderPredicate = (index: number, item) => {
    return (this.configurableColumns()[index] as ComponentColumnDef<unknown>).enableOrdering !== false;
  };

  public onColumnsConfigure(event: MouseEvent) {
    this.columnsConfigurePopover().nativeElement.anchorElement = event.target as HTMLElement;
    this.columnsConfigurePopover().nativeElement.open = true;
  }

  public onColumnToggleVisibilty(column: Column<any, unknown>) {
    column.toggleVisibility();
  }

  public onColumnSizeReset() {
    this.state().columns.sizing.set({});
  }

  public onColumnHeaderResize(event, context: HeaderContext<any, unknown>) {
    this.onStopEvent(event);

    this.tableColumnResize$.next();

    let columnHeaderElement = (this.tableElementRef().nativeElement as HTMLTableElement).querySelectorAll('thead tr th')[
      context.column.getIndex()
    ] as HTMLTableCellElement;
    let columnElements = (this.tableElementRef().nativeElement as HTMLTableElement).querySelectorAll(`tbody tr td:nth-child(${context.column.getIndex() + 1})`);

    let positionX = event.clientX;
    if (columnHeaderElement) {
      this.isColumnResizing.set(true);
      this.tableElementRef().nativeElement.querySelector('.forge-table-head__row')?.classList.add('forge-table-row--resizing');
      columnHeaderElement.classList.add('forge-table-cell--resizing');
      columnElements.forEach((c) => c.classList.add('forge-table-cell--resizing'));
      const theadElement = this.tableElementRef().nativeElement.querySelector('thead');

      fromEvent<MouseEvent>(document.body, 'mousemove')
        .pipe(
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            this.table.setColumnSizing((value) => {
              value = { ...value, [context.column.id]: columnHeaderElement.offsetWidth + (event.clientX - positionX) };
              return value;
            });
            positionX = event.clientX;
          })
        )
        .subscribe();

      merge(fromEvent(theadElement, 'mouseup'), fromEvent(theadElement, 'mouseleave'))
        .pipe(
          finalize(() =>
            requestAnimationFrame(() => {
              this.isColumnResizing.set(false);
              (columnHeaderElement as any) = undefined;
              (columnElements as any) = undefined;
            })
          ),
          takeUntil(this.tableColumnResize$),
          tap((event) => {
            this.tableColumnResize$.next();

            this.tableElementRef()
              ?.nativeElement.querySelectorAll('.forge-table-row--resizing')
              .forEach((el) => el.classList.remove('forge-table-row--resizing'));
            this.tableElementRef()
              ?.nativeElement.querySelectorAll('.forge-table-cell--resizing')
              .forEach((el) => el.classList.remove('forge-table-cell--resizing'));
          })
        )
        .subscribe();
    }
  }

  public onHeaderOptionSelected(event: CustomEvent<IMenuSelectEventData>) {
    switch (event.detail.value) {
      case 'edit':
        this.onEdit(true);
        break;
      case 'filter':
        this.onFilter();
        break;
      case 'columns':
        this.columnsConfigurePopover().nativeElement.anchorElement = this.headerActionsMenu().nativeElement;
        this.columnsConfigurePopover().nativeElement.open = true;
        break;
    }
  }

  public onHeaderActionsMenu(action: 'open' | 'close') {
    switch (action) {
      case 'open':
        requestAnimationFrame(() => {
          this.columnsConfigurePopover().nativeElement.open = false;
          this.columnsConfigurePopover().nativeElement.anchorElement = undefined;
        });
        break;
    }
  }

  public onRowExpand(event: MouseEvent, context: CellContext<unknown, unknown>) {
    this.onStopEvent(event);
    context.row.toggleExpanded();
  }

  public onRowSelectHeader(context: HeaderContext<any, unknown>) {
    if (this.table.getIsAllRowsSelected()) {
      this.table.toggleAllPageRowsSelected(false);
    } else {
      this.table.toggleAllRowsSelected(true);
    }
  }

  public onRowClick(data: { event: Event; row: any }) {
    if (this.canRowClick()) {
      this.rowClicked.emit(data);
    }
  }

  public onRowSelect(context: CellContext<unknown, unknown>) {
    context.row.toggleSelected();
  }

  public onPaginatorChange(data: IPaginatorChangeEventData) {
    this.resetRowState();
    if (data.type === 'page-size') {
      this.state().take.set(data.pageSize);
      this.state().skip.set(0);
    } else {
      this.state().skip.set(data.offset);
    }
  }

  public onEdit(isEditing: boolean) {
    this.isEditing.set(isEditing);
  }

  public onSubmit() {
    this.editSubmit.emit();
  }

  public onFilter() {
    this.isFiltering.set(!this.isFiltering());
    this.filterShow.emit();
  }

  public onStopEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private resetRowState() {
    this.state().rows.expanded.set({});
    this.state().rows.selected.set({});
  }
}

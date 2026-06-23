import { Component, computed, DestroyRef, ElementRef, inject, input, model, output, TemplateRef, viewChild, viewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import {
  CellContext,
  Column,
  ColumnPinningState,
  createAngularTable,
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  Header,
  HeaderContext,
  Row,
  Table
} from '@tanstack/angular-table';
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
  ForgeTooltipModule,
  PaginatorComponent
} from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { columnIds, ComponentColumnDef, IPaginatorOptions, ITableState } from './table-full.constants';
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
  private destroyRef = inject(DestroyRef);
  private bodyRef = viewChild.required<ElementRef<HTMLElement>>('bodyRef');
  private paginatorRef = viewChild<PaginatorComponent>('paginatorRef');
  private columnsConfigurePopover = viewChild.required<ElementRef<PopoverComponent>>('columnsConfigurePopover');
  private headerActionsMenu = viewChild.required<ElementRef<IconButtonComponent>>('headerActionsMenu');
  private tableCellHeaderDefaultTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<unknown, unknown> }>>('tableCellHeaderDefault');
  private tableCellDefaultTemplate = viewChild.required<TemplateRef<{ $implicit: CellContext<unknown, unknown> }>>('tableCellDefault');
  private tableCellFilters = viewChildren(TableCellFilterComponent);
  private tableSortRefs = viewChildren<ElementRef<HTMLElement>>('sortRef');

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
  public recordKey = input<string>('id');
  public isBusy = input<boolean>(false);
  public canEdit = input<boolean>(false);
  public isEditing = model<boolean>();
  public canFilter = input<boolean>(true);
  public isFiltering = model<boolean>(false);
  public canConfigureColumns = input<boolean>(true);
  public canMultiSelect = input<boolean>(true);
  public canRowClick = input(false);
  public rowClicked = output<{ event: Event; row: Row<any> }>();
  public filterShow = output();
  public editSubmit = output();
  public beforeRender = input<(sub: Subject<boolean>) => void>();
  public paginator = input<IPaginatorOptions>({
    alternative: false,
    first: false,
    firstLast: false,
    label: 'Rows per page:'
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
  public loadingIndicators = computed(() => {
    return new Array(this.state()?.take() || 5);
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
  public maxColumnSize = Number.MAX_SAFE_INTEGER;
  public cellAlignEnum = CellAlign;
  public defaultColumnDef: Partial<ComponentColumnDef<any>> = {
    header: () => this.tableCellHeaderDefaultTemplate(),
    cell: () => this.tableCellDefaultTemplate(),
    minSize: 48,
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
  public filterMode = computed(() => {
    return this.columnDefs().some((c) => c.enableColumnFilter) ? 'column' : 'dialog';
  });
  public configurableColumns = computed(() => {
    return this.table
      .getAllLeafColumns()
      .filter((c) => c.columnDef.enableHiding !== false || (c.columnDef as ComponentColumnDef<unknown>).enableOrdering !== false);
  });
  public selectedRowKeys = computed(() => {
    return Object.entries(this.table.getState().rowSelection).map(([k, v]) => k);
  });

  public table: Table<unknown> = createAngularTable(() => ({
    data: this.recordset(),
    defaultColumn: this.defaultColumnDef,
    columns: this.columnDefs(),
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    getRowId: (row) => row[this.recordKey()],
    enableMultiRowSelection: this.canMultiSelect(),
    onColumnFiltersChange: (value) => {
      this.stateChangeRenderHandler(() => {
        this.resetTableState();
        this.state()?.skip.set(0);
        if (typeof value === 'function') {
          this.state()?.columns?.filters.update(value);
        } else {
          this.state()?.columns?.filters.set(value);
        }
      });
    },
    onSortingChange: (value) => {
      if (this.isBusy() || this.isEditing()) {
        return;
      }

      this.stateChangeRenderHandler(() => {
        this.resetTableState();
        this.state()?.skip.set(0);
        if (typeof value === 'function') {
          this.state()?.sorting.update(value);
        } else {
          this.state()?.sorting.set(value);
        }
      });
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

  public onColumnSize(event: MouseEvent, header: Header<any, unknown>, element: HTMLElement) {
    if (event.button === 0 && header.id) {
      const columnSizing = this.table.getState().columnSizing;
      if (!columnSizing[header.id]) {
        columnSizing[header.id] = element.clientWidth;
      }
      header.getResizeHandler()(event);
    }
  }

  public onColumnSizeReset() {
    this.table.setColumnSizing({});
  }

  public onColumnSort(event: MouseEvent, header: Header<any, unknown>) {
    if (
      !header.column.getIsResizing() &&
      event.button === 0 &&
      header.column.columnDef.enableSorting !== false &&
      this.tableSortRefs()
        .map((ref) => ref.nativeElement)
        .includes(event.target as HTMLElement)
    ) {
      header.column.toggleSorting();
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
    if (this.table.getIsAllPageRowsSelected()) {
      this.table.toggleAllPageRowsSelected(false);
    } else {
      this.table.toggleAllPageRowsSelected(true);
    }
  }

  public onRowClick(data: { event: Event; row: any }) {
    if (!this.isEditing() && this.canRowClick()) {
      this.rowClicked.emit(data);
    }
  }

  public onRowSelect(context: CellContext<unknown, unknown>) {
    context.row.toggleSelected();
  }

  public onPaginatorChange(event: CustomEvent<IPaginatorChangeEventData>) {
    const changeHandler = () => {
      this.resetTableState();
      if (event.detail.type === 'page-size') {
        this.state()?.take.set(event.detail.pageSize);
        this.state()?.skip.set(0);
      } else {
        this.state()?.skip.set(event.detail.offset);
      }
    };
    if (this.beforeRender()) {
      const sub = new Subject<boolean>();
      sub.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (result) => {
          if (result) {
            changeHandler();
          } else {
            if (event.detail.type === 'page-size') {
              this.paginatorRef().pageSize = this.state()?.take();
            } else {
              this.paginatorRef().pageIndex = this.state().skip() / this.state().take();
            }
          }
        }
      });
      this.beforeRender()(sub);
    } else {
      changeHandler();
    }
  }

  public onEdit(isEditing: boolean) {
    this.isEditing.set(isEditing);
  }

  public onSubmit() {
    this.editSubmit.emit();
  }

  public onClearFilters() {
    this.table.setColumnFilters([]);
    this.tableCellFilters().forEach((c) => c.formControl.setValue(null, { emitEvent: false }));
  }

  public onFilter() {
    this.isFiltering.set(!this.isFiltering());
    this.filterShow.emit();
  }

  public onStopEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private stateChangeRenderHandler = (callback: () => void) => {
    if (this.beforeRender()) {
      const sub = new Subject<boolean>();
      sub.subscribe({
        next: (result) => {
          if (result) {
            callback();
          }
        }
      });
      this.beforeRender()(sub);
    } else {
      callback();
    }
  };

  private resetTableState() {
    this.bodyRef().nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    this.table.setExpanded({});
  }
}

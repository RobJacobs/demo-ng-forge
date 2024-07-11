import { Component, NgZone, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { isArray } from '@tylertech/forge-core';
import { CellAlign, IColumnConfiguration, TableComponent, TextFieldComponentDelegate } from '@tylertech/forge';
import {
  ForgeBadgeModule,
  ForgeButtonModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeOptionModule,
  ForgePaginatorModule,
  ForgeSelectDropdownModule,
  ForgeSkeletonModule,
  ForgeTableModule,
  ForgeToolbarModule
} from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { TableUtils } from 'src/app/shared/table/utils';
import { AppDataService } from 'src/app/app-data.service';
import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { BaseTableComponent } from 'src/app/shared/table/base-table.component';
import { RouterlinkButtonComponent } from 'src/app/shared/components/routerlink-button/routerlink-button.component';
import { FilterChipsComponent } from 'src/app/shared/components/filter-chips/filter-chips.component';
import { TableDetailComponent } from 'src/app/shared/components/table-detail/table-detail.component';
import { PeopleCacheService } from '../people-cache.service';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-people-home',
  standalone: true,
  imports: [
    CommonModule,
    ForgeBadgeModule,
    ForgeButtonModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeOptionModule,
    ForgePaginatorModule,
    ForgeSelectDropdownModule,
    ForgeSkeletonModule,
    ForgeTableModule,
    ForgeToolbarModule,
    RouterlinkButtonComponent,
    FilterChipsComponent,
    FilterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseTableComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private appDataService = inject(AppDataService);
  public cache = inject(PeopleCacheService);
  private viewContainerRef = inject(ViewContainerRef);
  private ngZone = inject(NgZone);

  @ViewChild('peopleTable', { static: true })
  private peopleTable?: TableComponent;
  @ViewChild(FilterComponent)
  private peopleFilter?: FilterComponent;

  public isBusy = false;
  public recordset: Array<IPerson> = [];
  public filterCache = this.cache.homeView.filter;
  public viewCache = this.cache.homeView;
  public optionalTableColumns = [
    { property: 'image', header: 'Image', hidden: false },
    { property: 'firstName', header: 'First', hidden: false },
    { property: 'lastName', header: 'Last', hidden: false },
    { property: 'gender', header: 'Gender', hidden: false },
    { property: 'occupation', header: 'Occupation', hidden: false }
  ];
  public tableColumns: IColumnConfiguration[] = [
    {
      property: 'image',
      width: 48,
      align: CellAlign.Center,
      template: (rowIndex: number, cellElement: HTMLElement, data: any) => {
        const imgElement = document.createElement('img') as HTMLImageElement;
        imgElement.src = `mock-data/${Utils.formatNumber(data.id, '2.0-0')}-small.png`;
        imgElement.setAttribute('alt', '');
        imgElement.classList.add('forge-table-cell__image');
        return imgElement;
      }
    },
    {
      header: 'Id',
      property: 'id',
      sortable: true,
      filter: true,
      filterDelegate: new TextFieldComponentDelegate()
    },
    {
      header: 'First',
      property: 'firstName',
      sortable: true,
      filter: true,
      filterDelegate: new TextFieldComponentDelegate()
    },
    {
      header: 'Last',
      property: 'lastName',
      sortable: true,
      filter: true,
      filterDelegate: new TextFieldComponentDelegate()
    },
    {
      header: 'Gender',
      property: 'gender',
      sortable: true,
      filter: true,
      filterDelegate: new TextFieldComponentDelegate()
    },
    {
      header: 'Occupation',
      property: 'occupation',
      sortable: true,
      filter: true,
      filterDelegate: new TextFieldComponentDelegate()
    },
    {
      align: CellAlign.Right,
      template: (rowIndex: number, cellElement: HTMLElement, data: any) => {
        this.ngZone.run(() => {
          cellElement.appendChild(TableUtils.createExpanderRow(rowIndex, this.peopleTable as TableComponent, this.viewContainerRef, TableDetailComponent, 'Toggle table detail', data));

          cellElement.appendChild(
            TableUtils.createMenuButton(
              'more_vert',
              (event: Event) => {
                console.log(event);
              },
              [
                { value: 1, label: 'Option 1' },
                { value: 2, label: 'Option 2' },
                { value: 3, label: 'Option 3' }
              ],
              'More options'
            )
          );

          cellElement.appendChild(
            TableUtils.createIconButton(
              'keyboard_arrow_right',
              (event: Event) => {
                this.ngZone.run(() => {
                  this.router.navigate([`people/detail/${data.id}`]);
                });
              },
              'View person details'
            )
          );

          // const componentRef = this.viewContainerRef.createComponent(RouterlinkButtonComponent);
          // componentRef.instance.route = '/profile';
          // componentRef.instance.queryParams = { id: data.id };
          // componentRef.instance.icon = 'person';
          // componentRef.instance.tooltip = 'Show profile';
          // const linkButtonNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
          // cellElement.appendChild(linkButtonNode);
        });

        return '';
      }
    }
  ];
  public selectedPeople: IPerson[] = [];
  public get selectedTableColumns() {
    return this.optionalTableColumns.filter((c) => !c.hidden).map((c) => c.property);
  }

  constructor() {
    super();

    const storageColumns = localStorage.getItem(this.cache.homeView.storageKey);
    if (storageColumns?.length) {
      const columns = JSON.parse(storageColumns) as { property: string; hidden: boolean }[];
      if (isArray(columns)) {
        this.optionalTableColumns.forEach((c) => {
          const storedColumn = columns.find((sc) => sc.property === c.property);
          if (storedColumn) {
            c.hidden = storedColumn.hidden;
          }
        });
        this.setTableColumnsVisibilty();
      }
    }
  }

  public ngOnInit() {
    this.initializeSort();
    if (this.viewCache.showFilter) {
      this.initializeFilter();
    }
    this.getRecords();
  }

  public ngOnDestroy() {
    this.destroy();
  }

  public onPeopleSelected(clearSelection = false) {
    if (clearSelection) {
      this.selectedPeople.length = 0;
      this.peopleTable?.clearSelections();
    } else {
      this.selectedPeople = this.peopleTable?.getSelectedRows() as IPerson[];
    }
  }

  public onTableOptionSelected(columns: string[]) {
    this.optionalTableColumns = this.optionalTableColumns.map((c) => {
      if (columns.includes(c.property as string)) {
        c.hidden = false;
      } else {
        c.hidden = true;
      }
      return c;
    });
    this.setTableColumnsVisibilty();
    localStorage.setItem(this.cache.homeView.storageKey, JSON.stringify(this.optionalTableColumns.map((c) => ({ property: c.property, hidden: c.hidden }))));
  }

  public onTableShowFilter() {
    this.viewCache.showFilter = !this.viewCache.showFilter;
    if (this.viewCache.showFilter) {
      this.initializeFilter();
    }
  }

  public onApplyFilter(reloadFilter: boolean) {
    this.getRecords();
    if (reloadFilter) {
      (this.peopleFilter as FilterComponent).loadForm(this.filterCache.filters);
    }
  }

  protected getRecords() {
    this.onPeopleSelected(true);
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

  private setTableColumnsVisibilty() {
    this.tableColumns.forEach((tc) => {
      const optionalTableColumn = this.optionalTableColumns.find((otc) => otc.property === tc.property);
      if (optionalTableColumn && tc.hidden !== optionalTableColumn.hidden) {
        tc.hidden = optionalTableColumn.hidden;
        const colIndex = this.getColumnIndex(tc.property as string);
        if (tc.hidden) {
          this.peopleTable?.hideColumn(colIndex);
        } else {
          this.peopleTable?.showColumn(colIndex);
        }
      }
    });
  }
}

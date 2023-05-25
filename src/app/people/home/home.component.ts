import { Component, ElementRef, EmbeddedViewRef, NgZone, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { isArray } from '@tylertech/forge-core';
import { CellAlign, TableComponent, TextFieldComponentDelegate } from '@tylertech/forge';
import { TableUtils } from 'src/app/shared/table/utils';
import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { BaseTableComponent } from 'src/app/shared/table/base-table.component';
import { PeopleCacheService } from '../people-cache.service';
import { FilterComponent } from './filter/filter.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { finalize } from 'rxjs';
import { RouterlinkButtonComponent } from 'src/app/shared/components/routerlink-button/routerlink-button.component';

@Component({
  selector: 'app-people-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseTableComponent implements OnInit, OnDestroy {
  @ViewChild('peopleTable', { static: true })
  private peopleTable?: TableComponent;
  @ViewChild(FilterComponent)
  private peopleFilter?: FilterComponent;

  public isBusy = false;
  public recordset: Array<IPerson> = [];
  public filterCache = this.moduleCache.homeView.filter;
  public viewCache = this.moduleCache.homeView;
  public optionalTableColumns = [
    { property: 'image', header: 'Image', hidden: false },
    { property: 'firstName', header: 'First', hidden: false },
    { property: 'lastName', header: 'Last', hidden: false },
    { property: 'gender', header: 'Gender', hidden: false },
    { property: 'occupation', header: 'Occupation', hidden: false }
  ];
  public selectedPeople: IPerson[] = [];
  public get selectedTableColumns() {
    return this.optionalTableColumns.filter(c => !c.hidden).map(c => c.property);
  }

  constructor(
    private router: Router,
    private appDataService: AppDataService,
    public moduleCache: PeopleCacheService,
    private viewContainerRef: ViewContainerRef,
    private ngZone: NgZone
  ) {
    super();

    let storageColumns = localStorage.getItem(this.moduleCache.homeView.storageKey);
    if (storageColumns?.length) {
      const columns = JSON.parse(storageColumns) as { property: string; hidden: boolean; }[];
      if (isArray(columns)) {
        this.optionalTableColumns.forEach(c => {
          const storedColumn = columns.find((sc) => sc.property === c.property);
          if (storedColumn) {
            c.hidden = storedColumn.hidden;
          }
        });
      }
    }

    this.tableColumns = [
      {
        property: 'image',
        width: 48,
        align: CellAlign.Center,
        hidden: this.optionalTableColumns.find((c) => c.property === 'image')?.hidden,
        template: (rowIndex: number, cellElement: HTMLElement, data: any) => {
          const imgElement = document.createElement('img') as HTMLImageElement;
          imgElement.src = `mock-data/${Utils.formatNumber(data.id, '2.0-0')}-small.png`;
          imgElement.classList.add('forge-table-cell__image');
          return imgElement;
        }
      },
      { header: 'Id', property: 'id', sortable: true, filter: true, filterDelegate: new TextFieldComponentDelegate() },
      {
        header: 'First',
        property: 'firstName',
        sortable: true,
        filter: true,
        filterDelegate: new TextFieldComponentDelegate(),
        hidden: this.optionalTableColumns.find((c) => c.property === 'firstName')?.hidden
      },
      {
        header: 'Last',
        property: 'lastName',
        sortable: true,
        filter: true,
        filterDelegate: new TextFieldComponentDelegate(),
        hidden: this.optionalTableColumns.find((c) => c.property === 'lastName')?.hidden
      },
      {
        header: 'Gender',
        property: 'gender',
        sortable: true,
        filter: true,
        filterDelegate: new TextFieldComponentDelegate(),
        hidden: this.optionalTableColumns.find((c) => c.property === 'gender')?.hidden
      },
      {
        header: 'Occupation',
        property: 'occupation',
        sortable: true,
        filter: true,
        filterDelegate: new TextFieldComponentDelegate(),
        hidden: this.optionalTableColumns.find((c) => c.property === 'occupation')?.hidden
      },
      {
        align: CellAlign.Right,
        template: (rowIndex: number, cellElement: HTMLElement, data: any) => {
          cellElement.appendChild(
            TableUtils.createExpanderRow(
              rowIndex,
              this.peopleTable,
              this.viewContainerRef,
              TableDetailComponent,
              'Toggle table detail',
              data
            )
          );

          // cellElement.appendChild(TableUtils.createLinkButton(
          //   'View more',
          //   (event: Event) => {
          //     console.log(event);
          //   }
          // ));

          cellElement.appendChild(TableUtils.createMenuButton(
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
          ));

          cellElement.appendChild(TableUtils.createIconButton(
            'keyboard_arrow_right',
            (event: Event) => {
              this.ngZone.run(() => {
                this.router.navigate([`people/detail/${data.id}`]);
              });
            },
            'View person details'
          ));

          // const componentRef = this.viewContainerRef.createComponent(RouterlinkButtonComponent);
          // componentRef.instance.route = '/profile';
          // componentRef.instance.queryParams = { id: data.id };
          // componentRef.instance.icon = 'person';
          // componentRef.instance.tooltip = 'Show profile';
          // const linkButtonNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
          // cellElement.appendChild(linkButtonNode);

          return '';
        }
      }
    ];
  }

  public ngOnInit() {
    this.initializeSort();
    this.getRecords();
  }

  public ngOnDestroy() {
    this.destroy();
  }

  public onPeopleSelected(clearSelection = false): void {
    if (clearSelection) {
      this.selectedPeople.length = 0;
      this.peopleTable?.clearSelections();
    } else {
      this.selectedPeople = this.peopleTable?.getSelectedRows();
    }
  }

  public onTableOptionSelected(columns: string[]) {
    this.tableColumns = this.tableColumns.map(c => {
      if (columns.includes(c.property as string)) {
        c.hidden = false;
      } else {
        c.hidden = true;
      }
      return c;
    });
    this.optionalTableColumns = this.optionalTableColumns.map(c => {
      if (columns.includes(c.property as string)) {
        c.hidden = false;
      } else {
        c.hidden = true;
      }
      return c;
    });
    localStorage.setItem(
      this.moduleCache.homeView.storageKey,
      JSON.stringify(this.optionalTableColumns.map((c) => ({ property: c.property, hidden: c.hidden })))
    );
  }

  public onApplyFilter(reloadFilter: boolean) {
    this.getRecords();
    if (reloadFilter) {
      (this.peopleFilter as FilterComponent).loadForm(this.filterCache.filters);
    }
  }

  protected getRecords(): void {
    this.onPeopleSelected(true);
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

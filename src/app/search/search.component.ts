import { Component, OnInit, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { isDefined } from '@tylertech/forge-core';
import { AutocompleteFilterCallback, IOption } from '@tylertech/forge';
import {
  PopoverDirective,
  DialogService,
  ToastService,
  ForgeToolbarModule,
  ForgeDividerModule,
  ForgeButtonModule,
  ForgeIconModule,
  ForgeListModule,
  ForgeListItemModule,
  ForgeIconButtonModule,
  ForgeAutocompleteModule,
  ForgeTextFieldModule,
  ForgeDatePickerModule,
  ForgePopoverModule,
  ForgeCheckboxProxyModule
} from '@tylertech/forge-angular';
import { Observable, lastValueFrom, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppDataService } from 'src/app/app-data.service';
import { ISearch } from 'src/app/shared/interfaces/search.interface';
import { AutocompleteRangeComponent } from 'src/app/shared/components/autocomplete-range/autocomplete-range.component';
import { CheckboxThreeStateDirective } from 'src/app/shared/directives/checkbox-three-state/checkbox-three-state.directive';
import { SearchSaveComponent } from './save/search-save.component';

@Component({
  selector: 'app-search',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeAutocompleteModule,
    ForgeButtonModule,
    ForgeCheckboxProxyModule,
    ForgeDatePickerModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgePopoverModule,
    ForgeTextFieldModule,
    ForgeToolbarModule,
    AutocompleteRangeComponent,
    CheckboxThreeStateDirective
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private dialogService = inject(DialogService);
  private toastService = inject(ToastService);
  private dataService = inject(AppDataService);

  private readonly searchesPopover = viewChild<PopoverDirective>('searchesPopover');
  private storageKey = 'search-searches';
  private operatorPopover?: PopoverDirective;

  public searchName?: string;
  public searchDescription?: string;
  // TODO consider moving to a cache service
  public searchCache: { activeSearchId?: number; searches: ISearch[] } = {
    activeSearchId: undefined,
    searches: []
  };
  // TODO consider moving to a cache service
  public formGroup = new FormGroup({
    name: new FormGroup({
      value: new FormControl(),
      operator: new FormControl()
    }),
    dateOfBirth: new FormGroup({
      value: new FormControl(),
      operator: new FormControl()
    }),
    address: new FormGroup({
      value: new FormControl(),
      operator: new FormControl()
    }),
    include: new FormControl(),
    facet: new FormControl()
  });
  public facetOptions: { label: string; value: number }[] = [];
  public operatorOptions = [
    { value: null, label: 'None' },
    { value: 0, label: 'Equal' },
    { value: 1, label: 'Not equal' },
    { value: 2, label: 'Greater than' },
    { value: 3, label: 'Less than' },
    { value: 4, label: 'Greater than equal to' },
    { value: 5, label: 'Less than equal to' },
    { value: 6, label: 'Range' },
    { value: 7, label: 'Contains' },
    { value: 8, label: 'Not contains' },
    { value: 9, label: 'Empty' }
  ];
  public operatorPopoverFormGroup?: FormGroup;
  public nameFilter: AutocompleteFilterCallback = (filter: string) =>
    lastValueFrom(
      this.dataService
        .getPeople()
        .pipe(
          map((r) =>
            r.data
              .filter((p) => p.firstName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || p.lastName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
              .map((p) => ({ label: `${p.firstName} ${p.lastName}`, value: p.id }))
          )
        )
    );
  public facetFilter = (filter: string): Observable<IOption[]> => {
    return of(this.facetOptions);
  };

  public ngOnInit() {
    this.dataService.getSearches(this.storageKey).subscribe((result) => {
      this.searchCache.searches = result || [];

      const activeSearch = this.searchCache.searches.find((s) => s.id === this.searchCache.activeSearchId);
      if (isDefined(activeSearch)) {
        this.searchName = activeSearch?.name;
        this.searchDescription = activeSearch?.description;
        this.formGroup.patchValue(activeSearch?.filters);
      }
    });
    for (let index = 0; index < 20; index++) {
      this.facetOptions.push({ value: index, label: `Facet Option ${index}` });
    }
  }

  public onSearch() {
    // TODO implement search action
  }

  public onSaveSearch(search?: { id: number; name: string; description: string; isDefault: boolean; isPublic: boolean; filters: { property: string; value: string }[] }) {
    const activeSearch = isDefined(search) ? search : this.searchCache.searches.find((s) => s.id === this.searchCache.activeSearchId);
    const record = {
      id: activeSearch?.id,
      name: activeSearch?.name,
      description: activeSearch?.description,
      isDefault: activeSearch?.isDefault,
      isPublic: activeSearch?.isPublic,
      filters: this.formGroup.value
    };

    this.dialogService.open(SearchSaveComponent, { data: record, options: { persistent: true } }).afterClosed.subscribe((result) => {
      if (result) {
        if (isDefined(result.id)) {
          const searchIndex = this.searchCache.searches.findIndex((s) => s.id === result.id);
          if (searchIndex !== -1) {
            this.searchCache.searches[searchIndex] = result;
          }
        } else {
          result.id = this.searchCache.searches.length ? Math.max(...this.searchCache.searches.map((s) => s.id)) + 1 : 1;
          this.searchCache.searches.push(result);
        }

        this.dataService.saveSearches(this.storageKey, this.searchCache.searches).subscribe({
          next: () => {
            this.searchCache.activeSearchId = result.id;
            this.searchName = result.name;
            this.searchDescription = result.description;
            this.toastService.show({ message: 'Search saved' });
          },
          error: () => this.toastService.show({ message: 'Search save failed' })
        });
      }
    });
  }

  public onClearSearch() {
    this.formGroup.controls.include.setValue(null);
    this.formGroup.reset();
  }

  public onSearchAction(event: CustomEvent, action: string, id: number) {
    event.stopPropagation();
    this.searchesPopover()?.close();

    if (!isDefined(id)) {
      this.searchCache.activeSearchId = undefined;
      this.searchName = '';
      this.searchDescription = '';
      this.formGroup.reset();
    } else {
      const search = this.searchCache.searches.find((s) => s.id === id);
      if (isDefined(search)) {
        switch (action) {
          case 'search':
            this.searchCache.activeSearchId = search?.id;
            this.searchName = search?.name;
            this.searchDescription = search?.description;
            this.formGroup.patchValue(search?.filters);
            this.onSearch();
            break;
          case 'edit':
            this.searchCache.activeSearchId = search?.id;
            this.searchName = search?.name;
            this.searchDescription = search?.description;
            this.formGroup.patchValue(search?.filters);
            break;
          case 'copy': {
            const copySearch = JSON.parse(JSON.stringify(search));
            copySearch.id = undefined;
            copySearch.name = `${copySearch.name} copy`;
            copySearch.isDefault = false;
            this.onSaveSearch(copySearch);
            break;
          }
          case 'delete': {
            const searchIndex = this.searchCache.searches.findIndex((s) => s.id === search?.id);
            if (searchIndex !== -1) {
              this.searchCache.searches.splice(searchIndex, 1);
              this.dataService.saveSearches(this.storageKey, this.searchCache.searches).subscribe((result) => {});
            }

            if (this.searchCache.activeSearchId === search?.id) {
              this.searchCache.activeSearchId = undefined;
              this.searchName = '';
              this.searchDescription = '';
            }
            break;
          }
        }
      }
    }
  }

  public onOperatorPopoverOpen(event: Event, popover: PopoverDirective, name: string) {
    event.stopPropagation();
    this.operatorPopoverFormGroup = this.formGroup.get(name) as FormGroup;
    this.operatorPopover = popover;
    this.operatorPopover.open();
  }

  public onOperatorSelected(value: string | number) {
    value = parseInt(value as string, 10);
    this.operatorPopoverFormGroup?.get('operator')?.setValue(value);
    this.operatorPopover?.close();
  }
}

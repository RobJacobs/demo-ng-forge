import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IOption } from '@tylertech/forge';
import { ForgeButtonModule, ForgeDividerModule, ForgeDrawerModule, ForgeIconButtonModule, ForgeIconModule, ForgeSelectModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { AppCacheService } from 'src/app/app-cache.service';
import { AutocompleteRangeComponent } from 'src/app/shared/components/autocomplete-range/autocomplete-range.component';
import { PeopleCacheService } from '../../people-cache.service';

@Component({
    selector: 'app-people-home-filter',
    imports: [ReactiveFormsModule, ForgeButtonModule, ForgeDividerModule, ForgeDrawerModule, ForgeIconButtonModule, ForgeIconModule, ForgeSelectModule, ForgeTextFieldModule, AutocompleteRangeComponent],
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public appCache = inject(AppCacheService);
  public cache = inject(PeopleCacheService);

  @Output()
  public filter = new EventEmitter();

  public viewCache = this.cache.homeView;
  public formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    occupation: new FormControl(),
    facet: new FormControl()
  });
  public genderOptions: IOption[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Undecided', value: 'undecided' }
  ];

  public facetFilter = (filter: string): Observable<IOption[]> => {
    const options = [];
    for (let index = 0; index < 20; index++) {
      options.push({ value: index, label: `Facet Option ${index}` });
    }
    return of(options);
  };

  public ngOnInit() {
    this.loadForm(this.cache.homeView.filter.filters);
  }

  public onClearFilter() {
    this.formGroup.reset();
    this.cache.homeView.filter.filters = [];
  }

  public onApplyFilter() {
    this.cache.homeView.filter.filters = Object.entries(Utils.objectReduce(this.formGroup.value)).map((e) => ({ property: e[0], value: e[1], label: this.propertyLabel(e[0]) })) || [];
    this.filter.emit();
  }

  public loadForm(filters: any[]) {
    this.formGroup.reset();
    filters.forEach((f) => {
      const formControl = this.formGroup.get(f.property);
      if (formControl) {
        formControl.setValue(f.value);
      }
    });
  }

  private propertyLabel(property: string): string {
    switch (property) {
      case 'firstName':
        return 'First name';
      case 'lastName':
        return 'Last name';
      case 'gender':
        return 'Gender';
      case 'occupation':
        return 'Occupation';
      case 'facet':
        return 'Facet';
      default:
        return '';
    }
  }
}

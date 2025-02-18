import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutocompleteFilterCallback, AutocompleteOptionBuilder, AutocompleteSelectedTextBuilder, IOption } from '@tylertech/forge';
import { ForgeAutocompleteModule, ForgeButtonModule, ForgeDividerModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { ExamplesService, IRecord } from '../examples.service';

@Component({
    selector: 'app-examples-autocomplete',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ForgeAutocompleteModule, ForgeButtonModule, ForgeDividerModule, ForgeIconModule, ForgeTextFieldModule],
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  public moduleService = inject(ExamplesService);

  public formGroup = new FormGroup({
    autocomplete01: new FormControl(1),
    autocomplete02: new FormControl({ value: { id: 2, code: '002', description: 'Item 002' }, label: 'Item 002' }),
    autocomplete03: new FormControl([3, 4, 5]),
    autocomplete04: new FormControl(),
    autocomplete05: new FormControl()
  });
  public autocomplete06 = 6;
  public autocomplete07 = 7;

  public optionBuilder: AutocompleteOptionBuilder = (option: IOption, filterText: string, parentElement: HTMLElement) => {
    const defaultSpan = document.createElement('span');
    defaultSpan.innerText = option.value.description;
    parentElement.appendChild(defaultSpan);

    const subTitleSpan = document.createElement('span');
    subTitleSpan.setAttribute('slot', 'secondary-text');
    subTitleSpan.innerText = option.value.code;
    parentElement.appendChild(subTitleSpan);

    return undefined as unknown as HTMLElement;
  };

  public selectedTextBuilder: AutocompleteSelectedTextBuilder = (options: IOption[]): string => {
    return options[0] ? `${options[0].value} - ${options[0]?.label}` : '';
  };

  public singleSelectPrimitiveFilter: AutocompleteFilterCallback = (filterText: string, value: string) => {
    if (value) {
      return lastValueFrom(this.moduleService.getSingleSelectOptions(undefined, value).pipe(map((result) => result.map((d) => ({ value: d.id, label: d.description })))));
    } else {
      return lastValueFrom(this.moduleService.getSingleSelectOptions(filterText).pipe(map((result) => result.map((d) => ({ value: d.id, label: d.description })))));
    }
  };

  public singleSelectObjectFilter: AutocompleteFilterCallback = (filterText: string, value: IOption) => {
    if (value) {
      return [{ label: value.label, value }];
    } else {
      return lastValueFrom(this.moduleService.getSingleSelectOptions(filterText).pipe(map((result) => result.map((d) => ({ label: d.description, value: d })))));
    }
  };

  public multipleSelectFilter: AutocompleteFilterCallback = (filterText: string, value: string) => {
    if (value) {
      return [];
    } else {
      return lastValueFrom(this.moduleService.getMutlipleSelectOptions(filterText, this.formGroup.value.autocomplete03).pipe(map((result) => result.map((d: IRecord) => ({ value: d.id, label: d.description })) as IOption[])));
    }
  };

  public onAutocompleteChange(event: CustomEvent) {
    this.autocomplete07 = event.detail;
  }

  public onDisable() {
    const control = this.formGroup.controls.autocomplete01;
    if (control?.disabled) {
      control?.enable();
    } else {
      control?.disable();
    }
  }
}

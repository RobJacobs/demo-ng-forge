import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IOption, SelectOptionBuilder, SelectSelectedTextBuilder } from '@tylertech/forge';
import { ForgeDividerModule, ForgeOptionModule, ForgeSelectModule } from '@tylertech/forge-angular';

import { ExamplesService } from '../examples.service';

@Component({
  selector: 'app-examples-select',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ForgeDividerModule, ForgeOptionModule, ForgeSelectModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  public moduleService = inject(ExamplesService);

  public options = this.moduleService.mockData.slice(0, 20).map((d) => ({ value: d.id, label: d.description }));
  public objectOptions = this.moduleService.mockData.slice(0, 20).map((d) => ({ value: d, label: d.description }));
  public formGroup = new FormGroup({
    select01: new FormControl(1),
    select02: new FormControl(this.objectOptions[2].value),
    select03: new FormControl([3, 4, 5]),
    select04: new FormControl(),
    select05: new FormControl()
  });
  public select06 = 6;
  public select07 = 7;

  public optionBuilder: SelectOptionBuilder = (option: IOption, parentElement: HTMLElement) => {
    const defaultSpan = document.createElement('span');
    defaultSpan.innerText = option.value.description;
    parentElement.appendChild(defaultSpan);

    const subTitleSpan = document.createElement('span');
    subTitleSpan.setAttribute('slot', 'secondary-text');
    subTitleSpan.innerText = option.value.code;
    parentElement.appendChild(subTitleSpan);

    return undefined as unknown as HTMLElement;
  };

  public selectedTextBuilder: SelectSelectedTextBuilder = (options: IOption[]): string => {
    return options[0] ? `${options[0].value} - ${options[0]?.label}` : '';
  };

  public onSelectChange(event: CustomEvent) {
    this.select07 = event.detail;
  }
}

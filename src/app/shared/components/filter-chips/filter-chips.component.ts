import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ForgeChipModule, ForgeChipSetModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-filter-chips',
  templateUrl: './filter-chips.component.html',
  styleUrls: ['./filter-chips.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ForgeChipModule,
    ForgeChipSetModule
  ],
})
export class FilterChipsComponent {
  @Input()
  public filters: { property: string; value: string; label: string }[] = [];

  @Output()
  public filter = new EventEmitter();

  public onFilterDelete(event: CustomEvent) {
    const filterIndex = this.filters.findIndex((f) => f.property === event.detail.value);
    if (filterIndex !== -1) {
      this.filters.splice(filterIndex, 1);
      this.filter.emit();
    }
  }
}

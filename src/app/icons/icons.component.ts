import { Component, inject, ChangeDetectionStrategy, viewChild, computed, AfterViewInit, ElementRef, OnDestroy, signal } from '@angular/core';
import { CdkVirtualForOf, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll } from '@angular/cdk/scrolling';
import { AutocompleteFilterCallback, IOption } from '@tylertech/forge';
import { ForgeAutocompleteModule, ForgeIconModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { IconsCacheService } from './icons-cache.service';

@Component({
  selector: 'app-icons',
  imports: [
    ForgeAutocompleteModule,
    ForgeIconModule,
    ForgeTextFieldModule,
    ForgeToolbarModule,
    CdkVirtualScrollViewport,
    CdkVirtualForOf,
    CdkFixedSizeVirtualScroll
  ],
  providers: [IconsCacheService],
  templateUrl: './icons.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  public itemSize = signal(8);
  public cache = inject(IconsCacheService);
  public selectedIcon?: string;

  public iconOptionFilter: AutocompleteFilterCallback = (filter: string, value: string) => {
    if (value) {
      return [this.cache.iconOptions?.find((o) => o.value === value)] as IOption[];
    } else {
      if (filter.length) {
        return this.cache.iconOptions?.filter((o) => o.label.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).slice(0, 100) as IOption[];
      } else {
        return this.cache.iconOptions?.slice(0, 100) as IOption[];
      }
    }
  };

  public onIconSelected(value: string) {
    this.selectedIcon = this.cache.iconOptions?.find((o) => o.value === value)?.value;
  }
}

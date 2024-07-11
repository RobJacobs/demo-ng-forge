import { Component, inject } from '@angular/core';
import { AutocompleteFilterCallback, IOption } from '@tylertech/forge';
import { IconsCacheService } from './icons-cache.service';
import { ForgeAutocompleteModule, ForgeIconModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule, ForgeAutocompleteModule, ForgeIconModule, ForgeTextFieldModule, ForgeToolbarModule],
  providers: [IconsCacheService],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
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

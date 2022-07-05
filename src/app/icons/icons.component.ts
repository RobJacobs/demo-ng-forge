import { Component } from '@angular/core';
import { AutocompleteFilterCallback, IOption } from '@tylertech/forge';
import { IconsCacheService } from './icons-cache.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  public selectedIcon?: IOption;

  public iconOptionFilter: AutocompleteFilterCallback = (filter: string, value: string) => {
    if (value) {
      return [this.moduleCache.iconOptions?.find(o => o.value === value)] as IOption[];
    } else {
      if (filter.length) {
        return this.moduleCache.iconOptions?.filter(o => o.label.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).slice(0, 100) as IOption[];
      } else {
        return this.moduleCache.iconOptions?.slice(0, 100) as IOption[];
      }
    }
  };

  constructor(
    public moduleCache: IconsCacheService
  ) { }

  public onIconSelected(value: string) {
    this.selectedIcon = this.moduleCache.iconOptions?.find(o => o.value === value)?.value;
    console.log(this.selectedIcon);
  }

}

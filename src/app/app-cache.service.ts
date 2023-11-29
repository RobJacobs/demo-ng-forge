import { Injectable } from '@angular/core';
import { IMenuOption, IOption } from '@tylertech/forge';
import { IBaseListDropdownOption, IListDropdownOption } from '@tylertech/forge/esm/list-dropdown';
import { Subject } from 'rxjs';

export interface IAppCacheService {
  isBusy: boolean;
  layoutMode: string;
  menu: {
    type: string;
    options: any[]
  }
  activeRoute: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AppCacheService implements IAppCacheService {
  public isBusy = false;
  public storageKey = 'demo-ng-forge--app';
  public theme: 'dark' | 'light' = 'light';
  public layoutMode: 'sm' | 'md' | 'lg' = 'lg';
  public menu = {
    // 'permanent' | 'dismissible' | 'modal' | 'mini' | 'min-hover' = 'dismissible'
    type: 'dismissible' as 'dismissible' | 'mini',
    options: [
      { label: 'Dashboard', value: 'dashboard', icon: 'home' },
      { label: 'Profile', value: 'profile', icon: 'person' },
      { label: 'People', value: 'people', icon: 'list_alt' },
      { label: 'Pets', value: 'pets', icon: 'pets' },
      {
        label: 'Test', icon: 'child_friendly',
        options: [
          { label: 'Parent', value: 'test/parent', icon: 'home', leadingIconType: 'component' },
          { label: 'Child', value: 'test/child', icon: 'person', leadingIconType: 'component' }
        ]
      },
      { label: 'Search', value: 'search', icon: 'search' },
      { label: 'Query Builder', value: 'query-builder', icon: 'category' },
      { label: 'Icons', value: 'icons', icon: 'star' },
      {
        label: 'Examples', icon: 'directions',
        options: [
          { label: 'Autocomplete', value: 'examples/autocomplete' },
          { label: 'Drag Drop', value: 'examples/drag-drop' },
          { label: 'Select', value: 'examples/select' },
          { label: 'Binding', value: 'examples/binding' },
          { label: 'Misc', value: 'examples/misc' }
        ]
      },
      { label: 'Formly', value: 'formly-demo', icon: 'article' },
      { label: 'Table', value: 'table-demo', icon: 'table_rows' },
      { label: 'Storage', value: 'storage', icon: 'storage' },
      { label: 'IMask', value: 'imask', icon: 'masks' },
      { label: 'Charts', value: 'charts', icon: 'bar_chart' }
    ]
  };
  public activeRoute: string[] = [];
  public cancelHttpRequests = new Subject<void>();

  constructor() { }
}

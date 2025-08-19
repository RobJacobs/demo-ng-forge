import { Injectable, signal } from '@angular/core';

export interface IAppCacheService {
  isBusy: ReturnType<typeof signal<boolean>>;
  layoutMode: string;
  menu: {
    open: boolean;
    options: any[];
  };
  activeRoute: { path: string; params: any }[];
}

@Injectable({
  providedIn: 'root'
})
export class AppCacheService implements IAppCacheService {
  public isBusy = signal<boolean>(false);
  public storageKey = 'demo-ng-forge--app';
  public theme: 'dark' | 'light' = 'light';
  public layoutMode: 'sm' | 'md' | 'lg' = 'lg';
  public menu = {
    open: true,
    options: [
      { label: 'Dashboard', value: 'dashboard', icon: 'home' },
      { label: 'Profile', value: 'profile', icon: 'person' },
      { label: 'People', value: 'people', icon: 'list_alt' },
      { label: 'Pets', value: 'pets', icon: 'pets' },
      {
        label: 'Test',
        icon: 'child_friendly',
        options: [
          {
            label: 'Parent',
            value: 'test/parent',
            icon: 'home',
            leadingIconType: 'component'
          },
          {
            label: 'Child',
            value: 'test/child',
            icon: 'person',
            leadingIconType: 'component'
          }
        ]
      },
      { label: 'Search', value: 'search', icon: 'search' },
      { label: 'Query Builder', value: 'query-builder', icon: 'category' },
      { label: 'Icons', value: 'icons', icon: 'star' },
      { label: 'CSS Variables', value: 'css-variables', icon: 'adjust' },
      {
        label: 'Examples',
        icon: 'directions',
        options: [
          { label: 'Autocomplete', value: 'examples/autocomplete' },
          { label: 'Drag Drop', value: 'examples/drag-drop' },
          { label: 'Select', value: 'examples/select' },
          { label: 'Binding', value: 'examples/binding' },
          { label: 'Misc', value: 'examples/misc' },
          { label: 'Dashboard template', value: 'examples/dashboard' }
        ]
      },
      { label: 'Formly', value: 'formly-demo', icon: 'article' },
      { label: 'Table', value: 'table-demo', icon: 'table_rows' },
      { label: 'AG Grid', value: 'ag-grid-demo', icon: 'table_rows' },
      { label: 'Storage', value: 'storage', icon: 'storage' },
      { label: 'IMask', value: 'imask', icon: 'masks' },
      { label: 'Charts', value: 'charts', icon: 'bar_chart' },
      { label: 'Text Edit', value: 'text-edit', icon: 'auto_stories' },
      { label: 'PDF Viewer', value: 'pdf-viewer', icon: 'picture_as_pdf' }
    ]
  };
  public activeRoute: { path: string; params: any }[] = [];
}

import { Routes } from '@angular/router';
import { PETS_SERVICE } from '@demo-ng-forge/pets';
import { AppPetsService } from './app-pets.service';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/routes').then((m) => m.PROFILE_ROUTES)
  },
  {
    path: 'people',
    loadChildren: () => import('./people/routes').then((m) => m.PEOPLE_ROUTES)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/routes').then((m) => m.TEST_ROUTES)
  },
  {
    path: 'pets',
    providers: [{ provide: PETS_SERVICE, useExisting: AppPetsService }],
    loadChildren: () => import('projects/pets/src/lib/pets.config').then((m) => m.PETS_ROUTES)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.component').then((m) => m.SearchComponent)
  },
  {
    path: 'query-builder',
    loadComponent: () => import('./query-builder/query-builder.component').then((m) => m.QueryBuilderComponent)
  },
  {
    path: 'icons',
    loadComponent: () => import('./icons/icons.component').then((m) => m.IconsComponent)
  },
  {
    path: 'examples',
    loadChildren: () => import('./examples/routes').then((m) => m.EXAMPLES_ROUTES)
  },
  {
    path: 'formly-demo',
    loadChildren: () => import('./formly-demo/formly-demo.module').then((m) => m.FormlyDemoModule)
  },
  {
    path: 'table-demo',
    loadComponent: () => import('./table-demo/table-demo.component').then((m) => m.TableDemoComponent)
  },
  {
    path: 'ag-grid-demo',
    loadComponent: () => import('./ag-grid-demo/ag-grid-demo.component').then((m) => m.AgGridDemoComponent)
  },
  {
    path: 'storage',
    loadComponent: () => import('./storage/storage.component').then((m) => m.StorageComponent)
  },
  {
    path: 'imask',
    loadComponent: () => import('./imask/imask.component').then((m) => m.ImaskComponent)
  },
  {
    path: 'charts',
    loadComponent: () => import('./charts/charts.component').then((m) => m.ChartsComponent)
  },
  {
    path: 'text-edit',
    loadComponent: () => import('./text-editor/text-editor.component').then((m) => m.TextEditorComponent)
  },
  {
    path: 'pdf-viewer',
    loadComponent: () => import('./pdf-viewer-demo/pdf-viewer-demo.component').then((m) => m.PdfViewerDemoComponent)
  },
  {
    path: 'css-variables',
    loadComponent: () => import('./css-variables/css-variables.component').then((m) => m.CssVariablesComponent)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

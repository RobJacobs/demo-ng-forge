import { Component, inject, Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  CanDeactivate,
  CanDeactivateFn,
  RouterStateSnapshot,
  Routes
} from '@angular/router';
import { PETS_SERVICE } from '@demo-ng-forge/pets';
import { AppPetsService } from './app-pets.service';
import { AppCacheService } from './app-cache.service';
import { ReCaptchaService } from './re-captcha/re-captcha.service';
import { TableDemoService } from './table-demo/table-demo.service';
import { TanStackTableDemoService } from './tanstack-table-demo/tanstack-table-demo.service';

@Injectable()
export class RootRouteGuard implements CanActivate, CanDeactivate<Component> {
  private appCache = inject(AppCacheService);
  private route = inject(ActivatedRoute);

  canActivate: CanActivateFn = (currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot) => {
    this.appCache.previousRoute = AppCacheService.getResolvedUrl(this.route.snapshot);
    this.appCache.currentRoute = AppCacheService.getResolvedUrl(currentRoute);
    return true;
  };

  canDeactivate: CanDeactivateFn<Component> = (
    component: Component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) => {
    return true;
  };
}

export const routes: Routes = [
  {
    path: '',
    providers: [RootRouteGuard],
    canActivate: [RootRouteGuard],
    canDeactivate: [RootRouteGuard],
    runGuardsAndResolvers: 'always',
    // canActivateChild: [
    //   (currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot) => {
    //     return true;
    //   }
    // ],
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
        // loadComponent: () => {  // https://angular.dev/guide/routing/define-routes#injection-context-lazy-loading
        //   const appCache = inject(AppCacheService);
        //   if (appCache.mode() === 'current') {
        //     return import('./dashboard/dashboard.component').then((m) => m.DashboardComponent);
        //   } else {
        //     return import('./charts/charts.component').then((m) => m.ChartsComponent);
        //   }
        // }
      },
      {
        path: 'profile',
        title: 'Profile',
        loadChildren: () => import('./profile/routes').then((m) => m.PROFILE_ROUTES)
      },
      {
        path: 'people',
        title: 'People',

        loadChildren: () => import('./people/routes').then((m) => m.PEOPLE_ROUTES)
      },
      {
        path: 'test',
        title: 'Test',
        loadChildren: () => import('./test/routes').then((m) => m.TEST_ROUTES)
      },
      {
        path: 'pets',
        title: 'Pets',
        providers: [{ provide: PETS_SERVICE, useExisting: AppPetsService }],
        loadChildren: () => import('projects/pets/src/lib/pets.config').then((m) => m.PETS_ROUTES)
      },
      {
        path: 'search',
        title: 'Search',
        loadComponent: () => import('./search/search.component').then((m) => m.SearchComponent)
      },
      {
        path: 'query-builder',
        title: 'Query Builder',
        loadComponent: () => import('./query-builder/query-builder.component').then((m) => m.QueryBuilderComponent)
      },
      {
        path: 'icons',
        title: 'Icons',
        loadComponent: () => import('./icons/icons.component').then((m) => m.IconsComponent)
      },
      {
        path: 'examples',
        title: 'Examples',
        loadChildren: () => import('./examples/routes').then((m) => m.EXAMPLES_ROUTES)
      },
      {
        path: 'formly-demo',
        title: 'Formly demo',
        loadChildren: () => import('./formly-demo/formly-demo.module').then((m) => m.FormlyDemoModule)
      },
      {
        path: 'table-demo',
        title: 'Table demo',
        loadComponent: () => import('./table-demo/table-demo.component').then((m) => m.TableDemoComponent),
        providers: [TableDemoService]
      },
      {
        path: 'ag-grid-demo',
        title: 'AG Grid demo',
        loadComponent: () => import('./ag-grid-demo/ag-grid-demo.component').then((m) => m.AgGridDemoComponent)
      },
      {
        path: 'tanstack-table-demo',
        title: 'Tanstack Table Demo',
        loadComponent: () => import('./tanstack-table-demo/tanstack-table-demo.component').then((m) => m.TanstackTableDemoComponent),
        providers: [TanStackTableDemoService]
      },
      {
        path: 'storage',
        title: 'Storage',
        loadComponent: () => import('./storage/storage.component').then((m) => m.StorageComponent)
      },
      {
        path: 'imask',
        title: 'IMask',
        loadComponent: () => import('./imask/imask.component').then((m) => m.ImaskComponent)
      },
      {
        path: 'charts',
        title: 'Charts',
        loadComponent: () => import('./charts/charts.component').then((m) => m.ChartsComponent)
      },
      {
        path: 'text-edit',
        title: 'Text edit',
        loadComponent: () => import('./text-editor/text-editor.component').then((m) => m.TextEditorComponent)
      },
      {
        path: 'pdf-viewer',
        title: 'PDF Viewer',
        loadComponent: () => import('./pdf-viewer-demo/pdf-viewer-demo.component').then((m) => m.PdfViewerDemoComponent)
      },
      {
        path: 'css-variables',
        title: 'CSS variables',
        loadComponent: () => import('./css-variables/css-variables.component').then((m) => m.CssVariablesComponent)
      },
      {
        path: 'typography',
        title: 'Typography',
        loadComponent: () => import('./typography/typography.component').then((m) => m.TypographyComponent)
      },
      {
        path: 'dynamic-component',
        title: 'Dynamic component',
        loadComponent: () => import('./dynamic-component/dynamic-component.component').then((m) => m.DynamicComponentComponent)
      },
      {
        path: 're-captcha',
        title: 'Re-Captcha',
        providers: [ReCaptchaService],
        loadComponent: () => import('./re-captcha/re-captcha.component').then((m) => m.ReCaptchaComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

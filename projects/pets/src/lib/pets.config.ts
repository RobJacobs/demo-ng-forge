import { InjectionToken, Signal } from '@angular/core';
import { Routes } from '@angular/router';

export const PETS_SERVICE = new InjectionToken<IPetsService>('PetsService');
export const PETS_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pets-main.component').then((m) => m.PetsMainComponent) }
];

export interface IPetsService {
  appCache: {
    isBusy: Signal<boolean>;
    layoutMode: 'sm' | 'md' | 'lg';
    activeRoute: string[];
    menu: {
      type: 'dismissible' | 'mini';
    };
  };
}

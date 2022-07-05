import { InjectionToken } from "@angular/core";

export const PETS_CONFIG_SERVICE = new InjectionToken<IPetsConfig>('PetsConfigService');

export interface IPetsConfig {
  appCache: {
    isBusy: boolean;
    layoutMode: 'sm' | 'md' | 'lg';
    activeRoute: string[];
    menu: {
      type: 'dismissible' | 'mini';
    };
  };
}
import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';

import { routes } from './app.routes';
import { busyInterceptor } from '@app/shared/interceptors/busy.interceptor';
import { AppCacheService } from './app-cache.service';

const appInitializer = (appCacheService: AppCacheService) => {
  new Promise<void>((resolve) => {
    // TODO any pre-boot work
    resolve();
  });
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXhr(), withInterceptors([busyInterceptor])),
    provideRouter(routes, withComponentInputBinding()),
    provideAppInitializer(() => appInitializer(inject(AppCacheService)))
  ]
};

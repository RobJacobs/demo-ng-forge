import { ApplicationConfig, provideAppInitializer } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { busyInterceptor } from 'src/app/shared/interceptors/busy.interceptor';

export function initializeAppFactory(): () => Promise<void> {
  return () => {
    return new Promise<void>((resolve) => {
      window.setTimeout(() => {
        resolve();
      }, 1000);
    });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([busyInterceptor])),
    provideRouter(routes, withComponentInputBinding()),
    provideAppInitializer(initializeAppFactory())
  ]
};

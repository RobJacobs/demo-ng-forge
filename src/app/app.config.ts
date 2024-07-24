import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { interceptorProviders } from './shared/interceptors/interceptors';

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
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: []
    },
    interceptorProviders
  ]
};

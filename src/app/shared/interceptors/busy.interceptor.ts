import { inject } from '@angular/core';
import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AppCacheService } from 'src/app/app-cache.service';

export const SHOW_BUSY_INDICATOR = new HttpContextToken<boolean>(() => false);

export const busyInterceptor: HttpInterceptorFn = (request, next) => {
  const isBusy = inject(AppCacheService).isBusy;
  let requestCount = 0;

  if (request.context.get(SHOW_BUSY_INDICATOR)) {
    requestCount++;
    if (requestCount) {
      isBusy.set(true);
    }
    return next(request).pipe(
      finalize(() => {
        requestCount--;
        if (requestCount <= 0) {
          isBusy.set(false);
        }
      })
    );
  } else {
    return next(request);
  }
};

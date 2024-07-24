import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpContextToken } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppCacheService } from 'src/app/app-cache.service';

export const SHOW_BUSY_INDICATOR = new HttpContextToken<boolean>(() => false);

@Injectable()
export class BusyInterceptor implements HttpInterceptor {
  private appCache = inject(AppCacheService);
  private activeRequests = 0;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.context.get(SHOW_BUSY_INDICATOR)) {
      if (this.activeRequests === 0) {
        this.appCache.isBusy.set(true);
      }
      this.activeRequests++;

      return next.handle(req).pipe(
        finalize(() => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.appCache.isBusy.set(false);
          }
        })
      );
    } else {
      return next.handle(req);
    }
  }
}

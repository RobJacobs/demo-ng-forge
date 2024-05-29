import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppCacheService } from 'src/app/app-cache.service';

@Injectable()
export class BusyInterceptor implements HttpInterceptor {
  private appCache = inject(AppCacheService);
  private activeRequests = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
  }
}

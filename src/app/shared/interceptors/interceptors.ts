import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusyInterceptor } from './busy.interceptor';

export const interceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true }];

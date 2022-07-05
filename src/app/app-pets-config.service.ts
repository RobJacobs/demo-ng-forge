import { Injectable } from '@angular/core';
import { AppCacheService } from './app-cache.service';

@Injectable({
  providedIn: 'root'
})
export class AppPetsConfigService {
  constructor(public appCache: AppCacheService) { }
}

import { Injectable, inject } from '@angular/core';
import { AppCacheService } from './app-cache.service';
import { IPetsService } from '@demo-ng-forge/pets';

@Injectable({
  providedIn: 'root'
})
export class AppPetsService implements IPetsService {
  public appCache = inject(AppCacheService);
}

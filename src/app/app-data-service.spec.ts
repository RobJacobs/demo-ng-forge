import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { AppDataService } from './app-data.service';
import { firstValueFrom } from 'rxjs';

describe('AppDataService', () => {
  let httpTestingController: HttpTestingController;
  let appDataService: AppDataService;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), AppDataService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    appDataService = TestBed.inject(AppDataService);
  });

  it('should get profile', () => {
    const profile$ = appDataService.getProfile();
    const profileResult = firstValueFrom(profile$);

    const req = httpTestingController.expectOne('mock-data/profile.json', 'Request to load profile');

    expect(req.request.method).toBe('GET');
  });
});

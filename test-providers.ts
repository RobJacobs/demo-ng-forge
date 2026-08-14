import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';

export default [provideZonelessChangeDetection(), provideHttpClientTesting()];

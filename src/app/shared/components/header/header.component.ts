import { Component } from '@angular/core';

import { AppCacheService } from 'src/app/app-cache.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public appCache: AppCacheService) { }

  public onThemeChange() {
    if (this.appCache.theme === 'light') {
      this.appCache.theme = 'dark';
      document.body.classList.add('forge-theme-dark');
    } else {
      this.appCache.theme = 'light';
      document.body.classList.remove('forge-theme-dark');
    }
    localStorage.setItem(
      this.appCache.storageKey,
      JSON.stringify({ theme: this.appCache.theme })
    );
  }
}

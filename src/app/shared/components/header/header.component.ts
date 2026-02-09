import { Component, inject } from '@angular/core';
import { ForgeAppBarModule, ForgeIconButtonModule, ForgeIconModule, ForgeLinearProgressModule, ForgeTooltipModule } from '@tylertech/forge-angular';

import { AppCacheService } from 'src/app/app-cache.service';

@Component({
  selector: 'app-header',
  imports: [ForgeAppBarModule, ForgeIconModule, ForgeIconButtonModule, ForgeLinearProgressModule, ForgeTooltipModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public appCache = inject(AppCacheService);

  public onThemeChange() {
    if (this.appCache.theme() === 'light') {
      this.appCache.theme.set('dark');
      document.body.classList.add('forge-theme-dark');
    } else {
      this.appCache.theme.set('light');
      document.body.classList.remove('forge-theme-dark');
    }
    localStorage.setItem(this.appCache.storageKey, JSON.stringify({ theme: this.appCache.theme }));
  }
}

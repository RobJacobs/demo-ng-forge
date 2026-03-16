import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppCacheService } from './app-cache.service';
import { ForgeButtonModule, ForgeDrawerModule, ForgeIconModule, ForgeMiniDrawerModule, ForgeScaffoldModule } from '@tylertech/forge-angular';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForgeScaffoldModule, ForgeDrawerModule, ForgeButtonModule, ForgeIconModule, ForgeMiniDrawerModule, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appCache = inject(AppCacheService);

  public ngOnInit() {
    this.initLayoutWatch();

    // const param = encodeURIComponent(btoa(JSON.stringify({ property: 'value' })));
    // const decoded = JSON.parse(atob(decodeURIComponent(param)));
  }

  private initLayoutWatch() {
    const layoutHandler = () => {
      document.body.classList.remove('app--layout-sm', 'app--layout-md', 'app--layout-lg');

      // https://forge.tylertech.com/core-patterns/layout/grid#responsive-breakpoints
      if (window.innerWidth <= 600) {
        this.appCache.layoutMode = 'sm';
        this.appCache.menu.open = false;
      } else if (window.innerWidth <= 960) {
        this.appCache.layoutMode = 'md';
      } else {
        this.appCache.layoutMode = 'lg';
      }

      document.body.classList.add(`app--layout-${this.appCache.layoutMode}`);
    };

    window.matchMedia('(max-width: 600px)').addEventListener('change', () => {
      layoutHandler();
    });

    window.matchMedia('(max-width: 960px)').addEventListener('change', () => {
      layoutHandler();
    });

    window.requestAnimationFrame(() => layoutHandler());
  }
}

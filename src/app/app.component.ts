import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AppCacheService } from './app-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public appCache: AppCacheService) {
    this.initRouteWatch();
    this.initLayoutWatch();
  }

  private initRouteWatch(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const routes: string[] = [];
      const parseRoute = (r: ActivatedRouteSnapshot) => {
        if (r.url.length) {
          routes.push(r.url[0].path);
        }
        if (r.children) {
          r.children.forEach((rc) => parseRoute(rc));
        }
      };
      parseRoute(this.route.snapshot);
      this.appCache.activeRoute = routes;
    });

    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.appCache.cancelHttpRequests.next();
    });
  }

  private initLayoutWatch(): void {
    const layoutHandler = () => {
      document.body.classList.remove('app--layout-sm', 'app--layout-md', 'app--layout-lg');

      // https://forge.tylertech.com/core-patterns/layout/grid#responsive-breakpoints
      if (window.innerWidth <= 600) {
        this.appCache.layoutMode = 'sm';
        this.appCache.menu.type = 'mini';
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

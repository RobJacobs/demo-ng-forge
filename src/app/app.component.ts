import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRouteSnapshot, Router, ActivatedRoute, NavigationEnd, NavigationStart, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AppCacheService } from './app-cache.service';
import { ForgeButtonModule, ForgeDrawerModule, ForgeIconModule, ForgeMiniDrawerModule, ForgeScaffoldModule } from '@tylertech/forge-angular';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CallbackPipe } from './shared/pipes/callback.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ForgeScaffoldModule, ForgeDrawerModule, ForgeButtonModule, ForgeIconModule, ForgeMiniDrawerModule, HeaderComponent, MenuComponent, CallbackPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private elementRef = inject(ElementRef);
  public appCache = inject(AppCacheService);

  public ngOnInit() {
    this.initRouteWatch();
    this.initLayoutWatch();

    // const param = encodeURIComponent(btoa(JSON.stringify({ property: 'value' })));
    // const decoded = JSON.parse(atob(decodeURIComponent(param)));
  }

  public mapRoutes(values: { path: string; params: any }[]): string[] {
    return values?.map((r) => r.path) || [];
  }

  public expand() {
    this.appCache.menu.open = !this.appCache.menu.open;
    if (!this.appCache.menu.open) {
      (this.elementRef.nativeElement as HTMLElement).querySelectorAll('forge-expansion-panel').forEach((element) => (element.open = false));
    }
  }

  private initRouteWatch() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const routes: { path: string; params: any }[] = [];
      const parseRoute = (r: ActivatedRouteSnapshot) => {
        if (r.url.length) {
          routes.push({
            path: r.url[0].path,
            params: Object.keys(r.params).length ? r.params : undefined
          });
        }
        if (r.children) {
          r.children.forEach((rc) => parseRoute(rc));
        }
      };
      parseRoute(this.route.snapshot);
      this.appCache.activeRoute = routes;
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
      this.appCache.cancelHttpRequests.next();
    });
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

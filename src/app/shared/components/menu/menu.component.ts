import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@tylertech/forge';
import {
  ForgeButtonModule,
  ForgeDrawerModule,
  ForgeExpansionPanelModule,
  ForgeIconModule,
  ForgeListItemModule,
  ForgeListModule,
  ForgeMenuModule,
  ForgeMiniDrawerModule,
  ForgeTooltipModule
} from '@tylertech/forge-angular';
import { isDefined } from '@tylertech/forge-core';
import { AppCacheService } from 'src/app/app-cache.service';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    ForgeButtonModule,
    ForgeDrawerModule,
    ForgeMiniDrawerModule,
    ForgeExpansionPanelModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgeMenuModule,
    ForgeTooltipModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private router = inject(Router);
  private elementRef = inject(ElementRef);
  @ViewChild('menuExpander') private menuExpander: ElementRef;
  public appCache = inject(AppCacheService);

  public readonly options = input<any[]>();
  public readonly open = input(true);
  public readonly selectedValue = input<string[]>();

  public onMenuItemSelected(option: string) {
    if (isDefined(option)) {
      this.router.navigate([option]);
    }
  }

  public onExpand() {
    this.appCache.menu.open = !this.appCache.menu.open;
    if (!this.appCache.menu.open) {
      (this.elementRef.nativeElement as HTMLElement).querySelectorAll('forge-expansion-panel').forEach((element) => (element.open = false));
    }
    requestAnimationFrame(() => {
      this.menuExpander.nativeElement.focus({});
    });
  }
}

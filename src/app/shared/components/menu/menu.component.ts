import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeExpansionPanelModule, ForgeIconModule, ForgeListItemModule, ForgeListModule, ForgeMenuModule } from '@tylertech/forge-angular';
import { isDefined } from '@tylertech/forge-core';

import { AppCacheService } from 'src/app/app-cache.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    ForgeButtonModule,
    ForgeExpansionPanelModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgeMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private router = inject(Router);
  public appCache = inject(AppCacheService);

  public menuItemSelected(option: string): void {
    if (isDefined(option)) {
      this.router.navigate([option]);
    }
  }

}

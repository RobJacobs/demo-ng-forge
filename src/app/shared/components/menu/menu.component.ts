import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeExpansionPanelModule, ForgeIconModule, ForgeListItemModule, ForgeListModule, ForgeMenuModule } from '@tylertech/forge-angular';
import { isDefined } from '@tylertech/forge-core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, ForgeButtonModule, ForgeExpansionPanelModule, ForgeIconModule, ForgeListItemModule, ForgeListModule, ForgeMenuModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private router = inject(Router);

  public readonly options = input<any[]>();
  public readonly open = input(true);
  public readonly selectedValue = input<string[]>();

  public menuItemSelected(option: string) {
    if (isDefined(option)) {
      this.router.navigate([option]);
    }
  }
}

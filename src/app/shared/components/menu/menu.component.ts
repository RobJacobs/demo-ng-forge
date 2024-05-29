import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeExpansionPanelModule, ForgeIconModule, ForgeListItemModule, ForgeListModule, ForgeMenuModule } from '@tylertech/forge-angular';
import { isDefined } from '@tylertech/forge-core';

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

  @Input()
  public options?: any[];
  @Input()
  public type: 'dismissible' | 'mini' = 'dismissible';
  @Input()
  public selectedValue?: string[];

  public menuItemSelected(option: string): void {
    if (isDefined(option)) {
      this.router.navigate([option]);
    }
  }

}

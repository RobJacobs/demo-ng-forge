import { Component, inject } from '@angular/core';
import { IPetsService, PETS_SERVICE } from './pets.config';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule } from '@tylertech/forge-angular';

@Component({
  selector: 'lib-pets-main',
  imports: [CommonModule, ForgeButtonModule],
  templateUrl: './pets-main.component.html',
  styleUrls: ['./pets-main.component.scss']
})
export class PetsMainComponent {
  public moduleConfig: IPetsService | null = inject(PETS_SERVICE, {
    optional: true
  });

  public onToggleMenu() {
    if (this.moduleConfig) {
      this.moduleConfig.appCache.menu.open = !this.moduleConfig.appCache.menu.open;
    }
  }
}

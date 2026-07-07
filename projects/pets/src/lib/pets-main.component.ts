import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ForgeButtonModule } from '@tylertech/forge-angular';
import { IPetsService, PETS_SERVICE } from './pets.config';

@Component({
  selector: 'lib-pets-main',
  imports: [JsonPipe, ForgeButtonModule],
  templateUrl: './pets-main.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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

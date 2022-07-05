import { Component, Inject, OnInit } from '@angular/core';
import { IPetsConfig, PETS_CONFIG_SERVICE } from './pets.config';

@Component({
  selector: 'lib-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent {

  constructor(
    @Inject(PETS_CONFIG_SERVICE) public moduleConfig: IPetsConfig
  ) { }

  public onToggleMenu() {
    this.moduleConfig.appCache.menu.type = this.moduleConfig.appCache.menu.type === 'dismissible' ? 'mini' : 'dismissible'
  }

}

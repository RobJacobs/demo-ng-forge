import { Injectable } from '@angular/core';
import { IconRegistry, IOption } from '@tylertech/forge';
import * as tylerIconsModule from '@tylertech/tyler-icons/standard';

@Injectable()
export class IconsCacheService {
  public iconOptions?: IOption[];
  constructor() {
    this.iconOptions = Object.values(tylerIconsModule).map((icon: { name: string; data: string }) => {
      return { label: icon.name, value: icon.name, leadingIcon: icon.name, leadingIconType: 'component' };
    });
    IconRegistry.define(Object.values(tylerIconsModule));
  }
}

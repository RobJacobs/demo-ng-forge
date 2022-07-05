import { Injectable } from '@angular/core';
import { IconRegistry, IOption } from '@tylertech/forge';
import * as tylerIconsModule from '@tylertech/tyler-icons/standard';

@Injectable({
  providedIn: 'root'
})
export class IconsCacheService {
  public iconOptions?: IOption[];
  constructor() {
    this.iconOptions = Object.values(tylerIconsModule).map((icon: { name: string; data: string }) => {
      const name = icon.name.split('_').map(n => `${n.charAt(0).toUpperCase()}${n.slice(1)}`).join(' ');
      return { label: name, value: icon.name, leadingIcon: icon.name, leadingIconType: 'component' };
    });
    IconRegistry.define(Object.values(tylerIconsModule));
  }
}

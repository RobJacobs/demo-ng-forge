import { defineComponents as defineForgeComponents } from '@tylertech/forge';
import {
  defineAppLauncherButtonComponent,
  defineAppLauncherComponent,
  defineFooterComponent,
  defineFooterItemComponent,
  defineLandingPageLayoutComponent
} from '@tylertech/forge-internal';

export const defineComponents = (): void => {
  defineForgeComponents();
  defineAppLauncherButtonComponent();
  defineAppLauncherComponent();
  defineFooterComponent();
  defineFooterItemComponent();
  defineLandingPageLayoutComponent();
}
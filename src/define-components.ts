import { defineComponents as defineForgeComponents } from '@tylertech/forge';
import { defineComponents as defineForgeInternalComponents } from '@tylertech/forge-internal';

export const defineComponents = (): void => {
  defineForgeComponents();
  defineForgeInternalComponents();
}
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineIcons } from './define-icons';

defineIcons();
window.TylerForgeGlobalConfiguration = {
  'forge-field': {
    labelPosition: 'block-start'
  }
};

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

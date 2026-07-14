import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ForgeDividerModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { CardComponent } from '@app/shared/components';

@Component({
  selector: 'app-typography',
  imports: [ForgeDividerModule, ForgeToolbarModule, CardComponent],
  templateUrl: './typography.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {}

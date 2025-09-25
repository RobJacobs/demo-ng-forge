import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForgeDividerModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { CardComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-typography',
  imports: [CommonModule, ForgeDividerModule, ForgeToolbarModule, CardComponent],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {}

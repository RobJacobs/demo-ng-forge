import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ForgeToolbarModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[class.app-card--raised]': 'border() === "raised"',
    '[class.app-card--outlined]': 'border() === "outlined"'
  },
  imports: [CommonModule, ForgeToolbarModule]
})
export class CardComponent {
  public readonly border = input<'raised' | 'outlined'>('outlined');
}

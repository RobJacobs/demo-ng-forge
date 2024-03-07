import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { ForgeToolbarModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ForgeToolbarModule
  ]
})
export class CardComponent {
  @HostBinding('class.app-card--raised')
  public get raisedClass() { return this.border === 'raised'; }
  @HostBinding('class.app-card--outlined')
  public get outlinedClass() { return this.border === 'outlined'; }

  @Input()
  public border: 'raised' | 'outlined' = 'raised';
}

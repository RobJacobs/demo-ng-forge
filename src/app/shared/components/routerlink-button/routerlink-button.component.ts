import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-routerlink-button',
  templateUrl: './routerlink-button.component.html',
  styleUrls: ['./routerlink-button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeTooltipModule
  ]
})
export class RouterlinkButtonComponent {
  @Input()
  public route?: string;

  @Input()
  public queryParams?: any;

  @Input()
  public label?: string;

  @Input()
  public icon?: string;

  @Input()
  public disabled?: boolean;
}

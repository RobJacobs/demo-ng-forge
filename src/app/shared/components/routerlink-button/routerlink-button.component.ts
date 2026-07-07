import { Component, Input, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-routerlink-button',
  templateUrl: './routerlink-button.component.html',
  styleUrls: ['./routerlink-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterModule, ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule]
})
export class RouterlinkButtonComponent {
  public readonly route = input<string>();

  public readonly queryParams = input<any>();

  @Input()
  public label?: string;

  public readonly icon = input<string>();

  public readonly disabled = input<boolean>();
}

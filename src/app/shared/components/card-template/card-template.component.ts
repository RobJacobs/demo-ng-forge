import { Component, input } from '@angular/core';
import { ForgeScaffoldModule, ForgeSkeletonModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-card-template',
  imports: [ForgeScaffoldModule, ForgeSkeletonModule],
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.scss'
})
export class CardTemplateComponent {
  public isBusy = input(false);
}

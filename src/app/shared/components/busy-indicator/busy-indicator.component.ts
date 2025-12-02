import { Component, inject } from '@angular/core';
import { DIALOG_DATA, ForgeCircularProgressModule, ForgeLinearProgressModule } from '@tylertech/forge-angular';

export interface IBusyIndicatorData {
  title?: string;
  message: string;
  progress: 'circular' | 'linear';
}

@Component({
  selector: 'app-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrl: './busy-indicator.component.scss',
  imports: [ForgeLinearProgressModule, ForgeCircularProgressModule]
})
export class BusyIndicatorComponent {
  public dialogData = inject<IBusyIndicatorData>(DIALOG_DATA);
}

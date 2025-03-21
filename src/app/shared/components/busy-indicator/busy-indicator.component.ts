import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, ForgeLinearProgressModule, ForgeCircularProgressModule]
})
export class BusyIndicatorComponent {
  public dialogConfig = inject<IBusyIndicatorData>(DIALOG_DATA);
}

import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-title',
  templateUrl: './dashboard-title.component.html',
  styleUrl: './dashboard-title.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'dashboard-title'
  }
})
export class DashboardTitleComponent {
  public titleTop = input<string>();
  public titleMiddle = input<string>();
  public titleBottom = input<string>();
}

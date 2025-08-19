import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-title',
  imports: [CommonModule],
  templateUrl: './dashboard-title.component.html',
  styleUrl: './dashboard-title.component.scss',
  host: {
    class: 'dashboard-title'
  }
})
export class DashboardTitleComponent {
  public titleTop = input<string>();
  public titleMiddle = input<string>();
  public titleBottom = input<string>();
}

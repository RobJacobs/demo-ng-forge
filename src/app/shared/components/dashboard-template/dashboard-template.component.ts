import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.scss'
})
export class DashboardTemplateComponent {
  public showHeaderBanner = input<boolean>(true);
  public showFooterBanner = input<boolean>(true);
}

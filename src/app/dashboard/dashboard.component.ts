import { Component } from '@angular/core';
import { ForgeButtonModule, ForgeCardModule } from '@tylertech/forge-angular';
import { ForgeLandingPageLayoutModule } from '@tylertech/forge-angular-internal';

@Component({
  selector: 'app-dashboard',
  imports: [ForgeButtonModule, ForgeCardModule, ForgeLandingPageLayoutModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public mainTitle = 'Dashboard component';
  public onNavigate(route: string) {}
}

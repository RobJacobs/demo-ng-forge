import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForgeButtonModule } from '@tylertech/forge-angular';
import { DashboardTemplateComponent, DashboardTitleComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ForgeButtonModule, DashboardTemplateComponent, DashboardTitleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}

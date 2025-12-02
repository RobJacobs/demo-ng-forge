import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeOptionModule, ForgeSelectModule, ForgeTabBarModule, ForgeTabModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';

export enum ChartTypes {
  bar,
  bubble,
  donut,
  donutMeter,
  gantt,
  line,
  pie,
  treemap,
  tree
}

@Component({
  selector: 'app-charts',
  imports: [
    FormsModule,
    ForgeButtonModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeTabBarModule,
    ForgeTabModule,
    ForgeToolbarModule,
    D3ChartComponent,
    GoogleChartComponent
  ],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  private readonly d3Chart = viewChild(D3ChartComponent);
  private readonly googleChart = viewChild(GoogleChartComponent);

  public chartTypesEnum = ChartTypes;
  public chartType = ChartTypes.bar;
  public activeTab = 0;

  public onAction(action: 'add' | 'update' | 'delete') {
    if (this.activeTab === 0) {
      this.d3Chart()?.onAction(action);
    } else if (this.activeTab === 1) {
      this.googleChart()?.onAction(action);
    }
  }

  public onTabSelected(index: number) {
    this.activeTab = index;
  }
}

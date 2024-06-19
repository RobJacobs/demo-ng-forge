import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  standalone: true,
  imports: [
    CommonModule,
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
  @ViewChild(D3ChartComponent)
  private d3Chart?: D3ChartComponent;
  @ViewChild(GoogleChartComponent)
  private googleChart?: GoogleChartComponent;

  public chartTypesEnum = ChartTypes;
  public chartType = ChartTypes.bar;
  public activeTab = 0;

  public onAction(action: 'add' | 'update' | 'delete') {
    if (this.activeTab === 0) {
      this.d3Chart?.onAction(action);
    } else if (this.activeTab === 1) {
      this.googleChart?.onAction(action);
    }
  }

  public onTabSelected(index: number) {
    this.activeTab = index;
  }

}

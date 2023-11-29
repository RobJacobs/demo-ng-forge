import { Component, ViewChild } from '@angular/core';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  @ViewChild(D3ChartComponent)
  private d3Chart: D3ChartComponent;
  @ViewChild(GoogleChartComponent)
  private googleChart: GoogleChartComponent;

  public chartType: 'bar' | 'bubble' | 'donut' | 'donut-meter' | 'line' | 'pie' | 'treempa' | 'tree' = 'bar';
  public activeTab = 0;

  public onAction(action: 'add' | 'update' | 'delete') {
    if (this.activeTab === 0) {
      this.d3Chart.onAction(action);
    }
  }

  public onTabSelected(index: number) {
    this.activeTab = index;
  }

}
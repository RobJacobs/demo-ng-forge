import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleChartService } from './google-chart.service';

@Component({
  selector: 'app-charts-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent implements OnInit {
  @ViewChild('chartContainer')
  private chartContainer: ElementRef;

  public ngOnInit() {
    GoogleChartService.loadGoogleChartService().subscribe(() => {
      (window as any).google.charts.load('current', { 'packages': ['corechart'] }).then(() => this.drawChart());
    });
  }

  private drawChart() {
    // Create the data table.
    var data = new (window as any).google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
      'title': 'How Much Pizza I Ate Last Night',
      'width': 400,
      'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new (window as any).google.visualization.PieChart(this.chartContainer.nativeElement);
    chart.draw(data, options);
  }
}

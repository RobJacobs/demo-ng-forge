import { Component, DestroyRef, ElementRef, Input, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, fromEvent } from 'rxjs';

import { GoogleChartService } from './google-chart.service';
import { ChartTypes } from '../charts.component';

interface IChartItem {
  id: number;
  value: unknown;
  label: string;
  category: unknown;
}

// https://developers.google.com/chart/
@Component({
  selector: 'app-charts-google-chart',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    GoogleChartService
  ],
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent implements OnInit, OnDestroy {
  private destroyRef = inject(DestroyRef);

  @ViewChild('chartContainer', { static: true })
  private chartContainer?: ElementRef;
  private chartData?: google.visualization.DataTable;
  private chart?: google.visualization.ChartBase;
  private chartAnimation: google.visualization.TransitionAnimation = {
    startup: true,
    duration: 500
  };
  private chartScale = 1;
  private googleChartsLoaded = false;

  public chartIsPanning = false;

  #chartType: ChartTypes = ChartTypes.bar;
  @Input()
  public set chartType(value: ChartTypes) {
    this.#chartType = value;
    if (this.googleChartsLoaded) {
      this.drawChart('create');
    }
  }
  public get chartType(): ChartTypes {
    return this.#chartType;
  }

  public ngOnInit() {
    GoogleChartService.loadGoogleChartService().subscribe(() => {
      google.charts.load('current', { 'packages': ['corechart', 'treemap', 'orgchart', 'gantt'] }).then(() => {
        this.googleChartsLoaded = true;
        this.drawChart('create');
      });
    });

    fromEvent(window, 'resize').pipe(
      takeUntilDestroyed(this.destroyRef),
      debounceTime(100)
    ).subscribe(() => this.drawChart('redraw'));

    fromEvent<WheelEvent>(this.chartContainer?.nativeElement, 'wheel').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((event) => {
      const chartElement = (this.chartContainer?.nativeElement as HTMLElement).firstElementChild as HTMLElement;
      if (event.deltaY > 0 && this.chartScale < 5.05) {
        this.chartScale += .05;
        chartElement.style.transform = `scale(${this.chartScale})`;
      } else if (event.deltaY < 0 && this.chartScale > 0.1) {
        this.chartScale -= .05;
        chartElement.style.transform = `scale(${this.chartScale})`;
      }
    });
  }

  public ngOnDestroy() {
    (this.chart as google.visualization.CoreChartBase)?.clearChart();
  }

  public onAction(action: 'add' | 'update' | 'delete') {
    this.drawChart(action);
  }

  private drawChart(action: 'create' | 'add' | 'update' | 'delete' | 'redraw') {
    if (action !== 'redraw') {
      this.setChartData(action);
    }

    const hostWidth = this.chartContainer?.nativeElement.clientWidth;
    const hostHeight = this.chartContainer?.nativeElement.clientHeight;

    switch (this.chartType) {
      // https://developers.google.com/chart/interactive/docs/gallery/barchart
      case ChartTypes.bar: {
        if (action === 'create') {
          // vertical bars
          this.chart = new google.visualization.ColumnChart(this.chartContainer?.nativeElement);
          // horizontal bars
          // this.chart = new google.visualization.BarChart(this.chartContainer.nativeElement);
          this.addChartEvents();
        }
        const columnChartOptions: google.visualization.ColumnChartOptions | google.visualization.BarChartOptions = {
          title: 'Bar Chart',
          animation: this.chartAnimation
        };
        (this.chart as google.visualization.ColumnChart).draw(this.chartData as google.visualization.DataTable, columnChartOptions);
        break;
      }
      // https://developers.google.com/chart/interactive/docs/gallery/bubblechart
      case ChartTypes.bubble: {
        if (action === 'create') {
          this.chart = new google.visualization.BubbleChart(this.chartContainer?.nativeElement);
          this.addChartEvents();
        }
        const bubbleChartOptions: google.visualization.BubbleChartOptions = {
          title: 'Bubble Chart',
          animation: this.chartAnimation
        };
        (this.chart as google.visualization.BubbleChart).draw(this.chartData as google.visualization.DataTable, bubbleChartOptions);
        break;
      }
      case ChartTypes.donut: {
        if (action === 'create') {
          this.chart = new google.visualization.PieChart(this.chartContainer?.nativeElement);
          this.addChartEvents();
        }

        const donutChartOptions: google.visualization.PieChartOptions = {
          title: 'Donut Chart',
          pieHole: 0.5
        };
        (this.chart as google.visualization.PieChart).draw(this.chartData as google.visualization.DataTable, donutChartOptions);
        break;
      }
      // https://developers.google.com/chart/interactive/docs/gallery/piechart
      case ChartTypes.pie: {
        if (action === 'create') {
          this.chart = new google.visualization.PieChart(this.chartContainer?.nativeElement);
          this.addChartEvents();
        }

        const pieChartOptions: google.visualization.PieChartOptions = {
          title: 'Pie Chart'
        };
        (this.chart as google.visualization.PieChart).draw(this.chartData as google.visualization.DataTable, pieChartOptions);
        break;
      }
      // https://developers.google.com/chart/interactive/docs/gallery/linechart
      case ChartTypes.line: {
        if (action === 'create') {
          this.chart = new google.visualization.LineChart(this.chartContainer?.nativeElement);
          this.addChartEvents();
        }

        const lineChartOptions: google.visualization.LineChartOptions = {
          title: 'Line Chart',
          animation: this.chartAnimation
        };
        (this.chart as google.visualization.LineChart).draw(this.chartData as google.visualization.DataTable, lineChartOptions);
        break;
      }
      // https://developers.google.com/chart/interactive/docs/gallery/treemap
      case ChartTypes.treemap: {
        if (action === 'create') {
          this.chart = new google.visualization.TreeMap(this.chartContainer?.nativeElement);
          this.addChartEvents();
        }

        const treeMapChartOptions: google.visualization.TreeMapOptions = {
          title: 'Treemap Chart'
        };
        (this.chart as google.visualization.TreeMap).draw(this.chartData as google.visualization.DataTable, treeMapChartOptions);
        break;
      }
      // https://developers.google.com/chart/interactive/docs/gallery/orgchart
      case ChartTypes.tree: {
        if (action === 'create') {
          this.chart = new google.visualization.OrgChart(this.chartContainer?.nativeElement);
          this.addChartEvents();
        }

        const orgChartOptions: google.visualization.OrgChartOptions = {
          allowCollapse: true,
          allowHtml: true,
          nodeClass: 'app--chart--tree-node',
          selectedNodeClass: 'app--chart--tree-node--selected'
        };

        (this.chart as google.visualization.OrgChart).draw(this.chartData as google.visualization.DataTable, orgChartOptions);
        break;
      }
      case ChartTypes.gantt: {
        if (action === 'create') {
          this.chart = new google.visualization.Gantt(this.chartContainer?.nativeElement);
          this.addChartEvents();
        }

        const ganttChartOptions: google.visualization.GanttChartOptions = {
        };
        (this.chart as google.visualization.Gantt).draw(this.chartData as google.visualization.DataTable, ganttChartOptions);
      }
    }
  }

  private setChartData(action: 'create' | 'update' | 'add' | 'delete') {
    const chartRows = this.chartData?.getNumberOfRows() || 0;
    const chartColumns = this.chartData?.getNumberOfColumns() || 0;
    switch (action) {
      case 'create': {
        this.chartData = new google.visualization.DataTable();
        switch (this.chartType) {
          case ChartTypes.bar:
          case ChartTypes.donut:
          case ChartTypes.pie:
            this.chartData.addColumn('string', 'Label', 'label');
            this.chartData.addColumn('number', 'Value', 'value');
            this.chartData.addRows(this.getData(10, 0).map(d => [d.label, d.value]));
            break;
          case ChartTypes.bubble: {
            this.chartData.addColumn('string', 'Id', 'id');
            this.chartData.addColumn('number', 'Value', 'value');
            this.chartData.addColumn('number', 'Category', 'category');
            this.chartData.addColumn('string', 'Label', 'label');
            this.chartData.addColumn('number', 'Size', 'size');
            const bubbleChartData = [];
            for (let i = 0; i < 10; i++) {
              bubbleChartData.push([i.toString(), this.randomNumber(0, 1000), this.randomNumber(0, 1000), `Item ${i}`, this.randomNumber(0, 1000)]);
            }
            this.chartData.addRows(bubbleChartData);
            break;
          }
          case ChartTypes.line: {
            this.chartData.addColumn('string', 'Label', 'label');
            this.chartData.addColumn('number', 'Line 1', 'line1');
            this.chartData.addColumn('number', 'Line 2', 'line2');
            this.chartData.addColumn('number', 'Line 3', 'line3');
            const lineChartData = [];
            for (let i = 0; i < 10; i++) {
              lineChartData.push([`Item ${i}`, this.randomNumber(0, 1000), this.randomNumber(0, 1000), this.randomNumber(0, 1000)]);
            }
            this.chartData.addRows(lineChartData);
            break;
          }
          case ChartTypes.treemap: {
            this.chartData.addColumn('string', 'Label', 'label');
            this.chartData.addColumn('string', 'Parent', 'parent');
            this.chartData.addColumn('number', 'Value', 'value');
            this.chartData.addColumn('number', 'Category', 'category');
            this.chartData.addRow(['Root', null, 0, 0]);
            this.chartData.addRows(this.getData(20, 0).map(d => [d.label, 'Root', d.value, d.category]));
            break;
          }
          case ChartTypes.tree: {
            this.chartData.addColumn('string', 'Id', 'id');
            this.chartData.addColumn('string', 'ParentId', 'parentId');
            this.chartData.addRow([{ v: '0', f: 'Item 0' }, null]);
            this.chartData.addRows(this.buildTreeNodeData('0', this.randomNumber(1, 5)));
            break;
          }
          case ChartTypes.gantt: {
            this.chartData.addColumn('string', 'Id', 'id');
            this.chartData.addColumn('string', 'Name', 'name');
            this.chartData.addColumn('string', 'Resource', 'resource');
            this.chartData.addColumn('date', 'Start Date', 'startDate');
            this.chartData.addColumn('date', 'End Date', 'endDate');
            this.chartData.addColumn('number', 'Duration', 'duration');
            this.chartData.addColumn('number', 'Progress', 'progress');
            this.chartData.addColumn('string', 'Dependencies', 'dependencies');
            this.chartData.addRows([
              ['0', 'Item 01', '', new Date(2024, 0, 1), new Date(2024, 0, 31), null, 10, null],
              ['1', 'Item 02', '', new Date(2024, 1, 1), new Date(2024, 1, 10), null, 20, null],
              ['2', 'Item 03', '', new Date(2024, 1, 1), new Date(2024, 1, 20), null, 30, null],
              ['3', 'Item 04', '', new Date(2024, 3, 15), new Date(2024, 8, 20), null, 40, null],
              ['4', 'Item 05', '', new Date(2024, 10, 1), new Date(2025, 10, 30), null, 90, null]
            ]);
          }
        }
        break;
      }
      case 'update': {
        switch (this.chartType) {
          case ChartTypes.bar:
          case ChartTypes.donut:
          case ChartTypes.pie: {
            const data = this.getData(chartRows);
            data.forEach((d, i) => {
              this.chartData?.setValue(i, 1, d.value);
            });
            break;
          }
          case ChartTypes.bubble: {
            for (let i = 0; i < chartRows; i++) {
              this.chartData?.setValue(i, 1, this.randomNumber(0, 1000));
              this.chartData?.setValue(i, 2, this.randomNumber(0, 1000));
              this.chartData?.setValue(i, 4, this.randomNumber(0, 1000));
            }
            break;
          }
          case ChartTypes.line: {
            for (let i = 0; i < chartRows; i++) {
              for (let ii = 1; ii < chartColumns; ii++) {
                this.chartData?.setValue(i, ii, this.randomNumber(0, 1000));
              }
            }
            break;
          }
          case ChartTypes.treemap: {
            for (let i = 1; i < chartRows; i++) {
              this.chartData?.setValue(i, 2, this.randomNumber(0, 1000));
              this.chartData?.setValue(i, 3, this.randomNumber(0, 1000));
            }
            break;
          }
          case ChartTypes.tree: {
            this.chartData?.removeRows(0, this.chartData.getNumberOfRows());
            this.chartData?.addRows(this.buildTreeNodeData('0', this.randomNumber(1, 5)));
            break;
          }
        }
        break;
      }
      case 'add': {
        switch (this.chartType) {
          case ChartTypes.bar:
          case ChartTypes.donut:
          case ChartTypes.pie: {
            this.chartData?.addRows(this.getData(1, chartRows).map(d => [d.label, d.value]));
            break;
          }
          case ChartTypes.bubble: {
            this.chartData?.addRow([(chartRows).toString(), this.randomNumber(0, 1000), this.randomNumber(0, 1000), `Item ${chartRows}`, this.randomNumber(0, 1000)])
            break;
          }
          case ChartTypes.line: {
            this.chartData?.addColumn('number', `Line ${chartColumns}`, `line${chartColumns}`);
            for (let i = 0; i < 10; i++) {
              this.chartData?.setValue(i, chartColumns, this.randomNumber(0, 1000));
            }
            break;
          }
          case ChartTypes.treemap: {
            this.chartData?.addRow([`Item ${chartRows}`, 'Root', this.randomNumber(0, 1000), this.randomNumber(0, 1000)]);
            break;
          }
        }
        break;
      }
      case 'delete': {
        if (chartRows > 1) {
          switch (this.chartType) {
            case ChartTypes.bar:
            case ChartTypes.bubble:
            case ChartTypes.donut:
            case ChartTypes.pie:
            case ChartTypes.treemap: {
              this.chartData?.removeRow(chartRows - 1);
              break;
            }
            case ChartTypes.line: {
              this.chartData?.removeColumn(chartColumns - 1);
              break;
            }
          }
        }
        break;
      }
    }
  }

  private getData(length: number, startId = 0): IChartItem[] {
    const data: IChartItem[] = [];
    for (let i = 0; i < length; i++) {
      data.push({ id: i + startId, value: this.randomNumber(0, 1000), label: `Item ${i + startId}`, category: this.randomNumber(0, 100) });
    }
    return data;
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private addChartEvents() {
    google.visualization.events.addListener(this.chart, 'ready', () => {
      console.log('chart ready');
      this.chartScale = 1;
      this.addZoomPanEvents()
    });

    google.visualization.events.addListener(this.chart, 'select', () => {
      console.log('chart item selected');
      console.log(this.chart?.getSelection());
    });
    google.visualization.events.addListener(this.chart, 'mousedown', () => {
      console.log('mousedown');
    });
  }

  private buildTreeNodeData(parentId: string, depth = 1): any {
    const data = [];
    const nodes = this.randomNumber(0, 5);
    for (let i = 0; i < nodes; i++) {
      data.push([{ v: `${parentId}-${i}`, f: `Item ${parentId}-${i}` }, parentId]);
      if (depth > 1) {
        data.push(...this.buildTreeNodeData(`${parentId}-${i}`, depth - 1));
      }
    }
    return data;
  }

  private addZoomPanEvents() {
    const chartElement = (this.chartContainer?.nativeElement as HTMLElement).firstElementChild as HTMLElement;
    fromEvent<MouseEvent>(chartElement, 'mousedown').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((event) => {
      this.chartIsPanning = true;
      (this.chartContainer?.nativeElement as HTMLElement).classList.add('app--chart--panning');
    });
    fromEvent<MouseEvent>(chartElement, 'mousemove').pipe(
      takeUntilDestroyed(this.destroyRef),
      filter(() => this.chartIsPanning)
    ).subscribe((event) => {
      // console.log(`X: ${event.movementX} Y: ${event.movementY}`);
      (this.chartContainer?.nativeElement as HTMLElement).scrollBy(event.movementX * -1, event.movementY * -1);
    });
    fromEvent<MouseEvent>(chartElement, 'mouseup').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.chartIsPanning = false;
      (this.chartContainer?.nativeElement as HTMLElement).classList.remove('app--chart--panning');
    });
    fromEvent<MouseEvent>(chartElement, 'mouseout').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.chartIsPanning = false;
      (this.chartContainer?.nativeElement as HTMLElement).classList.remove('app--chart--panning');
    });
  }
}

import { Component, DestroyRef, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent } from 'rxjs';
import { ForgeListItemModule, ForgeListModule } from '@tylertech/forge-angular';

import {
  CHART_CONSTANTS,
  BarChartService,
  BubbleChartService,
  LineChartService,
  PieChartService,
  IBarChartConfig,
  IChartConfig,
  IPieChartConfig,
  ILineChartConfig,
  ILineChartData,
  TreemapChartService,
  ITreeChartConfig,
  TreeChartService,
  ITreeChartData,
  GanttChartService,
  IGanttChartConfig
} from './lib';
import { ChartTypes } from '../charts.component';

interface IChartItem {
  id: number;
  value: unknown;
  label: string;
  category: unknown;
}

@Component({
  selector: 'app-charts-d3-chart',
  standalone: true,
  imports: [CommonModule, ForgeListItemModule, ForgeListModule],
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  @ViewChild('chartContainer', { static: true })
  private chartContainer?: ElementRef;
  private chartPalette = Object.keys(CHART_CONSTANTS.chartPalette).map((key) => CHART_CONSTANTS.chartPalette[key]);

  #chartType: ChartTypes = ChartTypes.bar;
  @Input()
  public set chartType(value: ChartTypes) {
    this.#chartType = value;
    this.setChartData('create');
    this.initializeChartContainer();
    requestAnimationFrame(() => {
      this.drawChart();
    });
    if (this.#chartType === ChartTypes.donutMeter || this.#chartType === ChartTypes.gantt || this.#chartType === ChartTypes.treemap || this.#chartType === ChartTypes.tree) {
      this.showLegend = false;
    } else {
      this.showLegend = true;
    }
  }
  public get chartType(): ChartTypes {
    return this.#chartType;
  }
  public chartData?: IChartItem[];
  public lineChartData?: IChartItem[][];
  public donutMeterChartData = 0;
  public treeChartData?: ITreeChartData;
  public legendData?: { id: number; value: unknown; label: string; color: string }[];
  public showLegend = false;

  public ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100))
      .subscribe(() => this.drawChart());
  }

  public onAction(action: 'add' | 'update' | 'delete') {
    this.setChartData(action);
    this.drawChart();
  }

  private initializeChartContainer() {
    (this.chartContainer?.nativeElement as HTMLElement).querySelector('svg')?.remove();
    const chartElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    (this.chartContainer?.nativeElement as HTMLElement).appendChild(chartElement);
  }

  private setChartData(action: 'create' | 'update' | 'add' | 'delete') {
    if (this.chartType === ChartTypes.donutMeter) {
      this.donutMeterChartData = this.randomNumber(20, 80);
      return;
    }

    switch (action) {
      case 'create': {
        if (this.chartType === ChartTypes.line) {
          this.lineChartData = [this.getData(10)];
        } else if (this.chartType === ChartTypes.tree) {
          this.treeChartData = {
            id: '0',
            children: [
              { id: '0-1', label: 'Item 0-1', children: true },
              { id: '0-2', label: 'Item 0-2', children: true }
            ]
          };
        } else {
          this.chartData = this.getData(10);
        }
        break;
      }
      case 'update': {
        if (this.chartType === ChartTypes.line) {
          this.lineChartData?.forEach((d, i) => {
            this.getData(d.length).forEach((dd, i) => {
              d[i].value = dd.value;
              // d[i].category = dd.category;
            });
          });
        } else {
          this.getData(this.chartData!.length).forEach((d, i) => {
            this.chartData![i].value = d.value;
            // this.chartData[i].category = d.category;
          });
        }
        break;
      }
      case 'add': {
        if (this.chartType === ChartTypes.line) {
          this.lineChartData?.push(this.getData(10));
          // this.lineChartData.forEach((d, i) => {
          //   let maxId = Math.max(...d.map(dd => dd.id)) || 0;
          //   maxId++;
          //   // TODO
          //   d[i] = d.concat(this.getData(10, maxId));
          // });
        } else {
          let maxId = Math.max(...this.chartData!.map((d) => d.id)) || 0;
          maxId++;
          this.chartData = this.chartData?.concat(this.getData(10, maxId));
        }
        break;
      }
      case 'delete': {
        if (this.chartType === ChartTypes.line) {
          this.lineChartData?.pop();
        } else {
          if (this.chartData!.length > 10) {
            this.chartData = this.chartData?.slice(0, this.chartData.length - 10);
          }
        }
        break;
      }
    }

    if (this.chartType === ChartTypes.bubble || this.chartType === ChartTypes.donut || this.chartType === ChartTypes.pie || this.chartType === ChartTypes.treemap) {
      this.chartData = this.chartData?.sort((a, b) => {
        return (a.category as number) - (b.category as number);
      });
    }
  }

  private getData(length: number, startId = 0): IChartItem[] {
    const data: IChartItem[] = [];
    const date = Date.now();
    for (let i = 0; i < length; i++) {
      // data.push({id: i + startId, value: randomNumber(1, 100), label: 'Item ' + (i + startId), category: randomDate()});
      data.push({ id: i + startId, value: this.randomNumber(0, 1000), label: `Item ${i + startId}`, category: this.randomNumber(0, 100) });
      // const category = date - this.randomNumber(1, 1000000000000);
      // data.push({ id: i + startId, value: this.randomNumber(0, 10000), label: 'Item ' + (i + startId), category: category });
      // data.push({id: i + startId, value: randomNumber(1, 2000), label: 'Item ' + (i + startId), category: categories[randomNumber(0, 9)]});
      // data.push({id: i + startId, value: i * 100, label: 'Item ' + (i + startId), category: randomNumber(0, 100)});
    }
    console.log(
      data.sort((a, b) => {
        return (a.category as number) - (b.category as number);
      })
    );
    return data.sort((a, b) => {
      return (a.category as number) - (b.category as number);
    });
  }

  private drawChart() {
    this.legendData = this.chartData?.map((d, i) => ({ id: d.id, label: d.label, value: d.value, color: this.chartPalette[i % this.chartPalette.length] }));

    const chartConfig = {
      container: this.chartContainer?.nativeElement.querySelector('svg'),
      data: this.chartData?.map((d, i) => ({ ...d, color: this.chartPalette[i % this.chartPalette.length] })),
      palette: this.chartPalette,
      selectedCallback: this.selectedCallback,
      hoverCallback: this.hoverCallback
    } as IChartConfig;

    chartConfig.container.setAttribute('width', '0');
    chartConfig.container.setAttribute('height', '0');

    switch (this.chartType) {
      case ChartTypes.bar: {
        const barConfig = {
          ...chartConfig
          // barWidth: 80,
          // barPadding: 40,
          // categoryTickValues: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
          // categoryTickValues: data.map(function (d) { return d.label; })
          // valueFormat: '$.2f'
          // valueDateFormat: '%b-%Y'
        } as IBarChartConfig;
        BarChartService.buildBarChart(barConfig);
        break;
      }
      case ChartTypes.bubble: {
        BubbleChartService.buildBubbleChart(chartConfig);
        break;
      }
      case ChartTypes.donut: {
        const donutConfig = {
          ...chartConfig,
          type: 'donut'
        } as IPieChartConfig;
        PieChartService.buildPieChart(donutConfig);
        break;
      }
      case ChartTypes.donutMeter: {
        const donutMeterConfig = {
          ...chartConfig,
          type: 'donut-meter',
          data: [
            { id: 0, value: this.donutMeterChartData, label: 'percent', color: CHART_CONSTANTS.chartPalette.indigoA200 },
            { id: 1, value: 100 - this.donutMeterChartData, color: CHART_CONSTANTS.chartPalette.grey400 }
          ]
        } as IPieChartConfig;
        PieChartService.buildPieChart(donutMeterConfig);
        break;
      }
      case ChartTypes.line: {
        const lineChartData = this.lineChartData?.map((d, i) => {
          return {
            id: i,
            label: `Item ${i}`,
            data: d,
            color: this.chartPalette[i % this.chartPalette.length]
          } as ILineChartData;
        });
        const lineConfig = {
          ...chartConfig,
          data: lineChartData
        } as ILineChartConfig;
        LineChartService.buildLineChart(lineConfig);
        this.legendData = lineChartData?.map((d, i) => ({ id: d.id, color: d.color, value: null, label: d.data[0].label })) as any[];
        break;
      }
      case ChartTypes.pie: {
        const pieConfig = {
          ...chartConfig,
          type: 'pie'
        } as IPieChartConfig;
        PieChartService.buildPieChart(pieConfig);
        break;
      }
      case ChartTypes.treemap: {
        TreemapChartService.buildTreemapChart(chartConfig);
        break;
      }
      case ChartTypes.tree: {
        const treeConfig = {
          ...chartConfig,
          data: this.treeChartData,
          node: {
            size: { width: 200, height: 48 },
            padding: 8,
            margin: 48
          },
          palette: ['#6f74dd', '#8e99f3', '#d1d9ff', '#ede7f6', '#e3f2fd', '#e0f2f1', '#f1f8e9', '#eceff1', '#f5f5f5'],
          levelLabels: ['Level one', 'Level two', 'Level three'],
          zoomScale: { min: 0.5, max: 1 },
          selectedCallback: (data, parentIds, element) => {
            console.log(`selectedCallback: ${data.id}`);
            if (data.children) {
              if (Array.isArray(data.children)) {
                data.children = true;
              } else {
                const childCount = this.randomNumber(5, 10);
                data.children = [];
                for (let i = 0; i < childCount; i++) {
                  data.children.push({ id: `${parentIds.length + 1}-${i}`, label: `Item ${parentIds.length + 1} - ${i}`, children: this.randomNumber(0, 10) ? true : false });
                }
              }
              this.drawChart();
            }
          }
        } as any;
        TreeChartService.buildTreeChart(treeConfig);
        break;
      }
      case ChartTypes.gantt: {
        const ganttConfig = {
          ...chartConfig,
          // categoryTimeSpan: 'year',
          data: [
            {
              id: 0,
              label: 'Item 01',
              startDate: new Date(2024, 0, 1),
              endDate: new Date(2024, 0, 31),
              progress: 10
            },
            {
              id: 1,
              label: 'Item 02',
              startDate: new Date(2024, 1, 1),
              endDate: new Date(2024, 1, 10),
              progress: 20
            },
            {
              id: 2,
              label: 'Item 03',
              startDate: new Date(2024, 1, 1),
              endDate: new Date(2024, 1, 20),
              progress: 30
            },
            {
              id: 3,
              label: 'Item 04',
              startDate: new Date(2024, 3, 15),
              endDate: new Date(2024, 8, 20),
              progress: 40,
              color: 'red'
            },
            {
              id: 4,
              label: 'Item 05',
              description: 'Item 05 description goes here, blah blah blah.  This description should wrap at 320px',
              startDate: new Date(2024, 10, 1),
              endDate: new Date(2025, 10, 30),
              progress: 90
            }
          ]
        } as IGanttChartConfig;
        GanttChartService.buildGanttChart(ganttConfig);
        break;
      }
    }
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private selectedCallback(data: unknown, node: unknown) {
    console.log(data);
    console.log(node);
  }

  private hoverCallback(isHovered: boolean, data: unknown, node: unknown) {
    console.log(data);
    console.log(node);
  }
}

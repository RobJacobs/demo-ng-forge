import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, debounceTime, fromEvent, skip, takeUntil } from 'rxjs';
import {
  BarChartService,
  BubbleChartService,
  LineChartService,
  PieChartService,
  ChartUtils,
  IBarChartConfig,
  IChartConfig,
  IPieChartConfig,
  ILineChartConfig,
  ILineChartData,
  TreemapChartService,
  ITreeChartConfig,
  TreeChartService,
  ITreeChartData
} from './lib';

interface IChartItem {
  id: number;
  value: any;
  label: string;
  category: any;
}

@Component({
  selector: 'app-charts-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  @ViewChild('chartContainer', { static: true })
  private chartContainer: ElementRef;
  private chartPalette = Object.keys(ChartUtils.chartPalette).map(function (key) { return ChartUtils.chartPalette[key]; });

  #chartType: 'bar' | 'bubble' | 'donut' | 'donut-meter' | 'line' | 'pie' | 'treemap' | 'tree';
  @Input()
  public set chartType(value: 'bar' | 'bubble' | 'donut' | 'donut-meter' | 'line' | 'pie' | 'treemap' | 'tree') {
    this.#chartType = value;
    this.setChartData('create');
    this.initializeChartContainer();
    requestAnimationFrame(() => {
      this.drawChart();
    });
    if (this.#chartType === 'donut-meter' || this.#chartType === 'treemap' || this.#chartType === 'tree') {
      this.showLegend = false;
    } else {
      this.showLegend = true
    }
  }
  public get chartType(): 'bar' | 'bubble' | 'donut' | 'donut-meter' | 'line' | 'pie' | 'treemap' | 'tree' {
    return this.#chartType;
  }
  public chartData: IChartItem[];
  public lineChartData: IChartItem[][];
  public treeChartData: ITreeChartData;
  public legendData: { id: number; value: any; label: string; color: string; }[];
  public showLegend = false;

  public ngOnInit() {
    fromEvent(window, 'resize').pipe(
      takeUntil(this.unsubscribe),
      debounceTime(100)
    ).subscribe(() => this.drawChart());
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
  }

  public onAction(action: 'add' | 'update' | 'delete') {
    this.setChartData(action);
    this.drawChart();
  }

  private initializeChartContainer() {
    (this.chartContainer.nativeElement as HTMLElement).querySelector('svg')?.remove();
    const chartElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    (this.chartContainer.nativeElement as HTMLElement).appendChild(chartElement);
  }

  private setChartData(action: 'create' | 'update' | 'add' | 'delete') {
    if (this.chartType === 'donut-meter') {
      return;
    }

    switch (action) {
      // case 'update':
      case 'create': {
        if (this.chartType === 'line') {
          this.lineChartData = [this.getData(10)];
        } else if (this.chartType === 'tree') {
          this.treeChartData = {
            id: '0', children: [
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
        if (this.chartType === 'line') {
          this.lineChartData.forEach((d, i) => {
            this.getData(d.length).forEach((dd, i) => {
              d[i].value = dd.value;
              // d[i].category = dd.category;
            });
          });
        } else {
          this.getData(this.chartData.length).forEach((d, i) => {
            this.chartData[i].value = d.value;
            // this.chartData[i].category = d.category;
          });
        }
        break;
      }
      case 'add': {
        if (this.chartType === 'line') {
          this.lineChartData.push(this.getData(10));
          // this.lineChartData.forEach((d, i) => {
          //   let maxId = Math.max(...d.map(dd => dd.id)) || 0;
          //   maxId++;
          //   // TODO
          //   d[i] = d.concat(this.getData(10, maxId));
          // });
        } else {
          let maxId = Math.max(...this.chartData.map(d => d.id)) || 0;
          maxId++;
          this.chartData = this.chartData.concat(this.getData(10, maxId));
        }
        break;
      }
      case 'delete': {
        if (this.chartType === 'line') {
          this.lineChartData.pop();
          // console.log(this.lineChartData);
        } else {
          if (this.chartData.length > 10) {
            this.chartData = this.chartData.slice(0, this.chartData.length - 10);
          }
        }
        break;
      }
    }

    if (this.chartType === 'bubble' || this.chartType === 'donut' || this.chartType === 'pie' || this.chartType === 'treemap') {
      this.chartData = this.chartData.sort((a, b) => { return a.category - b.category; });
    }
  }

  private getData(length: number, startId = 0): IChartItem[] {
    let data: IChartItem[] = [];
    const date = Date.now();
    for (let i = 0; i < length; i++) {
      // data.push({id: i + startId, value: randomNumber(1, 100), label: 'Item ' + (i + startId), category: randomDate()});
      data.push({ id: i + startId, value: this.randomNumber(0, 1000), label: 'Item ' + (i + startId), category: this.randomNumber(0, 100) });
      // const category = date - this.randomNumber(1, 1000000000000);
      // data.push({ id: i + startId, value: this.randomNumber(0, 10000), label: 'Item ' + (i + startId), category: category });
      // data.push({id: i + startId, value: randomNumber(1, 2000), label: 'Item ' + (i + startId), category: categories[randomNumber(0, 9)]});
      // data.push({id: i + startId, value: i * 100, label: 'Item ' + (i + startId), category: randomNumber(0, 100)});
    }

    return data.sort((a, b) => { return a.category - b.category; });
  }

  private drawChart() {
    this.legendData = this.chartData.map((d, i) => ({ id: d.id, label: d.label, value: d.value, color: this.chartPalette[i % this.chartPalette.length] }));

    const chartConfig = {
      container: this.chartContainer.nativeElement.querySelector('svg'),
      data: this.chartData.map((d, i) => ({ ...d, color: this.chartPalette[i % this.chartPalette.length] })),
      palette: this.chartPalette,
      // selectedCallback: this.selectedCallback,
      // hoverCallback: this.hoverCallback
    } as IChartConfig;

    chartConfig.container.setAttribute('width', '0');
    chartConfig.container.setAttribute('height', '0');

    switch (this.chartType) {
      case 'bar': {
        const barConfig = {
          ...chartConfig,
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
      case 'bubble': {
        BubbleChartService.buildBubbleChart(chartConfig);
        break;
      }
      case 'donut': {
        const donutConfig = {
          ...chartConfig,
          type: 'donut',
        } as IPieChartConfig;
        PieChartService.buildPieChart(donutConfig);
        break;
      }
      case 'donut-meter': {
        const value = this.randomNumber(20, 80);
        const donutMeterConfig = {
          ...chartConfig,
          type: 'donut-meter',
          data: [
            { id: 0, value: value, label: 'percent', color: ChartUtils.chartPalette.indigoA200 },
            { id: 1, value: 100 - value, color: ChartUtils.chartPalette.grey400 }
          ]
        } as IPieChartConfig;
        PieChartService.buildPieChart(donutMeterConfig);
        break;
      }
      case 'line': {
        const lineChartData: ILineChartData[] = this.lineChartData.map((d, i) => {
          return {
            id: i,
            label: `Item ${i}`,
            data: d,
            color: this.chartPalette[i % this.chartPalette.length]
          }
        });
        const lineConfig = {
          container: chartConfig.container,
          data: lineChartData
        } as ILineChartConfig;
        LineChartService.buildLineChart(lineConfig);
        this.legendData = lineChartData.map((d, i) => ({ id: d.id, color: d.color, value: null, label: d.data[0].label }));
        break;
      }
      case 'pie': {
        const pieConfig = {
          ...chartConfig,
          type: 'pie'
        } as IPieChartConfig;
        PieChartService.buildPieChart(pieConfig);
        break;
      }
      case 'treemap': {
        TreemapChartService.buildTreemapChart(chartConfig);
        break;
      }
      case 'tree': {
        const treeConfig = {
          // ...chartConfig,
          container: chartConfig.container,
          data: this.treeChartData,
          node: {
            size: { width: 200, height: 48 },
            padding: 8,
            margin: 48
          },
          palette: ['#6f74dd', '#8e99f3', '#d1d9ff', '#ede7f6', '#e3f2fd', '#e0f2f1', '#f1f8e9', '#eceff1', '#f5f5f5'],
          levelLabels: ['Level one', 'Level two', 'Level three'],
          zoomScale: { min: .5, max: 1 },
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
        } as ITreeChartConfig;
        TreeChartService.buildTreeChart(treeConfig);
        break;
      }
    }

  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private selectedCallback(data, node) {
    console.log(data);
    console.log(node);
  }

  private hoverCallback(isHovered, data, node) {
    console.log(data);
    console.log(node);
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { select, format, timeFormat, axisBottom, scaleLinear, axisLeft, line } from 'd3';
import { interpolatePath } from 'd3-interpolate-path';
import { isArray } from '@tylertech/forge-core';
import { ChartUtils, IChartData, IChartConfig, CHART_CONSTANTS } from '../index';

export interface ILineChartConfig extends IChartConfig<ILineChartData> {
  categoryTicks?: number | number[];
  categoryTickValues?: string[];
  categoryFormat?: string;
  categoryDateFormat?: string;
  valueTicks?: number | number[];
  valueTickValues?: string[];
}

export interface ILineChartData {
  id: number;
  data: IChartData[];
  color: string;
}

export class LineChartService {
  public static buildLineChart(config: ILineChartConfig): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      config.categoryTicks = config.categoryTicks || 10;
      config.valueTicks = config.valueTicks || 5;

      const data = config.data.map((d) => d.data).reduce((a: any, b: any) => a.concat(b), []);
      const values = data.map((d: any) => d.value);
      const categories = data
        .map((d: any) => parseFloat(d.category))
        .filter((d: any, i: any, s: any) => s.indexOf(d) === i)
        .sort((a: any, b: any) => a - b);
      const valueMin = Math.min(...values) || 0;
      const valueMax = Math.max(...values) || 0;
      const categoryMin = Math.min(...categories) || 0;
      const categoryMax = Math.max(...categories) || 0;
      const container = select(config.container);
      const linePadding = 2;
      const chartMargin = {
        top: 16,
        bottom: 16,
        left: 16 + ChartUtils.getTextWidth(valueMax.toString(), `${CHART_CONSTANTS.strings.FONT_SIZE_SMALL} ${CHART_CONSTANTS.strings.FONT_FAMILY}`),
        right: 16
      };
      const chartSize = ChartUtils.chartSize(config.container);
      const xScale = ChartUtils.xScale([categoryMin, categoryMax], chartSize.width - chartMargin.left - chartMargin.right);
      const xAxis = axisBottom(xScale);

      if (isArray(config.categoryTickValues)) {
        const categoryScale = scaleLinear()
          .domain([0, (config.categoryTickValues as []).length - 1])
          .range([categoryMin, categoryMax]);
        config.categoryTicks = [];
        config.categoryTickValues?.forEach((_c, i) => {
          (config.categoryTicks as number[]).push(categoryScale(i) as number);
        });

        xAxis.tickFormat((_d: any, i: number) => {
          return (config.categoryTickValues as [])[i] || '';
        });
      }

      if (isArray(config.categoryTicks)) {
        xAxis.tickValues(config.categoryTicks as any[]);
      } else {
        xAxis.ticks(config.categoryTicks);
      }

      if (config.categoryFormat) {
        xAxis.tickFormat(format(config.categoryFormat) as any);
      }

      if (config.categoryDateFormat) {
        xAxis.tickFormat(timeFormat(config.categoryDateFormat) as any);
      }

      const yScale = ChartUtils.yScale([valueMin, valueMax], chartSize.height - chartMargin.top - chartMargin.bottom);
      const yAxis = axisLeft(yScale).tickSize(-(chartSize.width - chartMargin.left - chartMargin.right));

      if (isArray(config.valueTickValues)) {
        const valueScale = scaleLinear()
          .domain([0, (config.valueTickValues as []).length - 1])
          .range([valueMin, valueMax]);
        config.valueTicks = [];
        config.valueTickValues?.forEach((_v, i) => {
          (config.valueTicks as number[]).push(valueScale(i) as number);
        });

        yAxis.tickFormat((_d: any, i: number) => {
          return (config.valueTickValues as [])[i] || '';
        });
      }

      if (isArray(config.valueTicks)) {
        yAxis.tickValues(config.valueTicks as any[]);
      } else {
        yAxis.ticks(config.valueTicks);
      }

      if (config.valueFormat) {
        yAxis.tickFormat(format(config.valueFormat) as any);
      }

      if (config.valueDateFormat) {
        yAxis.tickFormat(timeFormat(config.valueDateFormat) as any);
      }

      const chart = line()
        .x((d: any) => xScale(d.category))
        .y((d: any) => yScale(d.value));
      const enterChart = line()
        .x((d: any) => xScale(d.category))
        .y(chartSize.height - chartMargin.top);

      let rootNode = container.select(`g.${CHART_CONSTANTS.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(CHART_CONSTANTS.classes.CHART_ROOT, true) as any;
        rootNode.append('g').classed(CHART_CONSTANTS.classes.CHART_XAXIS, true);
        if (isArray(config.categoryTickValues)) {
          rootNode.select(`g.${CHART_CONSTANTS.classes.CHART_XAXIS}`).classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__xaxis--align-boundry-ticks`, true);
        }
        rootNode.append('g').classed(CHART_CONSTANTS.classes.CHART_YAXIS, true);
        rootNode.append('g').classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__line`, true);
      }

      container.attr('width', chartSize.width);
      container.attr('height', chartSize.height);
      container
        .select(`g.${CHART_CONSTANTS.classes.CHART_XAXIS}`)
        .attr('transform', `translate(${chartMargin.left}, ${chartSize.height - chartMargin.bottom})`)
        .call(xAxis as any);
      container
        .select(`g.${CHART_CONSTANTS.classes.CHART_YAXIS}`)
        .attr('transform', `translate(${chartMargin.left}, ${chartMargin.top})`)
        .call(yAxis as any);

      const chartNode = rootNode.select(`g.${CHART_CONSTANTS.classes.CHART_PREFIX}__line`);
      chartNode.attr('transform', `translate(${chartMargin.left + linePadding}, ${chartMargin.top})`);

      config.data.forEach((l, index) => {
        const nodes = chartNode.selectAll(`path.path-${l.id}`).data([l] as any, (d: any) => d.id as any);

        nodes.exit().remove();

        const enterNodes = nodes.enter();

        enterNodes
          .append('path')
          .classed(`path-${l.id}`, true)
          .style('fill', 'none')
          .style('stroke-linejoin', 'round')
          .style('stroke-linecap', 'round')
          .attr('d', (d: any) => enterChart(d.data))
          .merge(nodes as any)
          .attr('stroke', (d) => (d as any).color)
          .transition()
          .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
          .call(ChartUtils.transitionsComplete as any, () => {
            if (index === config.data.length - 1) {
              resolve();
            }
          })
          .attrTween('d', (d, _i, element) => {
            const current = (element[0] as SVGPathElement).getAttribute('d') as string;
            const next = chart((d as any).data) as string;
            return interpolatePath(current, next);
          });
      });

      const pathNodes = chartNode.selectAll('path').nodes();
      if (pathNodes.length > config.data.length) {
        for (let i = pathNodes.length; i > config.data.length; i--) {
          (pathNodes[i - 1] as HTMLElement)?.remove();
        }
      }
    });
  }
}

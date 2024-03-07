/* eslint-disable @typescript-eslint/no-explicit-any */
import { select, format, timeFormat, axisBottom, scaleLinear, axisLeft, scaleBand } from 'd3';
import { isArray, isDefined } from '@tylertech/forge-core';
import { ChartUtils, IChartData, IChartConfig } from './chart-utils';
import { CHART_CONSTANTS, CHART_CONSTANTS as constants } from './chart-constants';

export interface IBarChartConfig extends IChartConfig {
  valueTicks?: number | number[];
  valueTickValues?: string[];
  categoryTickValues?: string[];
  barWidth?: number;
  barPadding?: number;
}

export class BarChartService {

  public static buildBarChart(config: IBarChartConfig): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      config.valueTicks = config.valueTicks || 5;

      const minValue = 0;
      const maxValue = Math.max(...config.data.map(d => d.value as number)) || 0;
      const container = select(config.container);
      const colorScale = config.palette && config.palette.length ? ChartUtils.colorScale(config.data.map(d => d.value), config.palette.length === 2 ? config.palette : config.palette.length) : undefined;

      const valueFormat = config.valueFormat ? format(config.valueFormat) : config.valueDateFormat ? timeFormat(config.valueDateFormat) : undefined;
      const valueTickText = isArray(config.valueTickValues) ? config.valueTickValues : config.data.map(d => isDefined(valueFormat) ? (valueFormat as any)(d.value) : d.value.toString());
      const barPadding = isDefined(config.barPadding) ? config.barPadding as number : 20;
      const barWidth = isDefined(config.barWidth) ? config.barWidth as number : 20;
      const chartMargin = {
        top: 16,
        bottom: 16,
        left: 16 + ChartUtils.getMaxTextWidth(valueTickText as string[], `${constants.strings.FONT_SIZE_SMALL} ${constants.strings.FONT_FAMILY}`),
        right: 16
      };
      const chartWidth = config.data.length * (barWidth + barPadding);
      const size = ChartUtils.chartSize(config.container);
      const yScale = ChartUtils.yScale(config.data.map(d => d.value), size.height - chartMargin.top - chartMargin.bottom);
      const yAxis = axisLeft(scaleLinear().domain([minValue, maxValue]).range([size.height - chartMargin.top - chartMargin.bottom, 0])).ticks(config.valueTicks).tickSize(-chartWidth);

      if (isArray(config.valueTickValues)) {
        const valueScale = scaleLinear().domain([0, (config.valueTickValues as []).length - 1]).range([minValue, maxValue]);
        config.valueTicks = [];
        config.valueTickValues?.forEach((v, i) => {
          (config.valueTicks as number[]).push(valueScale(i) as number);
        });

        yAxis.tickFormat((d: any, i: number) => {
          return (config.valueTickValues as [])[i] || '';
        });
      }

      if (isArray(config.valueTicks)) {
        yAxis.tickValues(config.valueTicks as any[]);
      } else {
        yAxis.ticks(config.valueTicks);
      }

      if (config.valueFormat) {
        yAxis.tickFormat(format(config.valueFormat));
      }

      if (config.valueDateFormat) {
        yAxis.tickFormat(timeFormat(config.valueDateFormat) as any);
      }

      let rootNode = container.select(`g.${constants.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(constants.classes.CHART_ROOT, true) as any;
        rootNode.append('g').classed(constants.classes.CHART_YAXIS, true);
        rootNode.append('g').classed(constants.classes.CHART_XAXIS, true);
        rootNode.append('g').classed(`${constants.classes.CHART_PREFIX}__chart`, true).classed(`${constants.classes.CHART_PREFIX}__bar`, true);
      }

      const minContainerWidth = chartWidth + chartMargin.left;
      // container.attr('width', minContainerWidth > size.width ? minContainerWidth : size.width);
      container.attr('width', chartWidth + chartMargin.left);
      container.attr('height', size.height);
      container.select(`g.${constants.classes.CHART_YAXIS}`).attr('transform', `translate(${chartMargin.left}, ${chartMargin.top})`).call(yAxis as any); // TODO
      container.select(`g.${constants.classes.CHART_XAXIS}`).attr('transform', `translate(${chartMargin.left}, ${size.height - chartMargin.bottom})`);
      if (isArray(config.categoryTickValues) && config.categoryTickValues?.length) {
        const xAxis = axisBottom(scaleBand().domain(config.categoryTickValues as string[]).range([0, chartWidth]));
        container.select(`g.${constants.classes.CHART_XAXIS}`).call(xAxis as any); // TODO
      }

      const chartNode = rootNode.select(`g.${constants.classes.CHART_PREFIX}__bar`);
      chartNode.attr('transform', `translate(${chartMargin.left}, -${chartMargin.bottom - chartMargin.top})`);

      const nodes = chartNode.selectAll('rect').data(config.data, (d: any) => d.id);

      nodes.exit()
        .transition()
        .duration(constants.numbers.TRANSITION_DURATION)
        .attr('y', (d: any) => size.height - chartMargin.top)
        .attr('height', 0);
      nodes.exit().transition().delay(constants.numbers.TRANSITION_DURATION).remove();

      const enterNodes = nodes.enter();

      enterNodes.append('rect')
        .attr('x', (d: IChartData, i: number) => i * (barWidth + barPadding) + (barPadding / 2))
        .attr('y', size.height - chartMargin.top)
        .attr('width', (d: IChartData) => barWidth)
        .attr('height', 0)
        .merge(nodes as any)
        .attr('id', (d: any) => `${CHART_CONSTANTS.classes.CHART_PREFIX}__node-${d.id}`)
        .transition()
        .call(ChartUtils.transitionsComplete as any, () => {
          resolve();
        })
        .duration(constants.numbers.TRANSITION_DURATION)
        .attr('y', (d: IChartData) => d.value ? yScale(d.value) + chartMargin.bottom : 0)
        .attr('height', (d: IChartData) => d.value ? size.height - chartMargin.top - chartMargin.bottom - yScale(d.value) : 0)
        .attr('fill', (d: IChartData) => {
          if (d.color) {
            return d.color;
          } else if (colorScale && d.value && config.palette) {
            if (config.palette.length === 2) {
              return colorScale(d.value);
            } else {
              return config.palette[colorScale(d.value)];
            }
          } else {
            return '#fff';
          }
        });

      if (config.selectedCallback) {
        enterNodes.selectAll('rect').on('click', (e, d) => (config.selectedCallback as any)(d as IChartData, e.target as SVGElement));
      }

      if (config.hoverCallback) {
        enterNodes.selectAll('rect').on('mouseenter', (e, d) => (config.hoverCallback as any)(true, d as IChartData, e.target as SVGElement));
        enterNodes.selectAll('rect').on('mouseleave', (e, d) => (config.hoverCallback as any)(false, d as IChartData, e.target as SVGElement));
      }
    });

    return promise;
  }
}

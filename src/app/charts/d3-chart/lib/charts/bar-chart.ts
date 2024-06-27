/* eslint-disable @typescript-eslint/no-explicit-any */
import { select, format, timeFormat, axisBottom, scaleLinear, axisLeft, scaleBand } from 'd3';
import { isArray, isDefined } from '@tylertech/forge-core';
import { ChartUtils, IChartData, IChartConfig, CHART_CONSTANTS } from '../index';

export interface IBarChartConfig extends IChartConfig {
  valueTicks?: number | number[];
  valueTickValues?: string[];
  categoryTickValues?: string[];
  barWidth?: number;
  barPadding?: number;
}

export class BarChartService {

  public static buildBarChart(config: IBarChartConfig): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      config.valueTicks = config.valueTicks || 5;

      const valueMin = 0;
      const valueMax = Math.max(...config.data.map(d => d.value as number)) || 0;
      const container = select(config.container);
      const colorScale = config.palette && config.palette.length ? ChartUtils.colorScale(config.data.map(d => d.value), config.palette.length === 2 ? config.palette : config.palette.length) : undefined;

      const valueFormat = config.valueFormat ? format(config.valueFormat) : config.valueDateFormat ? timeFormat(config.valueDateFormat) : undefined;
      const valueTickText = isArray(config.valueTickValues) ? config.valueTickValues : config.data.map(d => isDefined(valueFormat) ? (valueFormat as any)(d.value) : d.value.toString());
      const barPadding = isDefined(config.barPadding) ? config.barPadding as number : 20;
      const barWidth = isDefined(config.barWidth) ? config.barWidth as number : 20;
      const chartMargin = {
        top: 16,
        bottom: 16,
        left: 16 + ChartUtils.getMaxTextWidth(valueTickText as string[], `${CHART_CONSTANTS.strings.FONT_SIZE_SMALL} ${CHART_CONSTANTS.strings.FONT_FAMILY}`),
        right: 16
      };
      const chartSize = ChartUtils.chartSize(config.container);
      chartSize.width = config.data.length * (barWidth + barPadding);
      const yScale = ChartUtils.yScale(config.data.map(d => d.value), chartSize.height - chartMargin.top - chartMargin.bottom).nice();
      const yAxis = axisLeft(yScale).ticks(config.valueTicks).tickSize(-chartSize.width);

      if (isArray(config.valueTickValues)) {
        const valueScale = scaleLinear().domain([0, (config.valueTickValues as []).length - 1]).range([valueMin, valueMax]);
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

      if (config.valueFormat?.length) {
        yAxis.tickFormat(format(config.valueFormat) as any);
      }

      if (config.valueDateFormat) {
        yAxis.tickFormat(timeFormat(config.valueDateFormat) as any);
      }

      let rootNode = container.select(`g.${CHART_CONSTANTS.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(CHART_CONSTANTS.classes.CHART_ROOT, true) as any;
        rootNode.append('g').classed(CHART_CONSTANTS.classes.CHART_YAXIS, true);
        rootNode.append('g').classed(CHART_CONSTANTS.classes.CHART_XAXIS, true);
        rootNode.append('g').classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__chart`, true).classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__bar`, true);
      }

      container.attr('width', chartSize.width + chartMargin.left);
      container.attr('height', chartSize.height);
      container.select(`g.${CHART_CONSTANTS.classes.CHART_YAXIS}`).attr('transform', `translate(${chartMargin.left}, ${chartMargin.top})`).call(yAxis as any); // TODO
      container.select(`g.${CHART_CONSTANTS.classes.CHART_XAXIS}`).attr('transform', `translate(${chartMargin.left}, ${chartSize.height - chartMargin.bottom})`);
      if (isArray(config.categoryTickValues) && config.categoryTickValues?.length) {
        const xAxis = axisBottom(scaleBand().domain(config.categoryTickValues as string[]).range([0, chartSize.width]));
        container.select(`g.${CHART_CONSTANTS.classes.CHART_XAXIS}`).call(xAxis as any); // TODO
      }

      const chartNode = rootNode.select(`g.${CHART_CONSTANTS.classes.CHART_PREFIX}__bar`);
      chartNode.attr('transform', `translate(${chartMargin.left}, -${chartMargin.bottom - chartMargin.top})`);

      const nodes = chartNode.selectAll('rect').data(config.data, (d: any) => d.id);

      nodes.exit()
        .transition()
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('y', (_d: any) => chartSize.height - chartMargin.top)
        .attr('height', 0);
      nodes.exit().transition().delay(CHART_CONSTANTS.numbers.TRANSITION_DURATION).remove();

      const enterNodes = nodes.enter();

      enterNodes.append('rect')
        .attr('x', (_d: IChartData, i: number) => i * (barWidth + barPadding) + (barPadding / 2))
        .attr('y', chartSize.height - chartMargin.top)
        .attr('width', (_d: IChartData) => barWidth)
        .attr('height', 0)
        .merge(nodes as any)
        .attr('id', (d: any) => `${CHART_CONSTANTS.classes.CHART_PREFIX}__node-${d.id}`)
        .transition()
        .call(ChartUtils.transitionsComplete as any, () => {
          resolve();
        })
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('y', (d: IChartData) => d.value ? yScale(d.value) + chartMargin.bottom : 0)
        .attr('height', (d: IChartData) => d.value ? chartSize.height - chartMargin.top - chartMargin.bottom - yScale(d.value) : 0)
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
  }
}

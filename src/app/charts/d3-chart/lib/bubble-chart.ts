/* eslint-disable @typescript-eslint/no-explicit-any */
import { select, format, timeFormat, hierarchy, pack } from 'd3';
import { ChartUtils, IChartConfig } from './chart-utils';
import { CHART_CONSTANTS } from './chart-constants';

export class BubbleChartService {
  public static buildBubbleChart(config: IChartConfig): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      const container = select(config.container);
      const colorScale = config.palette && config.palette.length ? ChartUtils.colorScale(config.data.map(d => d.value), config.palette.length === 2 ? config.palette : config.palette.length) : undefined;
      const valueFormat = config.valueFormat ? format(config.valueFormat) : config.valueDateFormat ? timeFormat(config.valueDateFormat) : undefined;
      const nodePadding = 10;
      const chartSize = ChartUtils.chartSize(config.container);
      const chartData = hierarchy({ children: config.data }).sum((d: any) => d.value).sort((a: any, b: any) => b.value - a.value);
      const chart = pack().size([Math.min(...[chartSize.width, chartSize.height]), Math.min(...[chartSize.width, chartSize.height])]);
      chart(chartData as any);

      let rootNode = container.select(`g.${CHART_CONSTANTS.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(CHART_CONSTANTS.classes.CHART_ROOT, true) as any;
        rootNode.append('g').classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__chart`, true).classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__bubble`, true);
      }

      container.attr('width', chartSize.width);
      container.attr('height', chartSize.height);

      const chartNode = rootNode.select(`g.${CHART_CONSTANTS.classes.CHART_PREFIX}__bubble`);
      const nodes = chartNode.selectAll('g').data(chartData.leaves(), (d: any) => d.data.id);

      nodes.exit().select('text').remove();
      nodes.exit().select('circle').transition().duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION).attr('r', 0);
      nodes.exit().transition().delay(CHART_CONSTANTS.numbers.TRANSITION_DURATION).remove();

      const enterNodes = nodes.enter().append('g');

      enterNodes.append('circle');
      enterNodes.append('clipPath').attr('id', (d: any) => `${CHART_CONSTANTS.classes.CHART_CLIP}-${d.data.id}`).append('circle');
      enterNodes.append('text')
        .classed(CHART_CONSTANTS.classes.CHART_TEXT, true)
        .attr('clip-path', (d: any) => `url(#${CHART_CONSTANTS.classes.CHART_CLIP}-${d.data.id})`)
        .style('text-anchor', 'middle');

      if (config.selectedCallback) {
        enterNodes.on('click', (e, d) => (config.selectedCallback as any)(d.data as any, e.target.parentElement as SVGElement));
      }

      if (config.hoverCallback) {
        enterNodes.on('mouseenter', (e, d) => (config.hoverCallback as any)(true, d.data as any, e.target as SVGElement));
        enterNodes.on('mouseleave', (e, d) => (config.hoverCallback as any)(false, d.data as any, e.target as SVGElement));
      }

      const mergeNodes = enterNodes.merge(nodes as any);

      mergeNodes.select('text')
        .style('display', 'none')
        .attr('y', '.35em')
        .text((d: any) => {
          return valueFormat ? valueFormat(d.data.value) : d.data.value;
        });

      mergeNodes.transition()
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('transform', (d: any) => 'translate(' + d.x + ',' + d.y + ')');

      mergeNodes.select('g > circle')
        .attr('fill', (d: any) => {
          if (d.data.color) {
            return d.data.color;
          } else if (colorScale && d.value && config.palette) {
            if (config.palette.length === 2) {
              return colorScale(d.value);
            } else {
              return config.palette[colorScale(d.value)];
            }
          } else {
            return '#fff';
          }
        })
        .attr('id', (d: any) => `${CHART_CONSTANTS.classes.CHART_PREFIX}__node-${d.data.id}`)
        .transition()
        .call(ChartUtils.transitionsComplete as any, () => {
          mergeNodes.select('clipPath > circle')
            .attr('r', (d: any) => d.r > nodePadding / 2 ? d.r - nodePadding / 2 : 0);
          mergeNodes.select('text').style('display', null);
          resolve();
        })
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('r', (d: any) => d.r);
    });
  }
}

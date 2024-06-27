/* eslint-disable @typescript-eslint/no-explicit-any */
import { select, hierarchy, format, timeFormat, treemap } from 'd3';
import { ChartUtils, IChartConfig, CHART_CONSTANTS } from '../index';

export class TreemapChartService {

  public static buildTreemapChart(config: IChartConfig): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      const container = select(config.container);
      const colorScale = config.palette && config.palette.length ? ChartUtils.colorScale(config.data.map(d => d.value), config.palette.length === 2 ? config.palette : config.palette.length) : undefined;
      const valueFormat = config.valueFormat ? format(config.valueFormat) : config.valueDateFormat ? timeFormat(config.valueDateFormat) : undefined;
      const nodePadding = 8;
      const chartSize = ChartUtils.chartSize(config.container);
      const chartData = hierarchy({ children: config.data }).sum((d: any) => d.value).sort((a: any, b: any) => b.value - a.value);
      const chart = treemap().size([chartSize.width, chartSize.height]);
      chart(chartData as any);

      let rootNode = container.select(`g.${CHART_CONSTANTS.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(CHART_CONSTANTS.classes.CHART_ROOT, true) as any;
        rootNode.append('g').classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__treemap`, true);
      }

      container.attr('width', chartSize.width);
      container.attr('height', chartSize.height);

      const chartNode = rootNode.select(`g.${CHART_CONSTANTS.classes.CHART_PREFIX}__treemap`);

      const nodes = chartNode.selectAll('g').data(chartData.leaves(), (d: any) => d.data.id);

      nodes.exit().select('text').remove();
      nodes.exit().select('rect').transition().duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION).attr('width', 0).attr('height', 0);
      nodes.exit().transition().delay(CHART_CONSTANTS.numbers.TRANSITION_DURATION).remove();

      const enterNodes = nodes.enter().append('g');
      enterNodes.append('rect');
      enterNodes.append('clipPath').attr('id', (d: any) => `${CHART_CONSTANTS.classes.CHART_CLIP}-${d.data.id}`).append('rect');
      enterNodes.append('text')
        .classed(CHART_CONSTANTS.classes.CHART_TEXT, true)
        .attr('clip-path', (d: any) => `url(#${CHART_CONSTANTS.classes.CHART_CLIP}-${d.data.id})`)
        .attr('dx', 5)
        .attr('dy', 20);

      if (config.selectedCallback) {
        enterNodes.on('click', (e, d) => (config.selectedCallback as any)(d.data as any, e.target.parentElement as SVGElement));
      }

      if (config.hoverCallback) {
        enterNodes.on('mouseenter', (e, d) => (config.hoverCallback as any)(true, d.data as any, e.target as SVGElement));
        enterNodes.on('mouseleave', (e, d) => (config.hoverCallback as any)(false, d.data as any, e.target as SVGElement));
      }

      const mergeNodes = enterNodes.merge(nodes as any);

      mergeNodes
        .transition()
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('transform', (d: any) => `translate(${d.x0}, ${d.y0})`);

      mergeNodes.select('text')
        .style('display', 'none')
        .text((d: any) => {
          return valueFormat ? valueFormat(d.data.value) : d.data.value;
        });

      mergeNodes.select('rect')
        .attr('fill', (d: any) => {
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
        })
        .style('stroke', '#fff')
        .attr('id', (d: any) => `${CHART_CONSTANTS.classes.CHART_PREFIX}__node-${d.data.id}`)
        .transition()
        .call(ChartUtils.transitionsComplete as any, () => {
          mergeNodes.select('clipPath > rect')
            .attr('x', (_d: any) => nodePadding / 2)
            .attr('y', (_d: any) => nodePadding / 2)
            .attr('width', (d: any) => d.x1 - d.x0 > nodePadding ? d.x1 - d.x0 - nodePadding : 0)
            .attr('height', (d: any) => d.y1 - d.y0 > nodePadding ? d.y1 - d.y0 - nodePadding : 0);
          mergeNodes.select('text').style('display', null);

          resolve();
        })
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('width', (d: any) => d.x1 - d.x0)
        .attr('height', (d: any) => d.y1 - d.y0);
    });
  }
}

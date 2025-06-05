/* eslint-disable @typescript-eslint/no-explicit-any */
import { select, format, timeFormat, arc, pie } from 'd3';
import { isDefined } from '@tylertech/forge-core';
import { ChartUtils, IChartConfig, CHART_CONSTANTS } from '../index';

export type PieChartType = 'pie' | 'donut' | 'donut-meter';

export interface IPieChartConfig extends IChartConfig {
  type: PieChartType;
  centerValue?: string;
  hideLabel?: boolean;
}

export class PieChartService {
  public static buildPieChart(config: IPieChartConfig): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      const lastAngles: any[] = [];
      const container = select(config.container);
      const colorScale =
        config.palette && config.palette.length
          ? ChartUtils.colorScale(
              config.data.map((d) => d.value),
              config.palette.length === 2 ? config.palette : config.palette.length
            )
          : undefined;
      const valueFormat = config.valueFormat ? format(config.valueFormat) : config.valueDateFormat ? timeFormat(config.valueDateFormat) : undefined;
      const chartSize = ChartUtils.chartSize(config.container);
      const radius = {
        outer: Math.min(chartSize.width, chartSize.height) / 2,
        inner: 0
      };
      if (config.type === 'donut' || config.type === 'donut-meter') {
        radius.inner = radius.outer - radius.outer * 0.35;
      }
      const chartArc = arc().outerRadius(radius.outer).innerRadius(radius.inner);
      const chart = pie()
        .value((d: any) => d.value)
        .sort(null);

      let rootNode = container.select(`g.${CHART_CONSTANTS.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(CHART_CONSTANTS.classes.CHART_ROOT, true) as any;
        rootNode.append('g').classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__${config.type}`, true);
      }

      container.attr('width', chartSize.width);
      container.attr('height', chartSize.height);

      const chartNode = rootNode.select(`g.${CHART_CONSTANTS.classes.CHART_PREFIX}__${config.type}`);
      chartNode.attr('transform', `translate(${radius.outer}, ${radius.outer})`);

      chartNode
        .selectAll('g')
        .select('path')
        .each((d: any) => {
          lastAngles[d.data.id] = {
            startAngle: d.startAngle,
            endAngle: d.endAngle
          };
        });

      const nodes = chartNode.selectAll('g').data(chart(config.data as any), (d: any) => d.data.id);

      nodes
        .exit()
        .select('path')
        .transition()
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attrTween('d', (d: any) => ChartUtils.arcTween(d, { startAngle: 0, endAngle: 0 }, chartArc));
      nodes.exit().transition().delay(CHART_CONSTANTS.numbers.TRANSITION_DURATION).remove();

      const enterNodes = nodes.enter().append('g');

      enterNodes.append('path');

      if (config.selectedCallback) {
        enterNodes.on('click', (e, d) => (config.selectedCallback as any)(d.data as any, e.target.parentElement as SVGElement));
      }

      if (config.hoverCallback) {
        enterNodes.on('mouseenter', (e, d) => (config.hoverCallback as any)(true, d.data as any, e.target as SVGElement));
        enterNodes.on('mouseleave', (e, d) => (config.hoverCallback as any)(false, d.data as any, e.target as SVGElement));
      }

      const mergeNodes = enterNodes.merge(nodes as any);

      mergeNodes
        .select('g > path')
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
          switch (config.type) {
            case 'donut-meter':
              if (!config.hideLabel) {
                let meterTextNode = chartNode.select('.' + CHART_CONSTANTS.classes.CHART_TEXT);
                if (!meterTextNode.node()) {
                  meterTextNode = chartNode
                    .append('text')
                    .style('fill', CHART_CONSTANTS.chartTheme.textHigh)
                    .style('text-anchor', 'middle')
                    .classed(CHART_CONSTANTS.classes.CHART_TEXT, true) as any;
                  meterTextNode.append('tspan').style('font-size', '2rem').classed(CHART_CONSTANTS.classes.CHART_TEXT_VALUE, true);
                  meterTextNode.append('tspan').attr('x', 0).attr('y', 0).attr('dy', '1.25em').classed(CHART_CONSTANTS.classes.CHART_TEXT_LABEL, true);
                }

                let centerValue = '';
                if (config.centerValue) {
                  centerValue = config.centerValue;
                } else {
                  if (valueFormat) {
                    centerValue = valueFormat(config.data[0].value as any);
                  } else {
                    centerValue = config.data[0].value.toString();
                  }
                }
                meterTextNode.select(`tspan.${CHART_CONSTANTS.classes.CHART_TEXT_VALUE}`).text(centerValue);
                meterTextNode
                  .select(`tspan.${CHART_CONSTANTS.classes.CHART_TEXT_LABEL}`)
                  .text(isDefined(config.data[0].label) ? (config.data[0].label as string) : '');
                break;
              }
          }
          resolve();
        })
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .style('stroke', '#fff')
        .attrTween('d', (d: any) => {
          return ChartUtils.arcTween(lastAngles[d.data.id] || { startAngle: 0, endAngle: 0 }, d, chartArc);
        });
    });
  }
}

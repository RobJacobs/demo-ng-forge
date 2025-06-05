import { axisTop, select, timeDay, timeMonth, timeWeek, timeYear } from 'd3';
import {
  format as dateFormat,
  max as dateMax,
  min as dateMin,
  isMonday as dateIsMonday,
  previousMonday as datePreviousMonday,
  isSunday as dateIsSunday,
  nextSunday as dateNextSunday,
  differenceInDays as dateDifferenceInDays,
  differenceInWeeks as dateDifferenceInWeeks,
  differenceInMonths as dateDifferenceInMonths
} from 'date-fns';
import { ChartUtils, IChartConfig, CHART_CONSTANTS } from '../index';

export interface IGanttChartConfig extends IChartConfig<IGanttChartData> {
  categoryTimeSpan?: 'year' | 'month' | 'week' | 'day';
}

export interface IGanttChartData {
  id: number;
  label: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  progress?: number;
  color?: string;
}

export class GanttChartService {
  public static buildGanttChart(config: IGanttChartConfig): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      let categoryMin = dateMin(config.data.map((d) => d.startDate));
      if (!dateIsMonday(categoryMin)) {
        categoryMin = datePreviousMonday(categoryMin);
      }
      let categoryMax = dateMax(config.data.map((d) => d.endDate));
      if (!dateIsSunday(categoryMax)) {
        categoryMax = dateNextSunday(categoryMax);
      }
      const container = select(config.container);
      let popoverNode: any;
      const barPadding = 16;
      const barHeight = 40;
      const chartMargin = {
        top: 16,
        bottom: 16,
        left: 16,
        right: 16
      };
      const chartSize = ChartUtils.chartSize(config.container);
      chartSize.height = config.data.length * (barHeight + barPadding);
      const meterHeight = 8;
      const nodePadding = {
        x: 8,
        y: 16
      };

      let xAxisTicks = timeMonth;
      let xAxisTickFormat = '';
      let categoryTimeSpan = 0;
      switch (config.categoryTimeSpan) {
        case 'year':
          xAxisTicks = timeYear;
          xAxisTickFormat = '%Y';
          break;
        case 'week':
          xAxisTicks = timeWeek;
          xAxisTickFormat = '%m/%d';
          categoryTimeSpan = dateDifferenceInWeeks(categoryMax, categoryMin);
          break;
        case 'day':
          xAxisTicks = timeDay;
          xAxisTickFormat = '%m/%d';
          categoryTimeSpan = dateDifferenceInDays(categoryMax, categoryMin);
          break;
        default:
          xAxisTickFormat = '%m/%y';
          categoryTimeSpan = dateDifferenceInMonths(categoryMax, categoryMin);
          break;
      }

      // set minimum column size
      if (chartSize.width < categoryTimeSpan * 48) {
        chartSize.width = categoryTimeSpan * 48;
      }

      const xScale = ChartUtils.xScale([categoryMin, categoryMax], chartSize.width - chartMargin.left - chartMargin.right, false, true).nice();
      const xAxis = axisTop(xScale).ticks(xAxisTicks, xAxisTickFormat).tickSize(-chartSize.height);

      let rootNode = container.select(`g.${CHART_CONSTANTS.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(CHART_CONSTANTS.classes.CHART_ROOT, true) as any;
        rootNode.append('g').classed(CHART_CONSTANTS.classes.CHART_XAXIS, true);
        rootNode.append('g').classed(`${CHART_CONSTANTS.classes.CHART_PREFIX}__gantt`, true);
        popoverNode = select(config.container.parentElement).append('div').classed(`${CHART_CONSTANTS.classes.CHART_POPOVER}`, true);
      }

      container.attr('width', chartSize.width);
      container.attr('height', chartSize.height + chartMargin.bottom);
      container
        .select(`g.${CHART_CONSTANTS.classes.CHART_XAXIS}`)
        .attr('transform', `translate(${chartMargin.left}, ${chartMargin.top})`)
        .call(xAxis as any);

      const chartNode = rootNode.select(`g.${CHART_CONSTANTS.classes.CHART_PREFIX}__gantt`);
      chartNode.attr('transform', `translate(${chartMargin.left}, -${chartMargin.bottom - chartMargin.top})`);

      const nodes = chartNode.selectAll('g').data(config.data, (d: any) => d.id);

      nodes.exit().transition().duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION).attr('width', 0);
      nodes.exit().transition().delay(CHART_CONSTANTS.numbers.TRANSITION_DURATION).remove();

      const enterNodes = nodes
        .enter()
        .append('g')
        .attr('id', (d: any) => `${CHART_CONSTANTS.classes.CHART_PREFIX}__node-${d.id}`)
        .on('mouseenter', (e, d) => {
          let popoverContent = `
            <span style="grid-column: 1 / -1; font-weight: 700">${d.label}</span>
            <span>Start</span>
            <span style="justify-self: end">${dateFormat(d.startDate, 'MM/dd/yyyy')}</span>
            <span>End</span>
            <span style="justify-self: end">${dateFormat(d.endDate, 'MM/dd/yyyy')}</span>
            <span>Progress</span>
            <span style="justify-self: end">${d.progress || 0}%</span>
          `;
          if (d.description?.length) {
            popoverContent += `<span style="grid-column: 1 / -1; font-size: .75rem;">${d.description}</span>`;
          }
          popoverNode.html(popoverContent).style('top', `${e.layerY}px`).style('left', `${e.layerX}px`).style('visibility', 'visible');

          if (config.hoverCallback) {
            (config.hoverCallback as any)(true, d as any, e.target as SVGElement);
          }
        })
        .on('mouseleave', (e, d) => {
          popoverNode.style('visibility', null);

          if (config.hoverCallback) {
            (config.hoverCallback as any)(false, d as any, e.target as SVGElement);
          }
        });

      if (config.selectedCallback) {
        enterNodes.on('click', (e, d) => (config.selectedCallback as any)(d as any, e.target.parentElement as SVGElement));
      }

      const meterGradient = enterNodes
        .append('defs')
        .append('linearGradient')
        .attr('id', (_d: IGanttChartData, i: number) => `meter-gradient--${i}`);
      meterGradient.append('stop').attr('offset', '0%').attr('stop-color', CHART_CONSTANTS.chartPalette.indigoA200);
      meterGradient
        .append('stop')
        .attr('offset', (d: IGanttChartData) => `${d.progress || 0}%`)
        .attr('stop-color', CHART_CONSTANTS.chartPalette.indigoA200);
      meterGradient
        .append('stop')
        .attr('offset', (d: IGanttChartData) => `${d.progress || 0}%`)
        .attr('stop-color', CHART_CONSTANTS.chartPalette.indigo200);
      meterGradient.append('stop').attr('offset', '100%').attr('stop-color', CHART_CONSTANTS.chartPalette.indigo200);

      enterNodes
        .append('rect')
        .classed(CHART_CONSTANTS.classes.CHART_NODE, true)
        .attr('width', 0)
        .attr('height', barHeight)
        .attr('rx', 4)
        .style('stroke', (d) => (d.color?.length ? d.color : CHART_CONSTANTS.chartTheme.outlineMedium))
        .style('fill', CHART_CONSTANTS.chartTheme.surfaceDim);

      enterNodes
        .append('text')
        .classed(CHART_CONSTANTS.classes.CHART_TEXT, true)
        .attr('x', nodePadding.x)
        .attr('y', nodePadding.y)
        .style('font-size', '.85rem')
        .style('stroke', CHART_CONSTANTS.chartTheme.surfaceDim)
        .style('stroke-width', '.5rem')
        .style('fill', CHART_CONSTANTS.chartTheme.textHigh)
        .style('paint-order', 'stroke')
        .style('stroke-linejoin', 'round')
        .style('display', 'none');

      enterNodes
        .append('rect')
        .classed(CHART_CONSTANTS.classes.CHART_METER, true)
        .attr('x', nodePadding.x)
        .attr('y', barHeight - meterHeight - nodePadding.x)
        .attr('width', 0)
        .attr('height', meterHeight)
        .style('fill', (_d: IGanttChartData, i: number) => `url(#meter-gradient--${i})`);

      const mergeNodes = enterNodes.merge(nodes as any);

      mergeNodes.attr(
        'transform',
        (d: IGanttChartData, i: number) => `translate(${xScale(d.startDate)}, ${i * (barHeight + barPadding) + chartMargin.top + barPadding / 2})`
      );

      mergeNodes
        .select(`g > .${CHART_CONSTANTS.classes.CHART_NODE}`)
        .transition()
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('width', (d: IGanttChartData) => {
          const width = xScale(d.endDate) - xScale(d.startDate);
          return width > 0 ? width : 0;
        });

      mergeNodes
        .select(`g > .${CHART_CONSTANTS.classes.CHART_METER}`)
        .transition()
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .attr('width', (d: IGanttChartData) => {
          const width = xScale(d.endDate) - xScale(d.startDate) - nodePadding.x * 2;
          return width > 0 ? width : 0;
        });

      mergeNodes
        .select('g > text')
        .transition()
        .call(ChartUtils.transitionsComplete as any, () => {
          mergeNodes.select('g > text').style('display', null);
          resolve();
        })
        .duration(CHART_CONSTANTS.numbers.TRANSITION_DURATION)
        .text((d: IGanttChartData, _i: number, _t: any) => {
          return `${d.label}`;
        });
    });
  }
}

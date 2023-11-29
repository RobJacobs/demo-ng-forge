import { select, hierarchy, tree, line, Selection, BaseType, HierarchyNode, HierarchyPointNode, zoom } from 'd3';
import { interpolatePath } from 'd3-interpolate-path';
import { isArray, isDefined, scrollParent } from '@tylertech/forge-core';
import { ChartUtils, IChartData } from './chart-utils';
import { CHART_CONSTANTS as constants } from './chart-constants';

export interface ITreeChartData {
  id: number | string;
  nodeId?: number | string;
  label?: string;
  children: ITreeChartData[] | boolean;
}

export interface ITreeChartConfig {
  container: SVGElement;
  node: {
    size: { width: number; height: number };
    padding: number;
    margin: number;
  };
  data: ITreeChartData;
  palette: string[];
  levelLabels: string[];
  zoomScale?: { min: number; max: number };
  nodeBuilder?: (nodes: Selection<SVGGElement, HierarchyNode<ITreeChartData>, BaseType, unknown>) => void;
  popupCallback?: (data: ITreeChartData, parentIds: string[], element: SVGElement) => void;
  selectedCallback?: (data: ITreeChartData, parentIds: string[], element: SVGElement) => void;
  hoverCallback?: (isHovered: boolean, data: ITreeChartData, parentIds: string[], element: SVGElement) => void;
}

export class TreeChartService {
  public static hasChildren = (node: HierarchyNode<ITreeChartData>): boolean => {
    return node.data.children === true || (isArray(node.data.children) && (node.data.children as ITreeChartData[]).length > 0);
  }

  public static getParentIds = (node: HierarchyNode<ITreeChartData>): any[] => {
    const ids = [];
    let parent = node.parent;
    while (parent) {
      ids.push(parent.data.id);
      parent = parent.parent;
    }
    return ids.reverse().slice(1);
  }

  public static getParentDepths = (node: HierarchyNode<ITreeChartData>): any[] => {
    const depths = [];
    let parent = node.parent;
    while (parent) {
      depths.push(parent.depth);
      parent = parent.parent;
    }
    return depths.reverse().slice(1);
  }

  public static nodeCenterHorizontal = (node: HierarchyPointNode<ITreeChartData>, width: number, x = node.x): number => {
    return Math.round(x - (width / 2));
  }

  public static buildTreeChart(config: ITreeChartConfig): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }

      const container = select(config.container);
      const size = { width: 0, height: 0 };
      const levelLabelWidths: number[] = [];
      const chartPadding = 8;
      const strokeColor = '#757575';
      const iconColor = '#212121';
      const currentSize = {
        width: container.attr('width') ? parseInt(container.attr('width'), 10) : 0,
        height: container.attr('height') ? parseInt(container.attr('height'), 10) : 0
      };
      const chartData = hierarchy(config.data);

      const chartLayout = tree().nodeSize([config.node.size.width + 24, config.node.size.height + config.node.margin]).separation((a, b) => a.parent === b.parent ? 1 : 1.25);
      const chart = chartLayout(chartData);
      let xMin = 0;
      let xMax = 0;
      chart.descendants().filter(d => d.depth > 0).forEach((d: HierarchyPointNode<ITreeChartData>) => {
        if (!isDefined(d.data.nodeId)) {
          const depths = this.getParentDepths(d);
          const ids: string[] = [];
          this.getParentIds(d).forEach((id, i) => {
            ids.push(`${depths[i]}-${id}`);
          });
          ids.push(`${d.depth}-${d.data.id}`);
          d.data.nodeId = ids.join('--');
        }

        d.y = (d.depth - 1) * (config.node.size.height + config.node.margin);
        if (d.y > size.height) {
          size.height = d.y;
        }

        if (d.x > xMax) {
          xMax = d.x;
        } else if (d.x < xMin) {
          xMin = d.x;
        }
      });

      let rootNode = container.select(`g.${constants.classes.CHART_ROOT}`);
      if (!rootNode.node()) {
        rootNode = container.append('g').classed(constants.classes.CHART_ROOT, true);
        rootNode.append('g').classed(`${constants.classes.CHART_PREFIX}__tree`, true);
      }

      const zoomScale = ((rootNode.node() as SVGGElement).getCTM() as DOMMatrix).a;
      size.width = ((Math.abs(xMin) + xMax + config.node.size.width) * zoomScale) + (chartPadding * 2);
      size.height = ((size.height + config.node.size.height) * zoomScale) + (chartPadding * 2);

      if (currentSize.width < size.width) {
        container.attr('width', size.width);
      }
      if (currentSize.height < size.height) {
        container.attr('height', size.height);
      }

      if (config.zoomScale) {
        const scrollParentElement = scrollParent((container.node() as any).parentElement as HTMLElement, true);
        let scrollPosition = {
          left: 0,
          top: 0,
          x: 0,
          y: 0
        };
        container.style('cursor', 'grab');

        container.call(zoom()
          .scaleExtent([config.zoomScale.min, config.zoomScale.max])
          .on('zoom', event => {
            if (event.sourceEvent.type === 'mousemove') {
              if (scrollParentElement) {
                scrollParentElement.scrollTop = scrollPosition.top + (scrollPosition.y - event.sourceEvent.clientY);
                scrollParentElement.scrollLeft = scrollPosition.left + (scrollPosition.x - event.sourceEvent.clientX);
              }
            } else if (event.sourceEvent.type === 'wheel') {
              rootNode.attr('transform', `scale(${event.transform.k},${event.transform.k})`);
              const bBox = (rootNode.node() as SVGGElement).getBBox();
              size.width = (bBox.width * event.transform.k) + (chartPadding * 2);
              size.height = (bBox.height * event.transform.k) + (chartPadding * 2);
              container.attr('width', size.width);
              container.attr('height', size.height);
            }
          })
          .on('start', event => {
            if (event.sourceEvent.type === 'mousedown') {
              scrollPosition = {
                left: scrollParentElement.scrollLeft,
                top: scrollParentElement.scrollTop,
                x: event.sourceEvent.clientX,
                y: event.sourceEvent.clientY
              };
            }
          })
        );
      }

      const chartNode = rootNode.select(`g.${constants.classes.CHART_PREFIX}__tree`);
      chartNode.attr('transform', `translate(${Math.abs(xMin) + Math.round(config.node.size.width / 2) + chartPadding}, ${chartPadding})`);

      const nodes = chartNode.selectAll(`.${constants.classes.CHART_PREFIX}__tree__node`).data(chartData.descendants().filter(d => d.depth > 0), (d: any) => d.data.nodeId);

      const exitNodes = nodes.exit();
      exitNodes
        .transition()
        .duration(constants.numbers.TRANSITION_DURATION)
        .attr('transform', (d: any) => {
          if (d.parent) {
            return `translate(${this.nodeCenterHorizontal(d, config.node.size.width, d.parent.x)}, ${d.parent.y})`;
          } else {
            return `translate(${this.nodeCenterHorizontal(d, config.node.size.width)}, ${d.y})`;
          }
        })
        .remove();

      const enterNodes = nodes.enter().append('g')
        .classed(`${constants.classes.CHART_PREFIX}__tree__node`, true)
        .attr('transform', (d: any) => {
          if (d.parent) {
            return `translate(${this.nodeCenterHorizontal(d, config.node.size.width, d.parent.x)}, ${d.parent.y})`;
          } else {
            return `translate(${this.nodeCenterHorizontal(d, config.node.size.width)}, ${d.y})`;
          }
        })
        .attr('cursor', (d: any) => {
          if (d.data.children === true || (isArray(d.data.children) && d.data.children.length)) {
            return 'pointer';
          } else {
            return 'default';
          }
        });

      enterNodes.append('rect')
        .attr('width', config.node.size.width)
        .attr('height', config.node.size.height)
        .attr('rx', 4)
        .style('stroke', strokeColor)
        .style('fill', (d: any) => {
          return config.palette[d.depth - (Math.trunc(d.depth / config.palette.length) * config.palette.length)];
        });

      if (config.nodeBuilder) {
        config.nodeBuilder(enterNodes);
      } else {
        enterNodes.append('text')
          .classed(constants.classes.CHART_TEXT, true)
          .attr('x', config.node.padding)
          .attr('y', config.node.size.height / 2)
          .style('pointer-events', 'none')
          .style('dominant-baseline', 'middle')
          .text((d: any, i: number) => {
            if (!isDefined(d.data.label)) {
              return null;
            }

            let width = config.node.size.width - (config.node.padding * 2);
            if (config.popupCallback) {
              width = width - 24;
            }
            if (this.hasChildren(d)) {
              width = width - 24;
            }
            return ChartUtils.trimText(d.data.label, width);
          });
      }

      if (config.selectedCallback) {
        enterNodes.on('click', (e, d) => (config.selectedCallback as any)(d.data, this.getParentIds(d), e.target.parentElement as SVGElement));
      }

      if (config.hoverCallback) {
        enterNodes.on('mouseenter', (e, d) => (config.hoverCallback as any)(true, d.data, this.getParentIds(d), e.target as SVGElement));
        enterNodes.on('mouseleave', (e, d) => (config.hoverCallback as any)(false, d.data, this.getParentIds(d), e.target as SVGElement));
      }

      const mergeNodes = enterNodes.merge(nodes as any);

      mergeNodes
        .transition()
        .call(ChartUtils.transitionsComplete as any, () => {

          if (currentSize.width > size.width) {
            container.attr('width', size.width);
          }
          if (currentSize.height > size.height) {
            container.attr('height', size.height);
          }

          const parentNode = (enterNodes.nodes().length ? (enterNodes.data()[0] as any).parent :
            exitNodes.nodes().length ? (exitNodes.data().sort((a: any, b: any) => a.depth as any < b.depth as any)[0] as any).parent :
              null) as HierarchyPointNode<ITreeChartData>;

          if (isDefined(parentNode) && parentNode.depth > 0) {
            const parentElement = nodes.filter(d => d.data.nodeId === parentNode.data.nodeId).node() as SVGElement;
            if (parentElement) {
              parentElement.scrollIntoView({ behavior: 'smooth' });
            }
          }

          resolve();
        })
        .duration(constants.numbers.TRANSITION_DURATION)
        .attr('transform', (d: any) => `translate(${this.nodeCenterHorizontal(d, config.node.size.width)}, ${d.y})`);

      const nodePath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
        const offSet = (start.y - end.y) / 2;
        return line()([[start.x, start.y], [start.x, start.y - offSet], [end.x, end.y + offSet], [end.x, end.y]]);
      };

      const linkNodes = chartNode.selectAll(`.${constants.classes.CHART_PREFIX}__tree__path`).data(chartData.descendants().filter(d => d.depth > 1), (d: any) => d.data.nodeId);

      linkNodes.exit()
        .transition()
        .duration(constants.numbers.TRANSITION_DURATION)
        .attrTween('d', (d: any, i, element) => {
          const current = (element[i] as SVGPathElement).getAttribute('d');
          const next = nodePath({ x: Math.round(d.parent.x), y: Math.round(d.parent.y + config.node.size.height) }, { x: Math.round(d.parent.x), y: Math.round(d.parent.y + config.node.size.height) });
          return interpolatePath(current, next);
        })
        .remove();

      const enterLinkNodes = linkNodes.enter().insert('path')
        .classed(`${constants.classes.CHART_PREFIX}__tree__path`, true)
        .style('fill', 'none')
        .style('stroke', strokeColor)
        .style('shape-rendering', 'crispEdges')
        .style('stroke-width', '2');

      const mergeLinkNodes = enterLinkNodes.merge(linkNodes as any);

      mergeLinkNodes
        .transition()
        .call(ChartUtils.transitionsComplete as any, () => {
          chartNode.selectAll(`.${constants.classes.CHART_PREFIX}__tree__path-label`).raise();
        })
        .duration(constants.numbers.TRANSITION_DURATION)
        .attrTween('d', (d: any, i, element) => {
          const current = (element[i] as SVGPathElement).getAttribute('d');
          const next = nodePath({ x: Math.round(d.parent.x), y: Math.round(d.parent.y + config.node.size.height) }, { x: Math.round(d.x), y: Math.round(d.y) });
          return interpolatePath(current, next);
        });

      if (config.levelLabels.length) {
        const linkLabelNodes = chartNode.selectAll(`.${constants.classes.CHART_PREFIX}__tree__path-label`).data(chartData.descendants().filter(d => d.depth > 0 && isArray(d.data.children) && (d.data.children as ITreeChartData[]).length), (d: any) => d.data.nodeId);
        const linkLabelNodeHeight = 24;

        const enterlinkLabelNodes = linkLabelNodes.enter().insert('g')
          .classed(`${constants.classes.CHART_PREFIX}__tree__path-label`, true)
          .attr('visibility', 'hidden')
          .attr('transform', (d: any) => `translate(${this.nodeCenterHorizontal(d, config.node.size.width)}, ${d.y + config.node.size.height + config.node.padding})`);

        enterlinkLabelNodes.append('rect')
          .attr('width', d => {
            const depthIndex = d.depth - 1;
            const label = config.levelLabels[depthIndex];
            if (!isDefined(label) || !label.length) {
              levelLabelWidths[depthIndex] = 0;
              return 0;
            }
            if (!levelLabelWidths[depthIndex]) {
              levelLabelWidths[depthIndex] = ChartUtils.getTextWidth(label, '14px Roboto, sans-serif') + linkLabelNodeHeight;
            }
            return levelLabelWidths[depthIndex];
          })
          .attr('transform', (d: any) => `translate(${(config.node.size.width / 2) - (levelLabelWidths[d.depth - 1] / 2)}, 0)`)
          .attr('height', linkLabelNodeHeight)
          .attr('rx', linkLabelNodeHeight / 2)
          .style('fill', strokeColor);

        enterlinkLabelNodes.append('text')
          .classed(constants.classes.CHART_TEXT, true)
          .attr('x', Math.round(config.node.size.width / 2))
          .attr('y', linkLabelNodeHeight / 2)
          .style('pointer-events', 'none')
          .style('dominant-baseline', 'middle')
          .style('text-anchor', 'middle')
          .style('font-size', '14px')
          .style('fill', 'white')
          .text(d => (config.levelLabels as string[])[d.depth - 1]);

        linkLabelNodes.exit().remove();

        const mergeLinkLabelNodes = enterlinkLabelNodes.merge(linkLabelNodes as any);

        mergeLinkLabelNodes
          .transition()
          .call(ChartUtils.transitionsComplete as any, () => {
            enterlinkLabelNodes.attr('visibility', null);
            resolve();
          })
          .duration(constants.numbers.TRANSITION_DURATION)
          .attr('transform', (d: any) => `translate(${this.nodeCenterHorizontal(d, config.node.size.width)}, ${d.y + config.node.size.height + ((config.node.margin - linkLabelNodeHeight) / 2)})`);
      }

      mergeNodes.each((d: any, i: number) => {
        const mergeNode = select(mergeNodes.nodes()[i]);

        const childrenIconNode = select(mergeNode.node()?.querySelector(`.${constants.classes.CHART_PREFIX}__tree__node__children-icon`) as any);
        if (this.hasChildren(d)) {
          if (!childrenIconNode.node()) {
            mergeNode
              .append('path')
              .classed(`${constants.classes.CHART_PREFIX}__tree__node__children-icon`, true)
              .attr('d', 'M0,0L12,0L6,6,L0,0')
              .attr('transform', `translate(${config.node.size.width - 20}, ${(config.node.size.height / 2) - 4})`)
              .style('fill', iconColor);
          }
        } else if (childrenIconNode.node()) {
          childrenIconNode.remove();
        }

        if (config.popupCallback) {
          let infoIconNode = select(mergeNode.node()?.querySelector(`.${constants.classes.CHART_PREFIX}__tree__node__info-icon`) as any);
          if (!infoIconNode.node()) {
            const xTransform = this.hasChildren(d) ? config.node.size.width - 54 : config.node.size.width - 32;
            infoIconNode = mergeNode
              .append('path')
              .classed(`${constants.classes.CHART_PREFIX}__tree__node__info-icon`, true)
              .attr('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z')
              .attr('transform', `translate(${xTransform}, ${(config.node.size.height / 2) - 12})`)
              .style('fill', iconColor)
              .attr('cursor', 'pointer')
              .on('click', e => {
                e.stopPropagation();
                const nodeData = JSON.parse(JSON.stringify(d.data));
                delete nodeData.children;
                delete nodeData.nodeId;
                (config.popupCallback as any)(nodeData, this.getParentIds(d), infoIconNode.node());
              });
          }
        }
      });
    });

    return promise;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { scaleLinear, ScaleLinear, ScaleTime, scaleTime, extent, interpolate, Arc, Transition } from 'd3';
import { isDefined } from '@tylertech/forge-core';

export interface IChartData {
  id: any;
  value: number | Date;
  category?: string;
  label?: string;
  color?: string;
}

export interface IChartConfig<T = IChartData> {
  container: SVGElement;
  data: T[];
  palette?: string[];
  valueFormat?: string; // https://github.com/d3/d3-format#locale_format
  valueDateFormat?: string; // https://github.com/d3/d3-time-format#locale_format
  selectedCallback?: (data: IChartData, svgElement: SVGElement) => void;
  hoverCallback?: (isHovered: boolean, data: IChartData, svgElement: SVGElement) => void;
}

export class ChartUtils {
  public static svgNS = 'http://www.w3.org/2000/svg';

  private static _bodyFont: string;
  public static get bodyFont(): string {
    if (!this._bodyFont) {
      const bodyStyle = getComputedStyle(document.body);
      this._bodyFont = `${bodyStyle.fontSize} ${bodyStyle.fontFamily}`;
    }

    return this._bodyFont;
  }

  public static chartSize(chart: SVGElement): { width: number; height: number } {
    if (!chart) {
      return { width: 0, height: 0 };
    }

    const parentElement = chart.parentNode as HTMLElement;
    if (!parentElement) {
      return { width: 0, height: 0 };
    }

    const parentElementStyle = getComputedStyle(parentElement);

    return {
      height: Math.round(parentElement.clientHeight - parseFloat(parentElementStyle.paddingTop) - parseFloat(parentElementStyle.paddingBottom)),
      width: Math.round(parentElement.clientWidth - parseFloat(parentElementStyle.paddingLeft) - parseFloat(parentElementStyle.paddingRight))
    };
  }

  public static xScale(data: number[] | Date[], width: number, round = true, timeScale = false): any {
    let scale: ScaleLinear<number, number> | ScaleTime<number, number>;
    if (timeScale) {
      scale = scaleTime().domain(extent(data as Date[]) as Date[]);
    } else {
      scale = scaleLinear().domain(extent(data as number[]) as number[]);
    }

    if (round) {
      scale.rangeRound([0, width]);
    } else {
      scale.range([0, width]);
    }

    return scale;
  }

  public static yScale(data: any[], height: number, round = true, timeScale = false): any {
    let scale: ScaleLinear<number, number> | ScaleTime<number, number>;
    if (timeScale) {
      scale = scaleTime().domain([0, Math.max(...data)]);
    } else {
      scale = scaleLinear().domain([0, Math.max(...data)]);
    }

    if (round) {
      scale.rangeRound([height, 0]);
    } else {
      scale.range([height, 0]);
    }

    return scale;
  }

  public static colorScale(data: any[], colors: number | string[]): any {
    if (colors instanceof Array) {
      return scaleLinear()
        .domain(extent(data) as number[])
        .range([colors[0] as any, colors[1] as any]);
    } else {
      return scaleLinear()
        .domain(extent(data) as number[])
        .rangeRound([0, colors - 1]);
    }
  }

  public static arcTween(from: any, to: any, arc: Arc<any, any>): any {
    const inter = interpolate({ startAngle: from.startAngle, endAngle: from.endAngle }, { startAngle: to.startAngle, endAngle: to.endAngle });
    return (tween: any): any => arc(inter(tween));
  }

  public static transitionsComplete(transition: Transition<Element, any, Element, any>, callback: () => void): void {
    let i = 0;
    transition
      .each(() => {
        i++;
      })
      .on('end', () => {
        i--;
        if (i === 0) {
          callback();
        }
      });
  }

  public static convertData(data: any[], mapping: IChartData): IChartData[] {
    return data.map((d) => {
      const value = typeof d[mapping.value.toString()] === 'number' ? d[mapping.value.toString()] : d[mapping.value.toString()] instanceof Date ? d[mapping.value.toString()].valueOf() : parseInt(d[mapping.value.toString()], 10);
      return {
        id: d[mapping.id],
        value,
        category: isDefined(mapping.category) ? d[mapping.category as string] : undefined,
        label: isDefined(mapping.label) ? d[mapping.label as string] : undefined,
        color: isDefined(mapping.color) ? d[mapping.color as string] : undefined
      };
    });
  }

  public static getTextWidth(value: string, font = this.bodyFont): number {
    if (!isDefined(value) || !value.length) {
      return 0;
    }
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.font = font;
    return Math.ceil(context.measureText(value).width);
  }

  public static getMaxTextWidth(values: string[], font?: string): number {
    if (!isDefined(values) || !values.length) {
      return 0;
    }
    let maxWidth = 0;
    values.forEach((v) => {
      const width = this.getTextWidth(v, font);
      if (width > maxWidth) {
        maxWidth = width;
      }
    });

    return maxWidth;
  }

  public static trimText(value: string, width: number, ellipsis = true, font = this.bodyFont): string {
    if (!isDefined(value) || !value.length) {
      return value;
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.font = font;

    let textWidth = Math.ceil(context.measureText(value).width);

    while (textWidth > width) {
      if (ellipsis) {
        value = `${value.substring(0, value.length - 4)}...`;
      } else {
        value = value.slice(0, -1);
      }

      textWidth = Math.ceil(context.measureText(value).width);
    }

    return value;
  }

  public static wrapText(value: string, width: number, font = this.bodyFont): string[] {
    if (!isDefined(value) || !value.length) {
      return value as unknown as string[];
    }

    const textArray: string[] = [];

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.font = font;

    let textWidth = Math.ceil(context.measureText(value).width);
    if (textWidth < width) {
      return [value];
    }

    let textLine = '';
    for (const v of value) {
      textLine += v;
      textWidth = Math.ceil(context.measureText(textLine).width);
      if (textWidth > width) {
        textArray.push(textLine.slice(0, -1));
        textLine = v;
      }
    }
    if (textLine.length) {
      textArray.push(textLine);
    }

    return textArray;
  }
}

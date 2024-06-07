import { } from 'd3';
import { IChartConfig } from './chart-utils';
import { CHART_CONSTANTS } from './chart-constants';

export interface IGanntChartConfig extends IChartConfig<IGanntChartData> {
  categoryTicks?: number | number[];
  categoryTickValues?: string[];
  categoryFormat?: string;
  categoryDateFormat?: string;
  valueTicks?: number | number[];
  valueTickValues?: string[];
}

export interface IGanntChartData {
  id: number;
  label: string;
  startDate: Date;
  endDate: Date;
}

export class GanntChartService {

  public static buildGanntChart(config: IGanntChartConfig): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!config.container || config.container.tagName !== 'svg') {
        reject();
        return;
      }
    });
  }
}

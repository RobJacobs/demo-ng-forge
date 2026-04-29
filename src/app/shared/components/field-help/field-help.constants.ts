import { IColumnConfiguration } from '@tylertech/forge';
import { Observable } from 'rxjs';
import { IFilterParameter, IFilterResponse } from 'src/app/shared/interfaces';

export interface IFieldHelpConfig {
  title: string;
  columnConfigurations: IColumnConfiguration[];
  key: string;
  multiselect?: boolean;
  dataObservable: (param: IFilterParameter) => Observable<IFilterResponse<any>>;
  transform?: (value: any) => any;
}

import { formatDate, formatNumber, Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { isArray, getPropertyValue, isDefined, isString, isObject } from '@tylertech/forge-core';
import { SortDirection } from '@tylertech/forge';

export class Utils {
  public static sortData(data: any[], key: string, type: 'string' | 'number' | 'boolean' | 'date', direction: 'ASC' | 'DESC' | SortDirection): any[] {
    if (!data || !data.length) {
      return data;
    }

    type = type || 'string';

    if (direction !== 'DESC') {
      direction = 'ASC';
    }

    return data.slice().sort((a, b): number => {
      a = getPropertyValue(a, key);
      b = getPropertyValue(b, key);

      if (direction === 'DESC') {
        return this.comparator(b, a, type);
      } else {
        return this.comparator(a, b, type);
      }
    });
  }

  public static groupData(data: any[], property: string): any[] {
    if (!isArray(data) || !data.length || !property?.length) {
      return data;
    }

    return data.reduce((previousValue, currentValue) => {
      const key = currentValue[property];
      if (!previousValue[key]) {
        previousValue[key] = [];
      }
      previousValue[key].push(currentValue);
      return previousValue;
    }, {});
  }

  public static filterData(
    data: any[],
    filters: {
      key: string;
      value: string;
      type?: 'string' | 'number' | 'boolean' | 'date';
      strict?: boolean;
    }[]
  ): any[] {
    if (!isArray(data) || !data.length || !isArray(filters) || !filters.length) {
      return data;
    }

    filters = filters.map((f) => {
      if (isString(f.value) && f.value.length) {
        let operator;
        if (f.value.substring(0, 2) === '<>') {
          if (f.value.length === 2) {
            f.value = '';
            return f;
          }
          operator = f.value.substring(0, 2);
          f.value = f.value.substring(2);
        } else if (f.value.substring(0, 1) === '<' || f.value.substring(0, 1) === '>') {
          if (f.value.length === 1) {
            f.value = '';
            return f;
          }
          operator = f.value.substring(0, 1);
          f.value = f.value.substring(1);
        }

        if (operator) {
          Object.defineProperty(f, 'operator', { value: operator });
        }
      }

      f.value = ('' + f.value).toLowerCase();
      return f;
    });

    const filter = (rec: any) =>
      filters.every((f) => {
        if (!f.value.length) {
          return true;
        }

        const value = ('' + getPropertyValue(rec, f.key)).toLowerCase();
        if (!value.length) {
          return false;
        }

        if (f.strict) {
          return value === f.value;
        }

        switch ((f as any).operator) {
          case '<>':
            return this.comparator(value, f.value, f.type) !== 0;
          case '>':
            return this.comparator(value, f.value, f.type) > 0;
          case '<':
            return this.comparator(value, f.value, f.type) < 0;
          default:
            return value.indexOf(f.value) > -1;
        }
      });

    return data.filter((rec) => filter(rec));
  }

  public static comparator(a: any, b: any, type: 'string' | 'number' | 'boolean' | 'date' = 'string'): number {
    if (a == b) {
      return 0;
    }
    if (!isDefined(a)) {
      return -1;
    }
    if (!isDefined(b)) {
      return 1;
    }

    switch (type) {
      case 'boolean':
        return a ? -1 : 1;
      case 'date':
        a = new Date(a).getTime();
        if (isNaN(a)) {
          return -1;
        }
        b = new Date(b).getTime();
        if (isNaN(b)) {
          return 1;
        }
        break;
      case 'number':
        a = parseFloat(a);
        if (isNaN(a)) {
          return -1;
        }
        b = parseFloat(b);
        if (isNaN(b)) {
          return 1;
        }
        break;
      default:
        if (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b))) {
          return ('' + a).localeCompare('' + b, navigator.language, {
            numeric: true
          });
        } else {
          return ('' + a).localeCompare('' + b, navigator.language, {
            sensitivity: 'base'
          });
        }
    }

    return a < b ? -1 : a > b ? 1 : 0;
  }

  public static navigateBack(location: Location, router: Router, fallbackRoute: any[]) {
    if ((location.getState() as any)?.navigationId === 1) {
      router.navigate(fallbackRoute);
    } else {
      location.back();
    }
  }

  public static elementId(prefix: string): string {
    return (
      prefix +
      Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
    );
  }

  public static formatDate(value: Date, format = 'MM/dd/yyyy'): string {
    if (!isDefined(value)) {
      return '';
    }
    return formatDate(value, format, navigator.language);
  }

  public static formatNumber(value: number, format = '1.2-2'): string {
    return formatNumber(value, navigator.language, format);
  }

  public static uniqueId(): string {
    return Math.random().toString(36).substring(2);
  }

  public static parseQueryStringParameters(): any {
    const params = {};
    const queryIndex = window.location.href.indexOf('?');
    if (queryIndex !== -1) {
      const httpParams = new HttpParams({
        fromString: window.location.href.substring(queryIndex)
      });
      httpParams.keys().forEach((k) => {
        const value = httpParams.getAll(k) as string[];
        if (value.length) {
          Object.defineProperty(params, k.toLowerCase(), {
            value: value.length === 1 ? value[0] : value,
            enumerable: true,
            writable: true
          });
        }
      });
    }

    return params;
  }

  public static objectReduce(obj: object): object {
    const reduced: any = {};

    Object.keys(obj).forEach((key) => {
      if (isDefined(obj[key])) {
        if (isArray(obj[key])) {
          if (obj[key].length) {
            reduced[key] = obj[key];
          }
        } else if ((obj[key] + '').trim().length) {
          reduced[key] = typeof obj[key] === 'string' ? obj[key].trim() : obj[key];
        }
      }
    });

    return reduced;
  }

  public static objectPropertyPaths(obj: object, parentKey?: string): Map<string, string> {
    // return Object.keys(obj).reduce((prev, curr) => {
    //   const value = obj[curr];
    //   const key = parentKey ? `${parentKey}.${curr}` : `${curr}`;
    //   if (value && typeof value === 'object') {
    //     return { ...prev, ...this.objectPropertyPaths(value, key) };
    //   } else {
    //     return { ...prev, [key]: value };
    //   }
    // }, {});

    const result = new Map<string, string>();
    Object.keys(obj).forEach((key) => {
      const path = parentKey?.length ? `${parentKey}.${key}` : key;
      const value = obj[key];
      if (isObject(value)) {
        Object.assign(result, this.objectPropertyPaths(obj[key], path));
      } else {
        result[path] = value;
      }
    });

    return result;
  }
}

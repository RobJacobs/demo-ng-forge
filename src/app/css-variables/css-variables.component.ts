import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounce } from '@tylertech/forge-core';
import { CellAlign, IColumnConfiguration } from '@tylertech/forge';
import { ForgeTableModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { AppCacheService } from '../app-cache.service';

@Component({
  selector: 'app-css-variables',
  imports: [FormsModule, ForgeTableModule, ForgeTextFieldModule, ForgeToolbarModule],
  templateUrl: './css-variables.component.html',
  styleUrl: './css-variables.component.scss'
})
export class CssVariablesComponent {
  private appCache = inject(AppCacheService);
  private globalCssVariables = new Map<string, string>();
  public recordset = Array.from(this.globalCssVariables);
  public tableColumns: IColumnConfiguration[] = [
    {
      property: '0',
      header: 'Name'
    },
    {
      header: 'Color',
      width: 48,
      align: CellAlign.Center,
      template: (rowIndex: number, cellElement: HTMLElement, data: [string, string]) => {
        if ((data[1].startsWith('#') && data[1].length === 7) || data[1].startsWith('rgba')) {
          const divElement = document.createElement('div');
          divElement.style.height = '32px';
          divElement.style.width = '32px';
          divElement.style.backgroundColor = `var(${data[0]})`;
          cellElement.appendChild(divElement);
        }
        return '';
      }
    },
    { property: '1', header: 'Value' }
  ];
  public variableFilter = '';

  constructor() {
    effect(() => {
      if (this.appCache.theme()) {
        setTimeout(() => {
          this.loadCSSVariables();
        }, 100);
      }
    });
  }

  public onFilter = debounce(() => {
    this.recordset = Array.from(this.globalCssVariables).filter((v) => v[0].includes(this.variableFilter));
  }, 500);

  private loadCSSVariables() {
    this.globalCssVariables.clear();

    Array.from(document.styleSheets).forEach((ss) => {
      try {
        Array.from(ss.cssRules)
          .filter((ssRule) => ssRule.cssText.startsWith(':root') || ssRule.cssText.startsWith('.forge-theme-dark'))
          .sort((a, b) => {
            if (this.appCache.theme() === 'dark') {
              return a.cssText.startsWith(':root') ? -1 : 1;
            } else {
              return a.cssText.startsWith(':root') ? 1 : -1;
            }
          })
          .forEach((ssRule) => {
            ssRule.cssText
              .split('{')[1]
              .replace('}', '')
              .split(';')
              .map((r) => r.trim())
              .filter((r) => r.startsWith('--forge'))
              .map((r) => {
                const rule = r.split(':');
                return { name: rule[0].trim(), value: rule[1].trim() };
              })
              .forEach((r) => {
                this.globalCssVariables.set(r.name, r.value);
              });
          });
      } catch {}
    });
    this.recordset = Array.from(this.globalCssVariables).sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
  }
}

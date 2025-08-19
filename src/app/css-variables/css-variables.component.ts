import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounce } from '@tylertech/forge-core';
import { CellAlign, IColumnConfiguration } from '@tylertech/forge';
import { ForgeTableModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-css-variables',
  imports: [CommonModule, FormsModule, ForgeTableModule, ForgeTextFieldModule, ForgeToolbarModule],
  templateUrl: './css-variables.component.html',
  styleUrl: './css-variables.component.scss'
})
export class CssVariablesComponent implements OnInit {
  private globalCssVariables = new Set<{ name: string; value: string }>([]);
  public recordset = Array.from(this.globalCssVariables);
  public tableColumns: IColumnConfiguration[] = [
    { property: 'name', header: 'Name' },
    {
      header: 'Color',
      width: 48,
      align: CellAlign.Center,
      template: (rowIndex: number, cellElement: HTMLElement, data: { name: string; value: string }) => {
        if ((data.value.startsWith('#') && data.value.length === 7) || data.value.startsWith('rgba')) {
          const divElement = document.createElement('div');
          divElement.style.height = '32px';
          divElement.style.width = '32px';
          divElement.style.backgroundColor = data.value;
          cellElement.appendChild(divElement);
        }
        return '';
      }
    },
    { property: 'value', header: 'Value' }
  ];
  public variableFilter = '';

  public ngOnInit() {
    Array.from(document.styleSheets).forEach((ss) => {
      try {
        Array.from(ss.cssRules)
          .filter((ssRule) => ssRule.cssText.startsWith(':root'))
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
              .forEach((r) => this.globalCssVariables.add(r));
          });
      } catch {}
    });
    this.recordset = Array.from(this.globalCssVariables);
  }

  public onFilter = debounce(() => {
    this.recordset = Array.from(this.globalCssVariables).filter((v) => v.name.includes(this.variableFilter));
  }, 500);
}

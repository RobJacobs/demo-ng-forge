import { isDefined } from '@tylertech/forge-core';
import { TableComponent, IMenuOption, MenuComponent, ButtonVariant } from '@tylertech/forge';
import { ViewContainerRef, ComponentRef, EmbeddedViewRef, Type } from '@angular/core';

export class TableUtils {
  public static createButton(label: string, variant: ButtonVariant, clickHandler: (event: Event) => void): HTMLButtonElement {
    const buttonElement = document.createElement('forge-button');
    buttonElement.innerText = label;
    buttonElement.setAttribute('variant', variant);
    buttonElement.addEventListener('click', clickHandler);

    return buttonElement as unknown as HTMLButtonElement;
  }

  public static createIconButton(icon: string, clickHandler: (event: Event) => void, title: string): HTMLElement {
    const containerElement = document.createElement('div');

    const iconButtonElement = document.createElement('forge-icon-button');
    iconButtonElement.setAttribute('aria-label', title);
    iconButtonElement.addEventListener('click', (event) => {
      event.stopPropagation();
      clickHandler(event);
    });
    containerElement.appendChild(iconButtonElement);

    const iconElement = document.createElement('forge-icon');
    iconElement.setAttribute('name', icon);
    iconButtonElement.appendChild(iconElement);

    const tooltipElement = document.createElement('forge-tooltip');
    tooltipElement.innerHTML = title;
    containerElement.appendChild(tooltipElement);

    return containerElement;
  }

  public static createMenuButton(icon: string, selectHandler: (event: Event) => void, options: IMenuOption[], title: string): HTMLElement {
    const menuElement = document.createElement('forge-menu') as MenuComponent;
    menuElement.options = options;
    menuElement.addEventListener('forge-menu-select', selectHandler);

    menuElement.appendChild(this.createIconButton(icon, () => {}, title));

    return menuElement;
  }

  public static createExpanderRow<T>(rowIndex: number, tableElement: TableComponent, viewContainerRef: ViewContainerRef, component: Type<T>, title: string, data?: any, callback?: (value?: any) => any): HTMLElement {
    let componentRef: ComponentRef<any> | null;

    const expanderElement = TableUtils.createIconButton(
      'expand_more',
      () => {
        const isExpanded = tableElement.isRowExpanded(rowIndex);
        expanderElement.querySelector('forge-icon')?.setAttribute('name', isExpanded ? 'expand_more' : 'expand_less');
        if (isExpanded) {
          tableElement.collapseRow(rowIndex).then(() => {
            componentRef?.destroy();
            componentRef = null;
          });
        } else {
          tableElement.expandRow(rowIndex, () => {
            componentRef = viewContainerRef.createComponent(component);
            componentRef.instance.rowIndex = rowIndex;
            if (isDefined(data)) {
              componentRef.instance.data = data;
            }
            if (isDefined(callback)) {
              componentRef.instance.callback = callback;
            }
            const rootNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
            return rootNode;
          });
        }
      },
      title
    );

    return expanderElement;
  }
}

import { isDefined } from '@tylertech/forge-core';
import { TableComponent, IMenuOption, MenuComponent } from '@tylertech/forge';
import { ViewContainerRef, ComponentRef, EmbeddedViewRef, Type } from '@angular/core';

export class TableUtils {
  public static createLinkButton(label: string | number, clickHandler: (event: Event) => void): HTMLButtonElement {
    const linkElement = document.createElement('button');
    linkElement.classList.add('forge-hyperlink');
    linkElement.innerText = label.toString();
    linkElement.type = 'button';
    linkElement.style.minWidth = '36px';
    linkElement.addEventListener('click', clickHandler);
    return linkElement;
  }

  public static createIconButton(icon: string, clickHandler?: (event: Event) => void, title?: string): HTMLElement {
    const iconButtonElement = document.createElement('forge-icon-button');

    const buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    if (clickHandler) {
      buttonElement.addEventListener('click', clickHandler);
    }

    const iconElement = document.createElement('forge-icon');
    iconElement.setAttribute('name', icon);

    buttonElement.appendChild(iconElement);
    iconButtonElement.appendChild(buttonElement);

    if (title) {
      const tooltipElement = document.createElement('forge-tooltip');
      tooltipElement.innerHTML = title;
      buttonElement.appendChild(tooltipElement);
    }
    return iconButtonElement;
  }

  public static createMenuButton(icon: string, selectHandler: (event: Event) => void, options: IMenuOption[], title?: string): HTMLElement {
    const menuElement = document.createElement('forge-menu') as MenuComponent;
    menuElement.options = options;
    menuElement.addEventListener('forge-menu-select', selectHandler);

    menuElement.appendChild(this.createIconButton(icon, undefined, title));

    return menuElement;
  }

  public static createExpanderRow<T>(
    rowIndex: number,
    tableElement: TableComponent,
    viewContainerRef: ViewContainerRef,
    component: Type<T>,
    title?: string,
    data?: any,
    callback?: (value?: any) => any
  ): HTMLElement {
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

import { Component, inputBinding, model, outputBinding, signal, TemplateRef, twoWayBinding, Type, viewChild, ViewContainerRef } from '@angular/core';
import { ForgeToolbarModule, ForgeButtonModule, ForgeTextFieldModule, ForgeLabelValueModule } from '@tylertech/forge-angular';

import { ExternalComponent } from './external/external.component';
import { FormsModule } from '@angular/forms';
import { Utils } from 'src/utils';

// https://angular.love/angular-20-whats-new#New%20Features%20of%20NgComponentOutlet

@Component({
  selector: 'app-dynamic-component',
  imports: [FormsModule, ForgeButtonModule, ForgeLabelValueModule, ForgeTextFieldModule, ForgeToolbarModule],
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.scss'
})
export class DynamicComponentComponent {
  private externalContainerRef = viewChild.required('externalContainer', { read: ViewContainerRef });
  private componentTemplateContainerRef = viewChild.required('componentTemplateContainer', { read: ViewContainerRef });
  private componentTemplateRef = viewChild.required('componentTemplate', { read: TemplateRef });

  public oneWayBinding = signal('One way binding from parent');
  public twoWayBinding = model<string>();
  public callbackMessage = signal<string>('');

  public onLoadExternal() {
    // this.externalContainerRef().clear();

    this.externalContainerRef().createComponent(ExternalComponent, {
      bindings: [
        inputBinding('oneWayBinding', this.oneWayBinding),
        twoWayBinding('twoWayBinding', this.twoWayBinding),
        outputBinding<string>('callbackBinding', (msg) => this.onExternalCallback(msg))
      ]
    });
  }

  private onExternalCallback(message: string) {
    this.callbackMessage.set(message);
  }

  public onLoadTemplate() {
    // this.componentTemplateContainerRef().clear();

    this.componentTemplateContainerRef().createEmbeddedView(this.componentTemplateRef());
  }

  public onEmit() {
    this.callbackMessage.set(`The date and time is: ${Utils.formatDate(new Date(), 'MM/dd/yyyy h:mm:ss a')}`);
  }
}

import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeLabelValueModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { Utils } from 'src/utils';

@Component({
  selector: 'app-external',
  imports: [FormsModule, ForgeButtonModule, ForgeLabelValueModule, ForgeTextFieldModule],
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss'
})
export class ExternalComponent {
  public oneWayBinding = input.required<string>();
  public twoWayBinding = model<string>();
  public callbackBinding = output<string>();

  public onEmit() {
    this.callbackBinding.emit(`The date and time is: ${Utils.formatDate(new Date(), 'MM/dd/yyyy h:mm:ss a')}`);
  }
}

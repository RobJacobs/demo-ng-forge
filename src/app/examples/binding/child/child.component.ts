import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-examples-binding-child',
  imports: [FormsModule, ForgeTextFieldModule],
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  public name = model<string | undefined>();
}

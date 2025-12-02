import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-examples-binding-child',
  imports: [FormsModule, ForgeTextFieldModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name = model<string>();
}

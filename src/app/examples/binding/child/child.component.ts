import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-examples-binding-child',
  imports: [CommonModule, FormsModule, ForgeTextFieldModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name = model<string>();
}

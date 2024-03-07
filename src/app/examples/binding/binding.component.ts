import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-examples-binding',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ForgeTextFieldModule,
    ChildComponent
  ],
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  public name = 'two way binding example';

}

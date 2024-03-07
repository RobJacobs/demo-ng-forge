import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-examples-binding-child',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ForgeTextFieldModule
  ],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input()
  public name?: string;

  // must be named the same as the input property with 'Change' suffix
  @Output()
  public nameChange = new EventEmitter<string>();

  public onNameChange() {
    this.nameChange.emit(this.name);
  }
}

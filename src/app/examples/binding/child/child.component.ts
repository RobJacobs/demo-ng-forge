import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-examples-binding-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input()
  public name?: string;

  // must be named the same as the input property with 'Change' suffix
  @Output()
  public nameChange = new EventEmitter<string>();

  constructor() { }

  public onNameChange() {
    this.nameChange.emit(this.name);
  }
}

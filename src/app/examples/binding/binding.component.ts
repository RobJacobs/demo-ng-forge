import { Component } from '@angular/core';

@Component({
  selector: 'app-examples-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  public name = 'two way binding example';

  constructor() { }

}

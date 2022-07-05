import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  constructor(
    private router: Router
  ) { }

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor(
    private router: Router
  ) { }

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }

}

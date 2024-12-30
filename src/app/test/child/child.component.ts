import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-test-child',
  imports: [CommonModule, ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  private router = inject(Router);

  constructor() {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }
}

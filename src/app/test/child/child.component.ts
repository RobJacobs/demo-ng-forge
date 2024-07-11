import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [CommonModule, ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  private router = inject(Router);

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }
}

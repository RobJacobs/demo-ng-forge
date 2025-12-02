import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-test-child',
  imports: [ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  private router = inject(Router);

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeToolbarModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-test-parent',
  imports: [ForgeButtonModule, ForgeToolbarModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  private router = inject(Router);

  public onNavigate(route: string) {
    this.router.navigate([route], { state: { id: 0, name: 'name' } });
  }
}

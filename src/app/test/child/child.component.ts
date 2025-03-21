import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeOptionModule, ForgeSelectModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { A11yModule } from '@angular/cdk/a11y';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-test-child',
  imports: [CommonModule, A11yModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule, ForgeTextFieldModule, ForgeSelectModule, ForgeOptionModule, ForgeCheckboxModule, AutoFocusDirective, CardComponent],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  private router = inject(Router);

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }
}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChildren, inject, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeOptionModule, ForgeSelectModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { AppDataService } from 'src/app/app-data.service';
import { AutoFocusDirective } from 'src/app/shared/directives/auto-focus/auto-focus.directive';
import { A11yModule } from '@angular/cdk/a11y';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [CommonModule, A11yModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule, ForgeTextFieldModule, ForgeSelectModule, ForgeOptionModule, ForgeCheckboxModule, AutoFocusDirective, CardComponent],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements AfterViewInit {
  private router = inject(Router);

  @ViewChildren(CardComponent)
  public cardComponentViewChildren: QueryList<CardComponent>;

  @ContentChildren(CardComponent, { descendants: true })
  public cardComponentContentChildren: QueryList<CardComponent>;

  public ngAfterViewInit(): void {
    // console.log(this.cardComponentContentChildren);
    // console.log(this.cardComponentViewChildren);
  }

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }
}

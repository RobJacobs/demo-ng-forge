import { AfterViewInit, Component, ContentChildren, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  @ViewChildren(CardComponent)
  public cardComponentViewChildren: QueryList<CardComponent>;

  @ContentChildren(CardComponent, { descendants: true })
  public cardComponentContentChildren: QueryList<CardComponent>;

  public ngAfterViewInit(): void {
    console.log(this.cardComponentContentChildren);
    console.log(this.cardComponentViewChildren);
  }

  public onClick() {
    console.log(this.cardComponentContentChildren);
    console.log(this.cardComponentViewChildren);
    const cardComponents = this.elementRef.nativeElement.querySelectorAll('app-card');
  }
}

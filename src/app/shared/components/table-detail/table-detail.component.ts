import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-table-detail',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent {
  @Input()
  public rowIndex?: number;

  @Input()
  public data?: any;
}

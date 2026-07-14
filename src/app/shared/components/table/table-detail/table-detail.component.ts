import { JsonPipe } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CardComponent } from '@app/shared/components/card/card.component';

@Component({
  selector: 'app-table-detail',
  imports: [JsonPipe, CardComponent],
  templateUrl: './table-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent {
  @Input()
  public rowIndex?: number;

  @Input()
  public data?: any;
}

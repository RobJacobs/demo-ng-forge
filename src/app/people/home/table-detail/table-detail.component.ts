import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-home-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent {
  @Input()
  public rowIndex?: number;

  @Input()
  public data?: any;

  constructor() { }
}

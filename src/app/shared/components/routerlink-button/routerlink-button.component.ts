import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-routerlink-button',
  templateUrl: './routerlink-button.component.html',
  styleUrls: ['./routerlink-button.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RouterlinkButtonComponent {
  @Input()
  public route?: string;

  @Input()
  queryParams?: any;

  @Input()
  public icon?: string;

  @Input()
  public tooltip?: string;

  constructor() { }

}

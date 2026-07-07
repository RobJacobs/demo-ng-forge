import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [RouterOutlet],
  templateUrl: './people.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {}

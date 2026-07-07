import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-examples',
  imports: [RouterModule],
  templateUrl: './examples.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {}

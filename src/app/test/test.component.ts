import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  imports: [RouterOutlet],
  templateUrl: './test.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./test.component.scss']
})
export class TestComponent {}

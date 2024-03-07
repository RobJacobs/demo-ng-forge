import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ArrayFindPipe } from 'src/app/shared/pipes/array-find.pipe';

@Component({
  selector: 'app-examples-misc',
  standalone: true,
  imports: [
    CommonModule,
    ForgeButtonModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeToolbarModule,
    CardComponent,
    ArrayFindPipe
  ],
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent {
  public data = [
    { value: 0, label: 'Item 0' },
    { value: 1, label: 'Item 1' },
    { value: 2, label: 'Item 2' },
    { value: 3, label: 'Item 3' },
    { value: 4, label: 'Item 4' },
    { value: 5, label: 'Item 5' },
    { value: 6, label: 'Item 6' },
    { value: 7, label: 'Item 7' },
    { value: 8, label: 'Item 8' },
    { value: 9, label: 'Item 9' }
  ];
}

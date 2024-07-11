import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ForgeListItemModule, ForgeListModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-examples-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule, ForgeListItemModule, ForgeListModule],
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  public items01 = ['List 1 - item 01', 'List 1 - item 02', 'List 1 - item 03', 'List 1 - item 04'];
  public items02 = ['List 2 - item 01', 'List 2 - item 02', 'List 2 - item 03', 'List 2 - item 04'];

  public onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}

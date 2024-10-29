import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule, ForgeToolbarModule, ToastService } from '@tylertech/forge-angular';
import { fileTypeFromStream } from 'file-type';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { BusyIndicatorService } from 'src/app/shared/components/busy-indicator/busy-indicator.service';
import { ArrayFindPipe } from 'src/app/shared/pipes/array-find.pipe';

@Component({
  selector: 'app-examples-misc',
  standalone: true,
  imports: [CommonModule, FormsModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule, ForgeToolbarModule, CardComponent, ArrayFindPipe],
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  private appDataService = inject(AppDataService);
  private busyIndicatorService = inject(BusyIndicatorService);
  private toastService = inject(ToastService);
  private propertyPathsData = {
    firstName: 'First',
    lastName: 'Last',
    age: 12,
    citizen: false,
    address: {
      city: 'ctiy value',
      state: 'state value',
      districts: [
        { name: 'district 1', location: 'district 1 location', pets: ['rock', 'dog', 'cat'] },
        { name: 'district 2', location: 'district 2 location' },
        { name: 'district 3', location: 'district 3 location' }
      ]
    },
    friends: ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
  };

  public arrayData = [
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
  public propertyPaths: object;
  public fileName: string;

  public ngOnInit() {
    this.propertyPaths = Utils.objectPropertyPaths(this.propertyPathsData);
  }

  public onShowFile() {
    this.appDataService.getFile(this.fileName).subscribe({
      next: (result) => {
        console.log(result);
        if (result?.size && result.type !== 'text/html') {
          fileTypeFromStream(result.stream()).then((value) => {
            console.log(value);
            let resultBlobUrl: string;
            if (value) {
              const resultBlob = new Blob([result], { type: value.mime });
              resultBlobUrl = URL.createObjectURL(resultBlob);
            } else {
              resultBlobUrl = URL.createObjectURL(result);
            }
            window.open(resultBlobUrl);
            URL.revokeObjectURL(resultBlobUrl);
          });
        } else {
          this.toastService.show({
            message: 'An error occurred downloading the file',
            duration: Infinity,
            dismissible: true
          });
        }
      },
      error: (err) => {
        this.toastService.show({
          message: 'An error occurred downloading the file',
          duration: Infinity,
          dismissible: true
        });
      }
    });
  }

  public onShowBusy() {
    const config = { message: 'Processing request...', progress: 'circular' as const, title: 'Processing title' };
    this.busyIndicatorService.show(config);
    window.setTimeout(() => {
      this.busyIndicatorService.hide();
    }, 5000);
  }
}

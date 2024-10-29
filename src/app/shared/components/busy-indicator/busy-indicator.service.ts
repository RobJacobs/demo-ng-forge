import { inject, Injectable } from '@angular/core';
import { DialogRef, DialogService } from '@tylertech/forge-angular';
import { BusyIndicatorComponent, IBusyIndicatorData } from './busy-indicator.component';

@Injectable({
  providedIn: 'root'
})
export class BusyIndicatorService {
  private dialogService = inject(DialogService);
  private dialogRef: DialogRef<BusyIndicatorComponent, IBusyIndicatorData>;

  public show(data: IBusyIndicatorData) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialogService.open(BusyIndicatorComponent, { options: { persistent: true }, data });
  }

  public hide() {
    this.dialogRef?.close();
    this.dialogRef = undefined;
  }
}

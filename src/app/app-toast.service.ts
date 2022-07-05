import { Injectable } from '@angular/core';
import { ToastService } from '@tylertech/forge-angular';

@Injectable({
  providedIn: 'root'
})
export class AppToastService {
  constructor(private toastService: ToastService) { }

  public show(message: string): void {
    const toast = this.toastService.show({
      message: `${message}`,
      actionHandler: () => toast.hide(),
      placement: 'bottom',
      duration: 3000
    });
  }
}
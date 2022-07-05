import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '@tylertech/forge-angular';

import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ProfileCacheService } from './profile-cache.service';

@Injectable()
export class DeactivateGuard implements CanDeactivate<unknown> {
  constructor(private dialogService: DialogService, private cache: ProfileCacheService) { }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.cache.formGroup.dirty) {
      return new Observable((subscriber) => {
        const dialogRef = this.dialogService.show(
          ConfirmDialogComponent,
          { backdropClose: false, escapeClose: false },
          { data: { title: 'Unsaved changes', message: 'You have unsaved changes which will be lost, do you want to continue?' } }
        );
        const dialogRefSubscription = dialogRef.afterClosed.subscribe((result) => {
          dialogRefSubscription.unsubscribe();
          if (result) {
            this.cache.formGroup.reset();
          }
          subscriber.next(result);
        });
      });
    } else {
      return true;
    }
  }
}

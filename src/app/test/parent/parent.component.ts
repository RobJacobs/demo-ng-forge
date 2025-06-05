import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeCircularProgressModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { finalize, Observable, tap } from 'rxjs';

import { AppCacheService } from 'src/app/app-cache.service';
import { AppDataService } from 'src/app/app-data.service';
import { AppWebSocketService } from 'src/app/app-web-socket.service';

@Component({
  selector: 'app-test-parent',
  imports: [CommonModule, ForgeButtonModule, ForgeCircularProgressModule, ForgeToolbarModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private appDataService = inject(AppDataService);
  private appWebSocketService = inject(AppWebSocketService);

  public isRequesting = false;
  public isPolling = false;
  public isMessaging = false;
  public response: string;

  public ngOnInit() {
    this.appWebSocketService.webSocketSubject.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (result) => {
        this.isMessaging = false;
        console.log(result);
        this.response = JSON.stringify(result);
      }
    });
  }

  public ngOnDestroy(): void {
    this.appWebSocketService.webSocketSubject.complete();
  }

  public onNavigate(route: string) {
    this.router.navigate([route], { state: { id: 0, name: 'name' } });
  }

  public onMakeLongRequest() {
    this.isRequesting = true;
    this.response = undefined;
    this.appDataService
      .getLongRequest()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.isRequesting = false))
      )
      .subscribe({
        next: (result) => {
          console.log(result);
          this.response = JSON.stringify(result);
        },
        error: (error) => console.log(error)
      });
  }

  public onMakePollingRequest() {
    this.isPolling = true;
    this.response = undefined;
    this.appDataService
      .pollingRequest('simpson')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.isPolling = false))
      )
      .subscribe({
        next: (r) => {
          console.log(r);
          this.response = JSON.stringify(r);
        }
      });
  }

  public onSendMessage() {
    this.isMessaging = true;
    this.response = undefined;
    this.appWebSocketService.webSocketSubject.next({
      data: 'message from front end.',
      date: new Date()
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ForgeButtonModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { Observable, tap, takeUntil } from 'rxjs';

import { AppCacheService } from 'src/app/app-cache.service';
import { AppDataService } from 'src/app/app-data.service';
import { AppWebSocketService } from 'src/app/app-web-socket.service';

@Component({
  selector: 'app-test-parent',
  standalone: true,
  imports: [CommonModule, ForgeToolbarModule, ForgeTextFieldModule, ForgeButtonModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private appDataService = inject(AppDataService);
  private appWebSocketService = inject(AppWebSocketService);
  private appCache = inject(AppCacheService);

  public onNavigate(route: string) {
    this.router.navigate([route], { state: { id: 0, name: 'name' } });
  }

  public onMakeRequest() {
    this.getLongRequest().subscribe();
  }

  public onSendMessage() {
    this.appWebSocketService.webSocketSubject.next({ data: 'message from front end.', date: new Date() });
  }

  private getLongRequest(): Observable<any> {
    return this.appDataService.getLongRequest().pipe(
      tap({
        next: (result) => console.log(result),
        error: (error) => console.log(error)
      }),
      takeUntil(this.appCache.cancelHttpRequests)
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, takeUntil } from 'rxjs';
import { ForgeButtonModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { AppCacheService } from 'src/app/app-cache.service';
import { AppDataService } from 'src/app/app-data.service';

@Component({
  selector: 'app-test-parent',
  standalone: true,
  imports: [CommonModule, ForgeToolbarModule, ForgeButtonModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  private router = inject(Router);
  private appDataService = inject(AppDataService);
  private appCache = inject(AppCacheService);

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }

  public onMakeRequest() {
    this.getLongRequest().subscribe();
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

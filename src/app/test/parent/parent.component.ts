import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, takeUntil } from 'rxjs';
import { AppCacheService } from 'src/app/app-cache.service';
import { AppDataService } from 'src/app/app-data.service';

@Component({
  selector: 'app-test-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor(
    private router: Router,
    private appDataService: AppDataService,
    private appCache: AppCacheService
  ) { }

  public onNavigate(route: string) {
    this.router.navigate([route]);
  }

  public onMakeRequest() {
    this.getLongRequest().subscribe();
  }

  private getLongRequest(): Observable<any> {
    return this.appDataService.getLongRequest().pipe(
      tap({
        next: result => console.log(result),
        error: error => console.log(error)
      }),
      takeUntil(this.appCache.cancelHttpRequests$)
    );
  }

}

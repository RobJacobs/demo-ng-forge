import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isDefined } from '@tylertech/forge-core';
import { ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeLabelValueModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { Utils } from 'src/utils';
import { AppCacheService } from 'src/app/app-cache.service';
import { AppDataService } from 'src/app/app-data.service';
import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { PeopleCacheService } from '../people-cache.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-detail',
  standalone: true,
  imports: [CommonModule, ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeLabelValueModule, ForgeToolbarModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public appCache = inject(AppCacheService);
  private appDataService = inject(AppDataService);
  public cache = inject(PeopleCacheService);

  public person?: IPerson;
  public imageUrl?: string;
  public index = 0;

  private noImageUrl = 'mock-data/no-image.png';

  constructor() {
    const id = this.route.snapshot.params['id'];
    if (isDefined(id)) {
      this.appDataService.getPerson(id).subscribe((r) => {
        this.person = r;
        this.imageUrl = `mock-data/${Utils.formatNumber(this.person?.id as number, '2.0-0')}.png`;
      });
    } else {
      this.router.navigate(['people/home']);
    }
  }

  public onNavigate(route: string) {
    switch (route) {
      case 'back':
        this.router.navigate(['people/home']);
        break;
    }
  }

  public onViewWiki() {
    window.open(this.person?.url, '_blank');
  }

  public onImageError(event: Event) {
    const targetElement = event.target as HTMLImageElement;
    if (!targetElement.src.includes(this.noImageUrl)) {
      targetElement.src = this.noImageUrl;
      targetElement.onerror = null;
    }
  }
}

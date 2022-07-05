import { Component } from '@angular/core';

import { AppCacheService } from 'src/app/app-cache.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public appCache: AppCacheService) { }

}

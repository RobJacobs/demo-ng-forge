import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleChartService {
  public static loadGoogleChartService(): Observable<void> {
    return new Observable<void>((o) => {
      let scriptElement = document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]') as HTMLOrSVGScriptElement;
      if (scriptElement) {
        o.next();
        o.complete();
      } else {
        scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = 'https://www.gstatic.com/charts/loader.js';
        scriptElement.onload = () => {
          o.next();
          o.complete();
        };
        document.body.appendChild(scriptElement);
      }
    });
  }
}

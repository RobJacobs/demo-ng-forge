import { HttpClient } from '@angular/common/http';
import { inject, Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// declare global {
//   interface Window {
//     grecaptcha: {
//       enterprise: any;
//     };
//   }
// }

@Injectable()
export class ReCaptchaService {
  private httpClient = inject(HttpClient);
  private ngZone = inject(NgZone);
  public reCaptchaSiteKey?: string;

  public initialize(siteKey: string): Observable<void> {
    const sub = new Subject<void>();

    const reCaptchaReady = () => {
      window.grecaptcha.enterprise.ready(() => {
        this.ngZone.run(() => {
          sub.next();
          sub.complete();
        });
      });
    };

    this.reCaptchaSiteKey = siteKey;

    if (!document.querySelector(`script[src="https://www.google.com/recaptcha/enterprise.js?render=${this.reCaptchaSiteKey}"`)) {
      const scriptElement = document.createElement('script');
      scriptElement.src = `https://www.google.com/recaptcha/enterprise.js?render=${this.reCaptchaSiteKey}`;
      scriptElement.async = true;
      scriptElement.defer = true;
      scriptElement.onload = () => {
        reCaptchaReady();
      };
      document.body.appendChild(scriptElement);
    } else {
      reCaptchaReady();
    }

    return sub;
  }

  public executeChallenge(action: string): Observable<string> {
    this.ngZone.runOutsideAngular(() => {
      // need to clear any cached token
      window.grecaptcha.enterprise.reset(this.reCaptchaSiteKey as any);
    });

    const sub = new Subject<string>();

    window.grecaptcha.enterprise.ready(() => {
      try {
        (window.grecaptcha.enterprise as any)
          .execute(this.reCaptchaSiteKey, { action })
          .then((token) => {
            sub.next(token);
            sub.complete();
          })
          .catch((err) => {
            // this catches when user dismisses image challenge without completing
            sub.error(err);
            sub.complete();
          });
      } catch (err) {
        sub.error(err);
        sub.complete();
      }
    });

    return sub.asObservable();
  }

  public assessToken(apiKey: string, token: string, action: string): Observable<any> {
    const assessmentRequest = {
      event: {
        token,
        expectedAction: action,
        siteKey: this.reCaptchaSiteKey
      }
    };
    return this.httpClient.post(`https://recaptchaenterprise.googleapis.com/v1/projects/test-3844b/assessments?key=${apiKey}`, assessmentRequest);
  }
}

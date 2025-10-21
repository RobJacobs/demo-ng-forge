import { CommonModule } from '@angular/common';
import { Component, inject, NgZone } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ForgeButtonModule,
  ForgeTextFieldModule,
  ForgeToolbarModule,
  ForgeDividerModule,
  ForgeLabelValueModule,
  ToastService,
  ForgeLinearProgressModule
} from '@tylertech/forge-angular';
import { finalize } from 'rxjs';

import { Utils } from 'src/utils';
import { ReCaptchaService } from './re-captcha.service';

@Component({
  selector: 'app-re-captcha',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgeButtonModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgeLinearProgressModule,
    ForgeTextFieldModule,
    ForgeToolbarModule
  ],
  templateUrl: './re-captcha.component.html',
  styleUrl: './re-captcha.component.scss'
})
export class ReCaptchaComponent {
  private ngZone = inject(NgZone);
  private reCatpchaService = inject(ReCaptchaService);
  private toastService = inject(ToastService);
  public isBusy = false;
  public isInitialized = false;

  public formGroup = new FormGroup({
    recaptchaAction: new FormControl<string | null>('TEST', { validators: [Validators.required] }),
    recaptchaSiteKey: new FormControl<string | null>(null, { validators: [Validators.required] }),
    googleAPIKey: new FormControl<string | null>(null, { validators: [Validators.required] })
  });
  public token?: string;
  public assessment?: {
    event: {
      expectedAction: string;
    };
    riskAnalysis: {
      challenge: string;
      score: number;
    };
    tokenProperties: {
      action: string;
      createTime: string;
      invalidReason: string;
      valid: boolean;
    };
  };

  public onInitialize() {
    this.formGroup.controls.recaptchaSiteKey.disable();
    this.isBusy = true;

    // intialize would typically be done in component ngOnInit
    // as the site key should already be known
    this.reCatpchaService
      .initialize(this.formGroup.getRawValue().recaptchaSiteKey)
      .pipe(finalize(() => (this.isBusy = false)))
      .subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.isInitialized = true;
          });

          this.toastService.show('Re-Captcha initialized.');
        },
        error: (err) => {
          this.toastService.show('An error occurred initializing Re-Captcha, see console for details.');
        }
      });
  }

  public onExecute() {
    this.token = undefined;
    this.assessment = undefined;
    this.isBusy = true;

    this.reCatpchaService
      .executeChallenge(this.formGroup.value.recaptchaAction)
      .pipe(
        finalize(() => {
          this.isBusy = false;
        })
      )
      .subscribe({
        next: (result) => {
          this.token = result;
        },
        error: (err) => {
          console.log(err);
          this.toastService.show('An error occurred, see console for details.');
        }
      });
  }

  public onAssess() {
    this.assessment = undefined;
    this.isBusy = true;

    this.reCatpchaService
      .assessToken(this.formGroup.value.googleAPIKey, this.token, this.formGroup.value.recaptchaAction)
      .pipe(finalize(() => (this.isBusy = false)))
      .subscribe({
        next: (result) => {
          this.assessment = {
            event: {
              expectedAction: result.event.expectedAction
            },
            riskAnalysis: {
              challenge: result.riskAnalysis.challenge,
              score: result.riskAnalysis.score
            },
            tokenProperties: {
              action: result.tokenProperties.action,
              createTime: Utils.formatDate(result.tokenProperties.createTime, 'MM/dd/yyyy hh:mm'),
              invalidReason: result.tokenProperties.invalidReason,
              valid: result.tokenProperties.valid
            }
          };
          console.log(result);
        },
        error: (err) => {
          console.log(err);
          this.toastService.show('An error occurred, see console for details.');
        }
      });
  }
}

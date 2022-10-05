import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { isDefined } from '@tylertech/forge-core';

@Directive({
  selector: '[appIndeterminate]',
  standalone: true
})
export class IndeterminateDirective implements OnDestroy {
  private value?: boolean;
  private inputElement: HTMLInputElement;
  private formControl?: FormControl;
  private changeSubscription?: Subscription;

  @Input()
  public set appIndeterminate(control: FormControl) {
    this.formControl = control;
    this.value = control.value;
    this.inputElement.indeterminate = !isDefined(this.value);

    this.setSubscription();
  }

  constructor(private element: ElementRef) {
    this.inputElement = this.element.nativeElement as HTMLInputElement;
    this.inputElement.indeterminate = true;
    this.inputElement.addEventListener('change', (event) => {
      if (!isDefined(this.value)) {
        this.value = true;
      } else if (this.value) {
        this.value = false;
      } else {
        this.value = undefined;
      }
      this.inputElement.indeterminate = !isDefined(this.value);
      this.changeSubscription?.unsubscribe();
      requestAnimationFrame(() => {
        this.formControl?.setValue(this.value);
        this.setSubscription();
      });
    });
  }

  public ngOnDestroy(): void {
    this.changeSubscription?.unsubscribe();
  }

  private setSubscription() {
    this.changeSubscription = this.formControl?.valueChanges.subscribe(o => {
      this.inputElement.indeterminate = !isDefined(this.formControl?.value);
      this.value = this.formControl?.value;
    });
  }
}

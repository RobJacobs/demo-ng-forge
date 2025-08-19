import { ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyDemoService } from './formly-demo.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { formlyDemoConstants } from './formly-demo.constants';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html',
  styleUrls: ['./formly-demo.component.scss'],
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class FormlyDemoComponent implements OnInit {
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);
  private moduleService = inject(FormlyDemoService);

  private form?: Form;

  public formGroup = new FormGroup({});
  public formDefinition?: FormlyFieldConfig[];
  public formOptions: FormlyFormOptions = {
    // showError(field) {
    //   console.log(field);
    //   return false;
    // },
    // build: (field) => {
    //   console.log(field);
    //   return field;
    // }
  };
  public model = {
    name: '',
    age: 10
  };
  public record: any;
  public formMessage?: { id: string; message: string };

  constructor() {
    this.moduleService.formMessage.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (result) => {
        this.formMessage = result;
      }
    });
  }

  public ngOnInit() {
    this.formDefinition = formlyDemoConstants.formDefinitionAll as any;
    this.changeDetectorRef.detectChanges();
  }

  private getFormErrors(control: AbstractControl) {
    if (control instanceof FormControl) {
      return control.errors ? control : null;
    }

    if (control instanceof FormGroup) {
      const formErrors = control.errors ? { groupError: control } : ({} as any);
      Object.keys(control.controls).forEach((key) => {
        const error = this.getFormErrors(control.get(key) as AbstractControl);
        if (error) {
          formErrors[key] = error;
        }
      });

      return Object.keys(formErrors).length > 0 ? formErrors : null;
    }

    return null;
  }
}

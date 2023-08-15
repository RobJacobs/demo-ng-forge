import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyDemoService } from './formly-demo.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { formlyDemoConstants } from './formly-demo.constants';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html',
  styleUrls: ['./formly-demo.component.scss']
})
export class FormlyDemoComponent implements OnInit {
  private form: Form;

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
  } as any;
  public record: any;
  public formMessage: { id: string; message: string; };

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private moduleService: FormlyDemoService
  ) {
    this.moduleService.formMessage.pipe(
      takeUntilDestroyed()
    ).subscribe(result => {
      this.formMessage = result;
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit() {
    this.formDefinition = formlyDemoConstants.formDefinitionBasic;
    this.changeDetectorRef.detectChanges();
  }

  private getFormErrors(control: AbstractControl) {
    if (control instanceof FormControl) {
      return control.errors ? control : null;
    }

    if (control instanceof FormGroup) {
      const formErrors = control.errors ? { groupError: control } : {};
      Object.keys(control.controls).forEach(key => {
        const error = this.getFormErrors(control.get(key));
        if (error) {
          formErrors[key] = error;
        }
      });

      return Object.keys(formErrors).length > 0 ? formErrors : null;
    }

    return null;
  }

}

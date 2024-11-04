import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule, ForgeToolbarModule, ToastService } from '@tylertech/forge-angular';
import { of, Subject } from 'rxjs';
import { fileTypeFromStream } from 'file-type';

import { Utils } from 'src/utils';
import { AppDataService } from 'src/app/app-data.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { BusyIndicatorService } from 'src/app/shared/components/busy-indicator/busy-indicator.service';
import { ArrayFindPipe } from 'src/app/shared/pipes/array-find.pipe';

@Component({
  selector: 'app-examples-misc',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ForgeButtonModule, ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeTextFieldModule, ForgeToolbarModule, CardComponent, ArrayFindPipe],
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  private appDataService = inject(AppDataService);
  private busyIndicatorService = inject(BusyIndicatorService);
  private toastService = inject(ToastService);
  private propertyPathsData = {
    firstName: 'First',
    lastName: 'Last',
    age: 12,
    citizen: false,
    address: {
      city: 'ctiy value',
      state: 'state value',
      districts: [
        { name: 'district 1', location: 'district 1 location', pets: ['rock', 'dog', 'cat'] },
        { name: 'district 2', location: 'district 2 location' },
        { name: 'district 3', location: 'district 3 location' }
      ]
    },
    friends: ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
  };
  private asyncValidators = new Map<string, { value: any; control: AbstractControl; response: Subject<ValidationErrors | null> }>();

  public arrayData = [
    { value: 0, label: 'Item 0' },
    { value: 1, label: 'Item 1' },
    { value: 2, label: 'Item 2' },
    { value: 3, label: 'Item 3' },
    { value: 4, label: 'Item 4' },
    { value: 5, label: 'Item 5' },
    { value: 6, label: 'Item 6' },
    { value: 7, label: 'Item 7' },
    { value: 8, label: 'Item 8' },
    { value: 9, label: 'Item 9' }
  ];
  public propertyPaths: object;
  public fileName: string = '';
  public fileEncoded = false;
  public openAsDownload = false;
  public formGroup = new FormGroup({
    name: new FormControl('', { asyncValidators: [this.asyncValidator('name')] }),
    age: new FormControl('', { asyncValidators: [this.asyncValidator('age')] }),
    location: new FormControl('', { asyncValidators: [this.asyncValidator('location')] })
  });

  public ngOnInit() {
    this.propertyPaths = Utils.objectPropertyPaths(this.propertyPathsData);
  }

  public onShowFile() {
    this.appDataService.getFile(this.fileName).subscribe({
      next: (result) => {
        if (result?.size && result.type !== 'text/html') {
          if (this.fileEncoded) {
            result.text().then((value) => {
              const encodedBlob = this.base64toBlob(value);
              if (encodedBlob) {
                this.openFile(encodedBlob);
              }
            });
          } else {
            this.openFile(result);
          }
        } else {
          this.toastService.show({
            message: 'An error occurred downloading the file',
            duration: Infinity,
            dismissible: true
          });
        }
      },
      error: (err) => {
        this.toastService.show({
          message: 'An error occurred downloading the file',
          duration: Infinity,
          dismissible: true
        });
      }
    });
  }

  public onShowBusy() {
    const config = { message: 'Processing request...', progress: 'circular' as const, title: 'Processing title' };
    this.busyIndicatorService.show(config);
    window.setTimeout(() => {
      this.busyIndicatorService.hide();
    }, 5000);
  }

  public onValidate() {
    if (this.asyncValidators.size) {
      const key = this.asyncValidators.keys().next().value;
      const validator = this.asyncValidators.get(key);
      // validator.response.next({ wrongFormat: true });
      validator.response.next(null);
      validator.response.complete();
      // validator.control.markAsPristine();
      // validator.control.markAsUntouched();
      this.asyncValidators.delete(key);
    }
  }

  public onResetForm() {
    this.asyncValidators.forEach((v) => {
      v.response.next(null);
      v.response.complete();
    });
    this.asyncValidators.clear();
    this.formGroup.reset();
  }

  private asyncValidator(name: string): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.dirty) {
        return of(null);
      }

      if (!this.asyncValidators.has(name)) {
        this.asyncValidators.set(name, { value: control.value, control, response: new Subject<ValidationErrors | null>() });
      }

      return this.asyncValidators.get(name).response;
    };
  }

  private base64toBlob(value: string): Blob {
    // powershell script to convert to base64
    // $fileBytes = [System.IO.File]::ReadAllBytes(‘file‘)
    // $encodedText = [Convert]::ToBase64String($fileBytes)
    // [System.IO.File]::WriteAllText(‘file-output‘, $encodedText)

    let binaryValue: string;
    try {
      binaryValue = atob(value);
    } catch (e) {
      console.error(e);
      this.toastService.show({
        message: 'An error occurred decoding the base64 file',
        duration: Infinity,
        dismissible: true
      });
      return undefined;
    }
    const valueArray = Uint8Array.from(binaryValue, (c) => c.charCodeAt(0));
    return new Blob([valueArray]);
  }

  private openFile(value: Blob) {
    fileTypeFromStream(value.stream()).then((fileTypeResult) => {
      const resultBlob = new Blob([value], { type: fileTypeResult?.mime?.length ? fileTypeResult.mime : 'application/octet-stream' });
      const resultBlobUrl = URL.createObjectURL(resultBlob);

      if (this.openAsDownload) {
        let openFileName = this.fileName;
        if (openFileName.split('.').at(-1) !== fileTypeResult.ext) {
          openFileName += `.${fileTypeResult.ext}`;
        }

        const linkElement = document.createElement('a') as HTMLAnchorElement;
        linkElement.style.display = 'none';
        linkElement.href = resultBlobUrl;
        linkElement.setAttribute('download', openFileName);
        document.body.appendChild(linkElement);
        linkElement.click();
        linkElement.remove();
      } else {
        window.open(resultBlobUrl);
      }

      URL.revokeObjectURL(resultBlobUrl);
    });
  }
}

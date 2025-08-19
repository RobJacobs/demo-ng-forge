import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeToolbarModule } from '@tylertech/forge-angular';
import { QuillModule, QuillModules } from 'ngx-quill';

// https://quilljs.com/docs/
// https://github.com/KillerCodeMonkey/ngx-quill

@Component({
  selector: 'app-text-editor',
  imports: [CommonModule, ReactiveFormsModule, QuillModule, ForgeButtonModule, ForgeToolbarModule],
  templateUrl: './text-editor.component.html',
  styleUrls: [
    './text-editor.component.scss'
    // '../../../node_modules/quill/dist/quill.snow.css'
  ]
  // encapsulation: ViewEncapsulation.None
})
export class TextEditorComponent {
  public elementRef = inject(ElementRef);

  public textEditorFormControl = new FormControl();
  public quillModules: QuillModules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'code'],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        ['link'],
        [{ color: [] }, { background: [] }],
        ['clean'],
        [{ font: [] }, { size: [] }, { header: [1, 2, 3, 4, 5, 6, false] }],
        ['image']
      ]
      // handlers: {
      //   'link': (value) => {
      //     console.log(value);
      //   }
      // }
    }
  };

  public onEditorCreated(quill: any) {
    console.log(quill);
    this.elementRef.nativeElement.querySelectorAll('.ql-toolbar button').forEach((el: HTMLElement) => (el.tabIndex = -1));
    this.elementRef.nativeElement.querySelectorAll('.ql-toolbar [role="button"]').forEach((el: HTMLElement) => (el.tabIndex = -1));
  }

  /* eslint @typescript-eslint/no-unused-expressions: 0 */
  public onToggleState() {
    this.textEditorFormControl.disabled ? this.textEditorFormControl.enable() : this.textEditorFormControl.disable();
  }
}

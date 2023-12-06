import { Component, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuillModules } from 'ngx-quill';
import { Quill } from 'quill';

// https://quilljs.com/docs/
// https://github.com/KillerCodeMonkey/ngx-quill

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
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
      ],
      // handlers: {
      //   'link': (value) => {
      //     console.log(value);
      //   }
      // }
    }
  };

  constructor(
    public elementRef: ElementRef
  ) {

  }

  public onEditorCreated(quill: Quill) {
    console.log(quill);
    this.elementRef.nativeElement.querySelectorAll('.ql-toolbar button').forEach((el: HTMLElement) => el.tabIndex = -1);
    this.elementRef.nativeElement.querySelectorAll('.ql-toolbar [role="button"]').forEach((el: HTMLElement) => el.tabIndex = -1);
  }

  public onToggleState() {
    this.textEditorFormControl.disabled ? this.textEditorFormControl.enable() : this.textEditorFormControl.disable();
  }
}
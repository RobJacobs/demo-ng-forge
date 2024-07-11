import { Directive, HostListener, forwardRef, Input, Renderer2, ElementRef } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appInputCasing]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputCasingDirective)
    }
  ]
})
export class InputCasingDirective extends DefaultValueAccessor {
  @HostListener('input', ['$event'])
  public inputHandler(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const start = target.selectionStart;

    target.value = this.#casing === 'lower' ? target.value.toLowerCase() : target.value.toUpperCase();
    target.setSelectionRange(start, start);

    this.onChange(target.value);
  }

  #casing: 'upper' | 'lower' = 'upper';
  @Input()
  public set appInputCasing(value: 'upper' | 'lower') {
    this.#casing = value;
  }
}

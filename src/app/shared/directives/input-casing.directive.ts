import { Directive, HostListener, forwardRef, Renderer2, ElementRef, input } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appInputCasing]',
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
  public inputHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    const start = target.selectionStart;

    target.value = this.appInputCasing() === 'lower' ? target.value.toLowerCase() : target.value.toUpperCase();
    target.setSelectionRange(start, start);

    this.onChange(target.value);
  }

  public readonly appInputCasing = input<'upper' | 'lower'>('upper');
}

import { Component, ElementRef, HostListener, OnInit, Renderer2, StaticProvider, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxComponent } from '@tylertech/forge';

export const CHECKBOX_INDETERMINATE_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxIndeterminateComponent),
  multi: true
};

@Component({
  selector: 'app-checkbox-indeterminate',
  standalone: true,
  imports: [],
  providers: [CHECKBOX_INDETERMINATE_VALUE_ACCESSOR],
  templateUrl: './checkbox-indeterminate.component.html',
  styleUrl: './checkbox-indeterminate.component.scss'
})
export class CheckboxIndeterminateComponent implements OnInit, ControlValueAccessor {
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private get forgeCheckBox(): CheckboxComponent {
    return this.elementRef.nativeElement.querySelector('forge-checkbox') as CheckboxComponent;
  }
  private value?: boolean | null;

  @HostListener('blur')
  public elementBlur() {
    this.onTouched();
  }

  public ngOnInit() {
    this.forgeCheckBox.addEventListener('change', () => {
      this.value = this.value === true ? false : this.value === false ? null : true;
      this.setCheckboxState();
      this.onChange(this.value);
      this.onTouched();
    });
  }

  public onChange = (_: any) => { };
  public onTouched = () => { };

  public writeValue(value: boolean | null) {
    this.value = value;
    this.setCheckboxState();
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean) {
    this.forgeCheckBox.disabled = isDisabled;
  }

  private setCheckboxState() {
    if (this.value === true) {
      this.renderer.setProperty(this.forgeCheckBox, 'checked', true);
      this.renderer.setProperty(this.forgeCheckBox, 'indeterminate', false);
    } else if (this.value === false) {
      this.renderer.setProperty(this.forgeCheckBox, 'checked', false);
      this.renderer.setProperty(this.forgeCheckBox, 'indeterminate', false);
    } else {
      requestAnimationFrame(() => {
        this.renderer.setProperty(this.forgeCheckBox, 'checked', false);
        requestAnimationFrame(() => {
          this.renderer.setProperty(this.forgeCheckBox, 'indeterminate', true);
        });
      });
    }
  }
}

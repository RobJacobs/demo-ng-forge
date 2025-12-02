import {
  AfterViewInit,
  Component,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  forwardRef,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
  NgZone,
  inject,
  input,
  viewChild,
  DestroyRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { AutocompleteFilterCallback, IOption, IAutocompleteOptionGroup, AutocompleteSelectedTextBuilder, AutocompleteComponent } from '@tylertech/forge';
import { isArray, isString, isDefined } from '@tylertech/forge-core';
import {
  ForgeAutocompleteModule,
  ForgeDividerModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeListItemModule,
  ForgeListModule,
  ForgeTextFieldModule
} from '@tylertech/forge-angular';
import { ListDropdownHeaderBuilder } from '@tylertech/forge/esm/list-dropdown';

import { Utils } from 'src/utils';
@Component({
  selector: 'app-autocomplete-range',
  templateUrl: './autocomplete-range.component.html',
  styleUrls: ['./autocomplete-range.component.scss'],
  imports: [
    FormsModule,
    ForgeAutocompleteModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeListItemModule,
    ForgeListModule,
    ForgeTextFieldModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteRangeComponent),
      multi: true
    }
  ]
})
export class AutocompleteRangeComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private ngZone = inject(NgZone);
  private viewContainerRef = inject(ViewContainerRef);
  private destroyRef = inject(DestroyRef);

  @HostListener('focusout')
  public autocompleteBlur() {
    this.onTouched();
  }
  private readonly autocompleteRef = viewChild<ElementRef>('rangeAutocomplete');
  private readonly rangeTemplateRef = viewChild<TemplateRef<any>>('rangeTemplate');
  private readonly filterInputRef = viewChild<ElementRef>('filterInput');

  public readonly optionFilter = input<(filter: string) => Observable<IOption[]>>();

  @Input()
  public set value(values: IOption[] | string[] | string[][] | number[]) {
    this.writeValue(values);
  }
  @Output()
  public valueChange = new EventEmitter<string[] | string[][] | number[]>();

  public readonly label = input<string>();
  public readonly maxlength = input<number | null>(null);

  public rangeOptions: IOption[] = [];
  public rangeMin?: string;
  public rangeMax?: string;
  public rangeMessage?: string;
  public elementId = Utils.uniqueId();

  private rangeRef?: EmbeddedViewRef<any>;
  private filter = '';

  public onChange = (fn: any) => {};
  public onTouched = () => {};

  public onFilter: AutocompleteFilterCallback = (filter: string): Promise<IOption[] | IAutocompleteOptionGroup[]> => {
    this.filter = filter;
    return new Promise((resolve, reject) => {
      const optionFilter = this.optionFilter();
      if (optionFilter) {
        optionFilter(this.filter)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: (response) => {
              const options: IOption[] = [];
              response.forEach((o) => (isArray(o.value) ? this.rangeOptions.push(o) : options.push(o)));
              resolve(options);
            },
            error: () => reject()
          });
      }
    });
  };

  public optionHeaderBuilder: ListDropdownHeaderBuilder = (): HTMLElement => {
    this.ngZone.run(() => {
      this.rangeMin = undefined;
      this.rangeMax = undefined;
      this.rangeMessage = undefined;
    });

    return this.rangeRef?.rootNodes[0] as HTMLElement;
  };

  public selectedTextBuilder: AutocompleteSelectedTextBuilder = (selectedOptions: IOption[]): string => {
    if (this.autocompleteRef()?.nativeElement.open && this.filter.length) {
      return this.filter;
    }

    const optionCount = selectedOptions?.length;
    const rangeOptionCount = this.rangeOptions?.length;

    if (optionCount > 0 && rangeOptionCount > 0) {
      return `${optionCount} option(s) selected, ${rangeOptionCount} range(s)`;
    } else if (optionCount > 0) {
      return `${optionCount} option(s) selected`;
    } else if (rangeOptionCount > 0) {
      return `${rangeOptionCount} range(s)`;
    }

    return '';
  };

  public writeValue(values: IOption[] | string[] | string[][] | number[]) {
    const options: IOption[] = [];
    this.rangeOptions.length = 0;
    if (isArray(values)) {
      values.forEach((o) => {
        if (isArray(o) || isArray((o as IOption).value)) {
          const rangeOption = isDefined((o as IOption).value) ? (o as IOption).value : o;
          this.rangeOptions.push({
            label: `${rangeOption[0]} to ${rangeOption[1]}`,
            value: rangeOption
          });
        } else {
          options.push(o as IOption);
        }
      });
    }
    window.requestAnimationFrame(() => {
      ((this.autocompleteRef() as ElementRef).nativeElement as AutocompleteComponent).value = options;
    });
  }

  public ngAfterViewInit() {
    window.requestAnimationFrame(() => {
      this.rangeRef = this.viewContainerRef.createEmbeddedView(this.rangeTemplateRef() as TemplateRef<any>);
      (this.rangeRef.rootNodes[0] as HTMLElement).remove();
    });
  }

  public ngOnDestroy() {
    this.rangeRef?.destroy();
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public onAutocompleteChange() {
    this.emitChangeEvents();
  }

  public onAddRangeOption() {
    if (!this.rangeMin?.length && !this.rangeMax?.length) {
      this.rangeMessage = 'A min or max value is required.';
      return;
    }

    this.rangeMin = isString(this.rangeMin) ? this.rangeMin?.trim() : this.rangeMin;
    this.rangeMax = isString(this.rangeMax) ? this.rangeMax?.trim() : this.rangeMax;

    if (this.rangeMin?.length && this.rangeMax?.length) {
      const comp = Utils.comparator(this.rangeMin, this.rangeMax, 'string');
      if (comp === 0) {
        this.rangeMessage = 'Min and Max cannot be the same value.';
        return;
      }
      if (comp === 1) {
        this.rangeMessage = 'Min value cannot be greater than Max value.';
        return;
      }
    }

    const optionIndex = this.rangeOptions.findIndex((o) => o.value[0] === this.rangeMin && o.value[1] === this.rangeMax);
    if (optionIndex !== -1) {
      this.rangeMessage = 'This range is already defined.';
      return;
    }

    this.rangeMessage = undefined;

    const label =
      this.rangeMin?.length && this.rangeMax?.length
        ? `${this.rangeMin} to ${this.rangeMax}`
        : this.rangeMin?.length
          ? `Greater than ${this.rangeMin}`
          : `Less than ${this.rangeMax}`;

    this.rangeOptions.push({ label, value: [this.rangeMin, this.rangeMax] });
    this.emitChangeEvents();
    this.rangeMin = undefined;
    this.rangeMax = undefined;

    (this.filterInputRef() as ElementRef).nativeElement.value = this.selectedTextBuilder(this.autocompleteRef()?.nativeElement.value);
  }

  public onDeleteRangeOption(option: IOption) {
    (this.rangeRef?.rootNodes[0] as HTMLElement).focus();
    const optionIndex = this.rangeOptions.findIndex((o) => o.value === option.value);
    if (optionIndex !== -1) {
      this.rangeOptions.splice(optionIndex, 1);
      (this.filterInputRef() as ElementRef).nativeElement.value = this.selectedTextBuilder(this.autocompleteRef()?.nativeElement.value);
      this.emitChangeEvents();
    }
  }

  private emitChangeEvents() {
    const options = [];
    if (isArray(this.rangeOptions) && this.rangeOptions.length) {
      options.push(...this.rangeOptions.map((o) => o.value));
    }

    const values = this.autocompleteRef()?.nativeElement.value;
    if (isArray(values) && values.length) {
      options.push(...values);
    }

    this.onChange(options);
    this.valueChange.emit(options);
  }
}

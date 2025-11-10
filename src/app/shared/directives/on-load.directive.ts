import { AfterViewInit, Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appOnLoad]'
})
export class OnLoadDirective implements AfterViewInit {
  @Output()
  public loaded = new EventEmitter<void>();

  public ngAfterViewInit() {
    this.loaded.emit();
  }
}

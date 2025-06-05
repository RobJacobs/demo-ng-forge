import { Component, DestroyRef, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { PdfViewerModule as NgPdfViewerModule } from 'ng2-pdf-viewer';
import { PDFDocumentProxy, PDFProgressData, PDFSource, ZoomScale, PdfViewerComponent } from 'ng2-pdf-viewer';
import { removeAllChildren, debounce } from '@tylertech/forge-core';
import {
  ForgeBannerModule,
  ForgeButtonModule,
  ForgeCheckboxModule,
  ForgeCircularProgressModule,
  ForgeDividerModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgePopoverModule,
  ForgeTextFieldModule,
  ForgeToolbarModule,
  ForgeTooltipModule,
  PopoverDirective
} from '@tylertech/forge-angular';

import { CallbackPipe } from 'src/app/shared/pipes/callback.pipe';
import { pdfString } from './pdf-string';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// https://github.com/VadimDez/ng2-pdf-viewer
// https://github.com/mozilla/pdf.js/tree/master/web
// https://mozilla.github.io/pdf.js/web/viewer.html
// https://github.com/alekswebnet/pdfjs-viewer-element web component implementation of mozilla example

@Component({
  selector: 'app-pdf-viewer',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgPdfViewerModule,
    ForgeBannerModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeCircularProgressModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgePopoverModule,
    ForgeTextFieldModule,
    ForgeToolbarModule,
    ForgeTooltipModule,
    CallbackPipe
  ],
  templateUrl: './pdf-viewer-demo.component.html',
  styleUrls: ['./pdf-viewer-demo.component.scss']
})
export class PdfViewerDemoComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  private readonly pdfViewerComponent = viewChild<PdfViewerComponent>('pdfViewer');
  private readonly pdfViewerLeftToolbarRef = viewChild<ElementRef<HTMLElement>>('pdfViewerLeftToolbar');
  private readonly searchPopoverDirective = viewChild<PopoverDirective>('searchPopover');
  private readonly searchInputElementRef = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  public pdfSrc: string | Uint8Array | PDFSource = './assets/pdf-test.pdf';
  public error?: { message: string; name?: string };
  public page = 1;
  public zoom = 1;
  private zoomScale: ZoomScale = 'page-width';
  public pdf?: PDFDocumentProxy;
  public isLoaded = false;
  public searchMatches = -1;

  public showLeftToolbar = false;
  public navButtonDisabled = (page: number, navButton: 'prev' | 'next') => {
    if (!this.pdf?.numPages && this.pdf?.numPages <= 1) {
      return true;
    }
    switch (navButton) {
      case 'prev':
        return page > 1 ? false : true;
      case 'next':
        return page < this.pdf?.numPages ? false : true;
    }
  };
  public searchFormGroup = new FormGroup({
    query: new FormControl(),
    hightlightAll: new FormControl(false),
    caseSensitive: new FormControl(false)
  });

  public ngOnInit() {
    this.searchFormGroup.controls.query.valueChanges.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (o) => {
        this.searchDocument('');
      }
    });

    this.searchFormGroup.controls.hightlightAll.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.searchDocument('highlightallchange');
      }
    });

    this.searchFormGroup.controls.caseSensitive.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.searchDocument('casesensitivitychange');
      }
    });
  }

  public onLoadData() {
    this.pdfSrc = {
      data: atob(pdfString) // TODO display error to user
    };
  }

  public afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.pdfViewerComponent()?.eventBus.on(
      'updatefindmatchescount',
      debounce((event: { matchesCount: { current: number; total: number }; source: any }) => {
        this.searchMatches = event.matchesCount.total;
      }, 100)
    );
    requestAnimationFrame(() => {
      this.createThumbnails();
    });
  }

  public onError(error: { message: string; name?: string }) {
    this.error = error;
  }

  public onProgress(progressData: PDFProgressData) {
    this.isLoaded = progressData.loaded >= progressData.total;
    this.error = undefined;
  }

  public onPageChange(value: number | 'prev' | 'next') {
    switch (value) {
      case 'prev':
        if (this.page > 1) {
          this.page--;
        }
        break;
      case 'next':
        if (this.page < (this.pdf?.numPages || 0)) {
          this.page++;
        }
        break;
      default:
        this.page = value;
        break;
    }
  }

  public onZoom(value: 'in' | 'out' | 'fit') {
    switch (value) {
      case 'in':
        this.zoom += 0.25;
        break;
      case 'out':
        if (parseFloat(this.zoom.toFixed(1)) > 0.25) {
          this.zoom += -0.25;
        }
        break;
      case 'fit':
        this.zoomScale = this.zoomScale === 'page-fit' ? 'page-width' : 'page-fit';
        if (this.zoomScale === 'page-fit') {
          this.pdfViewerComponent()!.pdfViewer.currentScaleValue = 'page-fit';
        } else {
          this.pdfViewerComponent()!.pdfViewer.currentScaleValue = this.zoom.toString();
        }
        break;
    }
  }

  public onShowSearchPopover() {
    this.searchPopoverDirective()?.open();
    requestAnimationFrame(() => {
      const searchInputElementRef = this.searchInputElementRef();
      searchInputElementRef?.nativeElement.focus();
      searchInputElementRef?.nativeElement.select();
    });
  }

  public onSearchNav(direction: 'prev' | 'next') {
    this.searchDocument('again', direction === 'prev');
  }

  private createThumbnails() {
    const pdfViewerLeftToolbarRef = this.pdfViewerLeftToolbarRef();
    if (pdfViewerLeftToolbarRef?.nativeElement?.childElementCount) {
      removeAllChildren(pdfViewerLeftToolbarRef.nativeElement);
    }

    if (this.pdf?.numPages) {
      for (let index = 1; index < this.pdf?.numPages + 1; index++) {
        this.pdf.getPage(index).then((page) => {
          const canvasElement = document.createElement('canvas') as HTMLCanvasElement;
          const pageViewport = page.getViewport({ scale: 0.25 });
          canvasElement.width = pageViewport.width;
          canvasElement.height = pageViewport.height;
          page.render({
            canvasContext: canvasElement.getContext('2d') as any,
            viewport: pageViewport
          });

          const buttonElement = document.createElement('button') as HTMLButtonElement;
          buttonElement.classList.add('pdf-viewer__thumbnail');
          buttonElement.addEventListener('click', () => this.onPageChange(index));
          buttonElement.appendChild(canvasElement);

          this.pdfViewerLeftToolbarRef()?.nativeElement.appendChild(buttonElement);
        });
      }
    }
  }

  private searchDocument(type: string, findPrevious = false) {
    const query = this.searchFormGroup.controls.query.value || '';
    this.pdfViewerComponent()!.eventBus.dispatch('find', {
      source: this.pdfViewerComponent()?.pdfViewer,
      type,
      query,
      highlightAll: this.searchFormGroup.controls.hightlightAll.value ? true : false,
      caseSensitive: this.searchFormGroup.controls.caseSensitive.value ? true : false,
      findPrevious
    });

    if (!query.length) {
      this.searchMatches = -1;
    }
  }
}

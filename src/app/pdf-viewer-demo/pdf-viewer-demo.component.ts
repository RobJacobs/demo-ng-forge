import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { PDFDocumentProxy, PDFProgressData, PDFSource, ZoomScale, PdfViewerComponent } from 'ng2-pdf-viewer';
import { removeAllChildren, debounce } from '@tylertech/forge-core';
import { PopupDirective } from '@tylertech/forge-angular';
import { pdfString } from './pdf-string';

// https://github.com/VadimDez/ng2-pdf-viewer
// https://github.com/mozilla/pdf.js/tree/master/web
// https://mozilla.github.io/pdf.js/web/viewer.html
// https://github.com/alekswebnet/pdfjs-viewer-element web component implementation of mozilla example

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer-demo.component.html',
  styleUrls: ['./pdf-viewer-demo.component.scss']
})
export class PdfViewerDemoComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  @ViewChild('pdfViewer')
  private pdfViewerComponent: PdfViewerComponent;
  @ViewChild('pdfViewerLeftToolbar')
  private pdfViewerLeftToolbarRef: ElementRef<HTMLElement>;
  @ViewChild('searchPopup')
  private searchPopupDirective: PopupDirective;
  @ViewChild('searchInput')
  private searchInputElementRef: ElementRef<HTMLInputElement>;

  public pdfSrc: string | Uint8Array | PDFSource = './assets/pdf-test.pdf';
  public error?: { message: string; name?: string; };
  public page = 1;
  public zoom = 1;
  private zoomScale: ZoomScale = 'page-width';
  public pdf?: PDFDocumentProxy;
  public isLoaded = false;
  public searchMatches = -1;

  public showLeftToolbar = false;
  public navButtonDisabled = (page: number, navButton: 'prev' | 'next') => {
    switch (navButton) {
      case 'prev':
        return this.pdf?.numPages > 1 && page > 1 ? false : true;
      case 'next':
        return this.pdf?.numPages > 1 && page < this.pdf?.numPages ? false : true;
    }
  }
  public searchFormGroup = new FormGroup({
    query: new FormControl(),
    hightlightAll: new FormControl(false),
    caseSensitive: new FormControl(false)
  });

  public constructor() {
    this.searchFormGroup.get('query').valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.unsubscribe$)
    ).subscribe(o => {
      this.searchDocument('');
    });

    this.searchFormGroup.get('hightlightAll').valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.searchDocument('highlightallchange');
    });

    this.searchFormGroup.get('caseSensitive').valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.searchDocument('casesensitivitychange');
    });
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onLoadData() {
    this.pdfSrc = {
      data: atob(pdfString) // TODO display error to user
    };
  }

  public afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.pdfViewerComponent.eventBus.on('updatefindmatchescount', debounce((event: { matchesCount: { current: number, total: number }, source: any }) => {
      this.searchMatches = event.matchesCount.total;
    }, 100));
    requestAnimationFrame(() => {
      this.createThumbnails();
    });
  }

  public onError(error: { message: string; name?: string; }) {
    this.error = error;
  }

  public onProgress(progressData: PDFProgressData) {
    this.isLoaded = progressData.loaded >= progressData.total;
    this.error = null;
  }

  public onPageChange(value: number | 'prev' | 'next') {
    switch (value) {
      case 'prev':
        if (this.page > 1) {
          this.page--;
        }
        break;
      case 'next':
        if (this.page < this.pdf?.numPages) {
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
        this.zoom += .25;
        break;
      case 'out':
        if (parseFloat(this.zoom.toFixed(1)) > .25) {
          this.zoom += -.25;
        }
        break;
      case 'fit':
        this.zoomScale = this.zoomScale === 'page-fit' ? 'page-width' : 'page-fit';
        if (this.zoomScale === 'page-fit') {
          this.pdfViewerComponent.pdfViewer.currentScaleValue = 'page-fit';
        } else {
          this.pdfViewerComponent.pdfViewer.currentScaleValue = this.zoom.toString();
        }
        break;
    }
  }

  public onShowSearchPopup() {
    this.searchPopupDirective.open();
    requestAnimationFrame(() => {
      this.searchInputElementRef.nativeElement.focus();
      this.searchInputElementRef.nativeElement.select();
    });
  }

  public onSearchNav(direction: 'prev' | 'next') {
    this.searchDocument('again', direction === 'prev');
  }

  private createThumbnails() {
    if (this.pdfViewerLeftToolbarRef?.nativeElement?.childElementCount) {
      removeAllChildren(this.pdfViewerLeftToolbarRef.nativeElement);
    }

    if (this.pdf?.numPages) {
      for (let index = 1; index < this.pdf?.numPages + 1; index++) {
        this.pdf.getPage(index).then(page => {
          const canvasElement = document.createElement('canvas') as HTMLCanvasElement;
          const pageViewport = page.getViewport({ scale: .25 });
          canvasElement.width = pageViewport.width;
          canvasElement.height = pageViewport.height;
          page.render({
            canvasContext: canvasElement.getContext('2d'),
            viewport: pageViewport
          });

          const buttonElement = document.createElement('button') as HTMLButtonElement;
          buttonElement.classList.add('pdf-viewer__thumbnail');
          buttonElement.addEventListener('click', () => this.onPageChange(index));
          buttonElement.appendChild(canvasElement);

          this.pdfViewerLeftToolbarRef.nativeElement.appendChild(buttonElement);
        });
      }
    }
  }

  private searchDocument(type: string, findPrevious = false) {
    const query = this.searchFormGroup.get('query').value || '';
    this.pdfViewerComponent.eventBus.dispatch('find', {
      source: this.pdfViewerComponent.pdfViewer,
      type,
      query,
      highlightAll: this.searchFormGroup.get('hightlightAll').value ? true : false,
      caseSensitive: this.searchFormGroup.get('caseSensitive').value ? true : false,
      findPrevious
    });

    if (!query.length) {
      this.searchMatches = -1;
    }
  }
}
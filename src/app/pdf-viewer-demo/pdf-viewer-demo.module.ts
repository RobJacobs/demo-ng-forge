import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerModule as NgPdfViewerModule } from 'ng2-pdf-viewer';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { CallbackPipe } from 'src/app/shared/pipes/callback.pipe';
import { PdfViewerDemoComponent } from './pdf-viewer-demo.component';

const routes: Routes = [
  { path: '**', component: PdfViewerDemoComponent }
];

@NgModule({
  declarations: [
    PdfViewerDemoComponent
  ],
  imports: [
    CommonModule,
    NgPdfViewerModule,
    RouterModule.forChild(routes),
    AppFormsModule,
    CallbackPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PdfViewerDemoModule { }
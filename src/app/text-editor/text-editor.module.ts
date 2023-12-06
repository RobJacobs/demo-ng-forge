import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { TextEditorComponent } from './text-editor.component';
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
  { path: '**', component: TextEditorComponent }
];

@NgModule({
  declarations: [
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppFormsModule,
    QuillModule.forRoot()
  ]
})
export class TextEditorModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IMaskDirective } from 'angular-imask';

import { AppFormsModule } from 'src/app/shared/app-forms.module';
import { ImaskComponent } from './imask.component';

const routes: Routes = [
  { path: '**', component: ImaskComponent }
];

@NgModule({
  declarations: [
    ImaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IMaskDirective,
    AppFormsModule
  ]
})
export class ImaskModule { }

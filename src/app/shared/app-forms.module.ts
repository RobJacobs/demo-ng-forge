import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ForgeModule } from '@tylertech/forge-angular';

@NgModule({
  imports: [CommonModule],
  exports: [FormsModule, ReactiveFormsModule, ForgeModule],
  providers: []
})
export class AppFormsModule { }
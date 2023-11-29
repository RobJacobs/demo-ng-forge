import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgeModule } from '@tylertech/forge-angular';

import { ChartsComponent } from './charts.component';
import { FormsModule } from '@angular/forms';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GoogleChartService } from './google-chart/google-chart.service';

const routes: Routes = [
  { path: '**', component: ChartsComponent }
];

@NgModule({
  declarations: [
    ChartsComponent,
    D3ChartComponent,
    GoogleChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ForgeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GoogleChartService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartsModule {
}
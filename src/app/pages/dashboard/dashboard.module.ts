import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CountriesComponent } from './countries/countries.component';
import { HighchartsChartModule } from 'highcharts-angular'; // Bileşenin doğru şekilde içe aktarıldığından emin olun


@NgModule({
  declarations: [DashboardComponent,CountriesComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    HighchartsChartModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
  ],
})
export class DashboardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KobiProfileComponent } from './kobi-profile.component';
import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { CountriesComponent } from './countries/countries.component';



@NgModule({
  declarations: [
    KobiProfileComponent,CountriesComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    HighchartsChartModule,
    RouterModule.forChild([
      {
          path: '',
          component: KobiProfileComponent,
      },
      { path: ':itemId', component: KobiProfileComponent }
  ]),
    WidgetsModule,
    ModalsModule,
  ]
})
export class KobiProfileModule { }

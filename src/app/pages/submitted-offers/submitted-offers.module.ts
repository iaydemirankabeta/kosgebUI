import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedOffersComponent } from './submitted-offers.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { ModalsModule } from 'src/app/_metronic/partials';



@NgModule({
  declarations: [
    SubmittedOffersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: SubmittedOffersComponent,
      },
  ]),
    MatTabsModule,
    MatTableModule,
    ModalsModule
  ]
})
export class SubmittedOffersModule { }

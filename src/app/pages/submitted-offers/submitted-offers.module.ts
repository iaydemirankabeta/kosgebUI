import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedOffersComponent } from './submitted-offers.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { ModalsModule } from 'src/app/_metronic/partials';
import { CallsComponent } from '../calls/calls.component';



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
      { path: ':callId', component: SubmittedOffersComponent }

  ]),
    MatTabsModule,
    MatTableModule,
    ModalsModule
  ],
  providers: [CallsComponent], // Bağımlılıklar burada eklenir

})
export class SubmittedOffersModule { }

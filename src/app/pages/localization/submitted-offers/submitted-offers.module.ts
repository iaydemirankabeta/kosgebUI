import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SubmittedOffersComponent } from './submitted-offers.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { ModalsModule } from 'src/app/_metronic/partials';
import { CallsComponent } from '../calls/calls.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import localeTr from '@angular/common/locales/tr';
import { AppModalComponent } from './meet-modal.component';


registerLocaleData(localeTr);


@NgModule({
  declarations: [
    SubmittedOffersComponent,AppModalComponent
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
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    ModalsModule,
    FlatpickrModule.forRoot(),

  ],
  providers: [CallsComponent], // Bağımlılıklar burada eklenir

})
export class SubmittedOffersModule { }

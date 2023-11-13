import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { KobilerdenGeleneGorusmelerComponent } from './kobilerden-gelen-gorusmeler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WidgetsModule, ModalsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { AppModalComponent } from './kobi-meet-modal.component';
import localeTr from '@angular/common/locales/tr';

import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatTabsModule } from '@angular/material/tabs';
import { CallsComponent } from '../localization/calls/calls.component';
import { FlatpickrModule } from 'angularx-flatpickr';
registerLocaleData(localeTr);



@NgModule({
  declarations: [
    KobilerdenGeleneGorusmelerComponent,AppModalComponent
  ],
  imports: [
    ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: KobilerdenGeleneGorusmelerComponent,
            },
        ]),
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory,
        }),
        WidgetsModule,
        ModalsModule,
        SharedModule,
        MatTableModule,
         FormsModule,
        MatTabsModule,
        MatSelectModule,
        FlatpickrModule.forRoot(),
    
        
  ]

})
export class KobilerdenGeleneGorusmelerModule { }

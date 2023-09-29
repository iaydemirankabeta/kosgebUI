import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'; // Gerekirse ekleyin

import { LOCALE_ID } from '@angular/core';
import localeTr from '@angular/common/locales/tr'; // Türkçe yerelleştirme
import { registerLocaleData } from '@angular/common';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MeetPlanComponent } from './meet-plan/meet-plan.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingNotesComponent } from './meetings/meeting-notes/meeting-notes.component';
import { ModalsModule } from "../../_metronic/partials/layout/modals/modals.module"; // FormsModule'ı içeri alın




registerLocaleData(localeTr, 'tr');


@NgModule({
    declarations: [MeetPlanComponent, MeetingsComponent, MeetingNotesComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatTabsModule,
        RouterModule.forChild([
            {
                path: 'toplanti-planla',
                component: MeetPlanComponent,
            },
            {
                path: 'toplantilarim',
                component: MeetingsComponent,
            },
        ]),
        ModalsModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'tr' },
        { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
        // Diğer sağlayıcılarınız
      ]
})
export class MeetModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetPlanComponent } from './meet-plan/meet-plan.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingNotesComponent } from './meetings/meeting-notes/meeting-notes.component';
import { ModalsModule } from "../../_metronic/partials/layout/modals/modals.module"; // FormsModule'ı içeri alın
import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
    declarations: [MeetPlanComponent, MeetingsComponent, MeetingNotesComponent],
    imports: [
        CommonModule,
        FormsModule,
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
    ]
})
export class MeetModuleModule { }

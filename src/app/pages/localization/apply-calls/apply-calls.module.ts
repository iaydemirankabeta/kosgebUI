import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplyCallsComponent } from './apply-calls.component';
import { ModalsModule, WidgetsModule } from '../../../_metronic/partials';
import { SharedModule } from "../../../_metronic/shared/shared.module";
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: ApplyCallsComponent,
            },
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule,
    ]
})
export class ApplyCallsModule {}
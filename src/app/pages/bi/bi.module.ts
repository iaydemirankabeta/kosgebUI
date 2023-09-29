import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BiComponent } from './bi.component';
import { FilterComponent } from './filter/filter.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
    declarations: [FilterComponent,BiComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: BiComponent,
            }
        ]),
        WidgetsModule,
        NgApexchartsModule,
        ModalsModule,
        SharedModule
    ]
})
export class biModule {}

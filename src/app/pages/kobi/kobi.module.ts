import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KobiComponent } from './kobi.component';
import { FilterComponent } from './filter/filter.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { CompareComponent } from './compare/compare.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
    declarations: [KobiComponent,FilterComponent, CompareComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: KobiComponent,
            },
            {
                path: 'karsilastirma',
                component: CompareComponent
            }
        ]),
        WidgetsModule,
        NgApexchartsModule,
        ModalsModule,
        SharedModule
    ]
})
export class kobiModule {}

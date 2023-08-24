import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KobiComponent } from './kobi.component';
import { FilterComponent } from '../components/filter/filter.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";

@NgModule({
    declarations: [KobiComponent, FilterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: KobiComponent,
            },
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule
    ]
})
export class kobiModule {}

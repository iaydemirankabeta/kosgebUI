import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { KobiComponent } from './kobi.component';
import { FilterComponent } from './filter/filter.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";

@NgModule({
    declarations: [KobiComponent,FilterComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCallComponent } from './create-call.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";


@NgModule({
    declarations: [CreateCallComponent ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CreateCallComponent,
            },
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule
    ]
})
export class createcallmodule{}
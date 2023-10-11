import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCallComponent } from './create-call.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { CallsComponent } from '../calls/calls.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [CreateCallComponent ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CreateCallComponent,
            },
            { path: ':itemId', component: CreateCallComponent }

        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule
    ],
    providers: [CallsComponent], // Bağımlılıklar burada eklenir

})
export class createcallmodule{}
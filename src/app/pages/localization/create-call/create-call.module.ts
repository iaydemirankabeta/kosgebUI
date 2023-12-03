import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCallComponent } from './create-call.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../../../_metronic/partials';
import { SharedModule } from "../../../_metronic/shared/shared.module";
import { CallsComponent } from '../calls/calls.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
    declarations: [CreateCallComponent],
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
        SharedModule,
        MatSelectModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        FlatpickrModule.forRoot(),

    ],
    providers: [CallsComponent], // Bağımlılıklar burada eklenir

})
export class createcallmodule { }
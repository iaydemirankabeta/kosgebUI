import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CallsComponent } from './calls.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { DropdownMenusModule } from "../../_metronic/partials/content/dropdown-menus/dropdown-menus.module";

@NgModule({
    declarations: [CallsComponent,],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CallsComponent,
            },
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule,
        DropdownMenusModule
    ]
})
export class callsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KosgebDestekComponent } from './kosgeb-destek.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WidgetsModule, ModalsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    KosgebDestekComponent
  ],
  imports: [
    ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: KosgebDestekComponent,
            },
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule,
        MatTableModule
  ]
})
export class KosgebDestekModule { }

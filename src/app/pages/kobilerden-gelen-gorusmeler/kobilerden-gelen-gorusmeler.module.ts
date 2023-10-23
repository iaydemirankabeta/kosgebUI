import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KobilerdenGeleneGorusmelerComponent } from './kobilerden-gelen-gorusmeler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WidgetsModule, ModalsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    KobilerdenGeleneGorusmelerComponent
  ],
  imports: [
    ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: KobilerdenGeleneGorusmelerComponent,
            },
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule,
        MatTableModule
  ]
})
export class KobilerdenGeleneGorusmelerModule { }

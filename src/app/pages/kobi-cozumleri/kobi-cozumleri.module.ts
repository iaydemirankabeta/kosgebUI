import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KobiCozumleriComponent } from './kobi-cozumleri.component';
import { RouterModule } from '@angular/router';
import { ModalsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KobiCozumleriComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
          path: '',
          component: KobiCozumleriComponent,
      },
  ]),
  FormsModule,
    ModalsModule,
    SharedModule
  ]
})
export class KobiCozumleriModule { }

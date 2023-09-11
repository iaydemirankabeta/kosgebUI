import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KobiCozumleriComponent } from './kobi-cozumleri.component';
import { RouterModule } from '@angular/router';
import { ModalsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';



@NgModule({
  declarations: [
    KobiCozumleriComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: KobiCozumleriComponent,
      },
  ]),
    ModalsModule,
    SharedModule
  ]
})
export class KobiCozumleriModule { }

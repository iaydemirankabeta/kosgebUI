import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GorusmeTalepleriComponent } from './gorusme-talepleri.component';
import { ModalsModule } from 'src/app/_metronic/partials';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GorusmeTalepleriComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
          path: '',
          component: GorusmeTalepleriComponent,
      },

  ]),
    ModalsModule,
    MatTabsModule,
    MatTableModule,
  ]
})
export class GorusmeTalepleriModule { }

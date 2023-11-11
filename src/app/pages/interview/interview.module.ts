import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './interview.component';
import { ModalsModule } from 'src/app/_metronic/partials';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InterviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
          path: '',
          component: InterviewComponent,
      },

  ]),
    ModalsModule,
    MatTabsModule,
    MatTableModule,
  ]
})
export class InterviewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll.component';
import { RouterModule } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DropdownMenusModule, ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PollComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: PollComponent,
      },
  ]),
    WidgetsModule,
    ModalsModule,
    MatTableModule,
    MatSortModule,
    SharedModule,
    DropdownMenusModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class PollModule { }

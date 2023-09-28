import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingCallsComponent } from './pending-calls.component';
import { RouterModule } from '@angular/router';
import { DropdownMenusModule, ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    PendingCallsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: PendingCallsComponent,
      },
  ]),
    WidgetsModule,
    ModalsModule,
    MatSortModule,
    SharedModule,
    DropdownMenusModule,
    MatTableModule,
  ]
})
export class PendingCallsModule { }

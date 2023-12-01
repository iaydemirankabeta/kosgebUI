import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRequestComponent } from './apply-request.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { WidgetsModule, ModalsModule, DropdownMenusModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ApplyRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: ApplyRequestComponent,
      },
  ]),
    WidgetsModule,
    ModalsModule,
    MatTableModule,
    MatSortModule,
    SharedModule,
    DropdownMenusModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
})
export class ApplyRequestModule { }

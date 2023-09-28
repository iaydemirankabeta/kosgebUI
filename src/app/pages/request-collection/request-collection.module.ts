import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCollectionComponent } from './request-collection.component';
import { RouterModule } from '@angular/router';
import { DropdownMenusModule, ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RequestCollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: RequestCollectionComponent,
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
  ]
})
export class RequestCollectionModule { }

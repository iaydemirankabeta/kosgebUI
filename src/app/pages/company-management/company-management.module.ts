import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyManagementComponent } from './company-management.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ModalsModule } from 'src/app/_metronic/partials';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    CompanyManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
          path: '',
          component: CompanyManagementComponent,
      },

  ]),
    MatTabsModule,
    MatTableModule,
    ModalsModule
  ]
})
export class CompanyManagementModule { }

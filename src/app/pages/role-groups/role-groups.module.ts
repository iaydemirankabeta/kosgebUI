import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleGroupsComponent } from './role-groups.component';
import { ModalsModule } from 'src/app/_metronic/partials';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RoleGroupsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: RoleGroupsComponent,
      },
  ]),
    ModalsModule,
  ]
})
export class RoleGroupsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
          path: 'bildirimler',
          component: NotificationComponent,
      },
  ]),
  ]
})
export class ProjectModule { }

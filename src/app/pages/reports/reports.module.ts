import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // FormsModule ekleyin
import { ProfileViewsComponent } from './profile-views/profile-views.component';
import { ViewsKOSGEBComponent } from './views-kosgeb/views-kosgeb.component';


@NgModule({
  declarations: [ProfileViewsComponent, ViewsKOSGEBComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
          path: 'profil-goruntuleme',
          component: ProfileViewsComponent,
      },
      {
        path: 'kosgeb-goruntuleme',
        component: ViewsKOSGEBComponent,
    },
  ]),
  ]
})
export class ReportsModule { }

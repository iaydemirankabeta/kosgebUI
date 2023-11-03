import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplyCallsComponent } from './apply-calls/apply-calls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { WidgetsModule, ModalsModule, DropdownMenusModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { CallsComponent } from './calls/calls.component';
import { CreateCallComponent } from './create-call/create-call.component';
import { RequestCollectionComponent } from './request-collection/request-collection.component';
import { SubmittedOffersComponent } from './submitted-offers/submitted-offers.component';
import { AppModalComponent } from './submitted-offers/meet-modal.component';
import { FilterComponent } from './apply-calls/filter/filter.component';



@NgModule({
  declarations: [ApplyCallsComponent,CallsComponent,CreateCallComponent,RequestCollectionComponent,FilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'basvuruya-acik-cagrilar',
        component: ApplyCallsComponent,
      },
      {
        path: 'kosgeb-talep-toplama',
        loadChildren: () =>
          import('./apply-request/apply-request.module').then((m) => m.ApplyRequestModule),
        data: { layout: 'dark-sidebar' }
      },
      {
        path: 'cagrilar',
        loadChildren: () =>
          import('./calls/calls.module').then((m) => m.callsModule),
        data: { layout: 'dark-sidebar' }
      },
      {
        path: 'cagri-olustur',
        loadChildren: () =>
          import('./create-call/create-call.module').then((m) => m.createcallmodule),
        data: { layout: 'dark-sidebar' }
      },
      {
        path: 'talep-olustur',
        loadChildren: () =>
          import('./request-collection/request-collection.module').then((m) => m.RequestCollectionModule),
        data: { layout: 'dark-sidebar' }
      },
      {
        path: 'cagrima-gelen-basvurular',
        loadChildren: () =>
          import('./submitted-offers/submitted-offers.module').then((m) => m.SubmittedOffersModule),
        data: { layout: 'dark-sidebar' }
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
export class LocalizationModule { }

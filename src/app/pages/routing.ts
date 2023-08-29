import { Routes } from '@angular/router';

import { CompanyChoiceComponent } from './company-choice/company-choice.component';
import { ReportsComponent } from './reports/reports.component';
import { KobiComponent } from './kobi/kobi.component';
import { CreateCallComponent } from './create-call/create-call.component';
import { CallsComponent } from './calls/calls.component';


const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then((m) => m.catalogModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'kobi',
    loadChildren: () =>
      import('./kobi/kobi.module').then((m) => m.kobiModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'calls',
    loadChildren: () =>
      import('./calls/calls.module').then((m) => m.callsModule),
      data:{layout:'dark-sidebar'}
  },
  /*{
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },*/
  
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: 'dark-sidebar' },
  },


  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
    data: { layout: 'dark-sidebar' },
  },
  /*{
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    data: { layout: 'light-header' },
  },
  
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    data: { layout: 'light-sidebar' },
  },*/
  {
    path: '',
    redirectTo: '/sirketler',
    pathMatch: 'full',
  },
  {
    path: 'sirketler',
    component: CompanyChoiceComponent,
    pathMatch:'full',
    data:{layout:'empty'}
  },
 
  { path: 'raporlar', component: ReportsComponent },
  { path: 'create-call', component: CreateCallComponent,data:{layout:'dark-sidebar'} },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };

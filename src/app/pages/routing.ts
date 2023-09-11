import { Routes } from '@angular/router';
import { ListsComponent } from '../modules/widgets-examples/lists/lists.component';
import { CompanyChoiceComponent } from './company-choice/company-choice.component';


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
    path: 'buyukIsletmeler',
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
  {
    path: 'apply-calls',
    loadChildren: () =>
      import('./apply-calls/apply-calls.module').then((m) => m.ApplyCallsModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'create-call',
    loadChildren: () =>
      import('./create-call/create-call.module').then((m) => m.createcallmodule),
      data:{layout:'dark-sidebar'}
  },  
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: 'dark-sidebar' },
  },
  {
    path: 'arama',
    component: ListsComponent,
    data: {layout:'dark-sidebar'}
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
  },*/
  
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    data: { layout: 'dark-sidebar' },
  },
  {
    path: '',
    redirectTo: '/sirketler',
    pathMatch: 'full',
    data:{layout:'empty'}
  },
  {
    path: 'sirketler',
    component: CompanyChoiceComponent,
    pathMatch:'full',
    data:{layout:'empty'}
  },
 
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };

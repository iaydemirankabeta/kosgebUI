import { Routes } from '@angular/router';
import { ListsComponent } from '../modules/widgets-examples/lists/lists.component';
import { CompanyChoiceComponent } from './company-choice/company-choice.component';
import { KeeniconComponent } from '../_metronic/shared/keenicon/keenicon.component';
import { ReportsComponent } from '../_metronic/layout/components/toolbar/reports/reports.component';
import { FinansComponent } from './finans/finans.component';


const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'toplanti',
    loadChildren: () =>
      import('./meet-module/meet-module.module').then((m) => m.MeetModuleModule),
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
    path: 'buyuk-isletmeler',
    loadChildren: () =>
      import('./bi/bi.module').then((m) => m.biModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'calls',
    loadChildren: () =>
      import('./calls/calls.module').then((m) => m.callsModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'kobi-cozumleri',
    loadChildren: () =>
      import('./kobi-cozumleri/kobi-cozumleri.module').then((m) => m.KobiCozumleriModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'kosgeb-destek',
    loadChildren: () =>
      import('./kosgeb-destek/kosgeb-destek.module').then((m) => m.KosgebDestekModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'conversations',
    loadChildren: () =>
      import('./conversations/conversations.module').then((m) => m.ConversationsModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'gorusme-talepleri',
    loadChildren: () =>
      import('./gorusme-talepleri/gorusme-talepleri.module').then((m) => m.GorusmeTalepleriModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'kobi-profile',
    loadChildren: () =>
      import('./kobi-profile/kobi-profile.module').then((m) => m.KobiProfileModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'poll',
    loadChildren: () =>
      import('./poll/poll.module').then((m) => m.PollModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'user-management',
    loadChildren: () =>
      import('./user-management/user-management.module').then((m) => m.UserManagementModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'company-management',
    loadChildren: () =>
      import('./company-management/company-management.module').then((m) => m.CompanyManagementModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./submitted-offers/submitted-offers.module').then((m) => m.SubmittedOffersModule),
      data:{layout:'dark-sidebar'}
  },
  {
    path: 'apply-request',
    loadChildren: () =>
      import('./apply-request/apply-request.module').then((m) => m.ApplyRequestModule),
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
    path: 'pending-calls',
    loadChildren: () =>
      import('./pending-calls/pending-calls.module').then((m) => m.PendingCallsModule),
      data:{layout:'dark-sidebar'}
  },   
  {
    path: 'request-collection',
    loadChildren: () =>
      import('./request-collection/request-collection.module').then((m) => m.RequestCollectionModule),
      data:{layout:'dark-sidebar'}
  },  
  {
    path: 'create-solution',
    loadChildren: () =>
      import('./create-solution/create-solution.module').then((m) => m.CreateSolutionModule),
      data:{layout:'dark-sidebar'}
  }, 
  {
    path: 'my-solutions',
    loadChildren: () =>
      import('./my-solutions/my-solutions.module').then((m) => m.MySolutionsModule),
      data:{layout:'dark-sidebar'}
  },   
  {
    path: 'solutions',
    loadChildren: () =>
      import('./my-solutions/my-solutions.module').then((m) => m.MySolutionsModule),
      data:{layout:'dark-sidebar'}
  },   
  {
    path: 'application-examples',
    loadChildren: () =>
      import('./application-examples/application-examples.module').then((m) => m.ApplicationExamplesModule),
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
    path:'rol-gruplari',
    loadChildren: () =>
    import('../pages/role-groups/role-groups.module').then(
      (m) => m.RoleGroupsModule
    ),
  data: { layout: 'dark-sidebar' }},

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
    path: 'raporlar',
    component: ReportsComponent,
    data:{layout:'dark-sidebar'}
  },
  {
    path: 'finans-modulu',
    component: FinansComponent,
    data:{layout:'dark-sidebar'}
  },
  {
    path: 'keen',
    component: KeeniconComponent,
    pathMatch:'full',
    data:{layout:'dark-sidebar'}
  },
 
  {
    path: '**',
    redirectTo: 'error/404',
  },

];

export { Routing };

import { Routes } from '@angular/router';
import { ListsComponent } from '../modules/widgets-examples/lists/lists.component';
import { CompanyChoiceComponent } from './company-choice/company-choice.component';
import { ReportsComponent } from '../_metronic/layout/components/toolbar/reports/reports.component';
import { FinansComponent } from './finans/finans.component';


const Routing: Routes = [
  {
    path: 'anasayfa',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'toplanti',
    loadChildren: () =>
      import('./meet-module/meet-module.module').then((m) => m.MeetModuleModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'katalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then((m) => m.catalogModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'proje-zekasi',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'yerellestirme',
    loadChildren: () =>
      import('./localization/localization.module').then((m) => m.LocalizationModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'raporlar',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'kobi',
    loadChildren: () =>
      import('./kobi/kobi.module').then((m) => m.kobiModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'buyuk-isletmeler',
    loadChildren: () =>
      import('./bi/bi.module').then((m) => m.biModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'kobi-cozumleri',
    loadChildren: () =>
      import('./kobi-cozumleri/kobi-cozumleri.module').then((m) => m.KobiCozumleriModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'kosgeb-destek',
    loadChildren: () =>
      import('./kosgeb-destek/kosgeb-destek.module').then((m) => m.KosgebDestekModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'takvimim',
    loadChildren: () =>
      import('./meet-module/conversations/conversations.module').then((m) => m.ConversationsModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'gorusme-talepleri',
    loadChildren: () =>
      import('./gorusme-talepleri/gorusme-talepleri.module').then((m) => m.GorusmeTalepleriModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'kobi-profili',
    loadChildren: () =>
      import('./kobi-profile/kobi-profile.module').then((m) => m.KobiProfileModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'global-zeka/anketler',
    loadChildren: () =>
      import('./poll/poll.module').then((m) => m.PollModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'kullanici-yonetimi',
    loadChildren: () =>
      import('./user-management/user-management.module').then((m) => m.UserManagementModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'sirket-yonetimi',
    loadChildren: () =>
      import('./company-management/company-management.module').then((m) => m.CompanyManagementModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'bekleyen-cagrilar',
    loadChildren: () =>
      import('./pending-calls/pending-calls.module').then((m) => m.PendingCallsModule),
    data: { layout: 'dark-sidebar' }
  },

  {
    path: 'cozum-olustur',
    loadChildren: () =>
      import('./my-solutions/create-solution/create-solution.module').then((m) => m.CreateSolutionModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'cozumlerim',
    loadChildren: () =>
      import('./my-solutions/my-solutions.module').then((m) => m.MySolutionsModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'cozumler',
    loadChildren: () =>
      import('./my-solutions/my-solutions.module').then((m) => m.MySolutionsModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'uygulama-ornekleri',
    loadChildren: () =>
      import('./application-examples/application-examples.module').then((m) => m.ApplicationExamplesModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'hesabim',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: 'dark-sidebar' },
  },
  {
    path: 'arama',
    component: ListsComponent,
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'rol-gruplari',
    loadChildren: () =>
      import('../pages/role-groups/role-groups.module').then(
        (m) => m.RoleGroupsModule
      ),
    data: { layout: 'dark-sidebar' }
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
    path: 'mesajlar',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    data: { layout: 'dark-sidebar' },
  },
   {//Kobi-B2b Görüşmeler-Büyük İşletmeye Gönderilen Görüşme Talepleri sayfası
    path: 'bi-gonderilen-gorusmeler',
    loadChildren: () =>
      import('./bi-gonderilen-gorusmeler/bi-gonderilen-gorusmeler.module').then((m) => m.BiGonderilenGorusmelerModule),
    data: { layout: 'dark-sidebar' }
  },
  {//TODO sol menüye eklenecek Büyük işletmeler kullanıcısı => B2B-modülü =>  Kobilerden Gelen Görüşme Talepleri Sayfası 
    path: 'kobilerden-gelen-gorusmeler',
    loadChildren: () =>
      import('./kobilerden-gelen-gorusmeler/kobilerden-gelen-gorusmeler.module').then((m) => m.KobilerdenGeleneGorusmelerModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'interview',
    loadChildren: () =>
      import('./interview/interview.module').then((m) => m.InterviewModule),
    data: { layout: 'dark-sidebar' }
  },
  {
    path: '',
    redirectTo: '/sirketler',
    pathMatch: 'full',
    data: { layout: 'empty' }
  },
  {
    path: 'sirketler',
    component: CompanyChoiceComponent,
    pathMatch: 'full',
    data: { layout: 'empty' }
  },
  {
    path: 'rapor',
    component: ReportsComponent,
    data: { layout: 'dark-sidebar' }
  },
  {
    path: 'finans-modulu',
    component: FinansComponent,
    data: { layout: 'dark-sidebar' }
  },

  {
    path: '**',
    redirectTo: 'error/404',
  },

];

export { Routing };

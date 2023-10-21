import { Component, HostBinding, OnDestroy, OnInit, Input, SimpleChanges } from '@angular/core';
import { MenuItem, subMenu } from './sidebar.interface';
import { Observable, Subscription } from 'rxjs';

import { AuthService, UserType } from 'src/app/modules/auth';
import { CompanyTypes, UserRoles } from 'src/app/modules/auth/models/user-company.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})


export class SidebarMenuComponent implements OnInit {


  menuItems: MenuItem[] = [
    { title: 'Anasayfa', icon: 'home', routerLink: '/dashboard', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.Muadil, CompanyTypes.ADMIN, CompanyTypes.KOSGEBUSER], shown: true },
    { title: 'Anasayfa', icon: 'home', routerLink: '/dashboard', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI, CompanyTypes.KOBI], shown: true },
    { title: 'Tedarik Zekası', icon: 'search-list', routerLink: '/arama', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI, CompanyTypes.KOBI], shown: true },
    {
      title: 'Yerlileştirme Modülü', icon: 'element-5', routerLink: '/calls', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI], shown: false,
      subMenu: [
        { title: 'Çağrı Oluştur', icon: 'element-3', routerLink: '/create-call' },
        { title: 'Çağrılarım', icon: 'call', routerLink: '/calls' },
        { title: 'Çağrılarıma Gelen Başvurular', icon: 'paper-clip', routerLink: '/offers' },
        { title: 'KOSGEB Talep Toplama', icon: '', routerLink: '/apply-request' },
      ],
    },
    // {
    //   title: 'B2B', icon: 'element-5', routerLink: '/offers', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: false,
    //   subMenu: [
    //     { title: 'Büyük İşletmeler', icon: '', routerLink: '/buyuk-isletmeler' },
    //     { title: 'Büyük İşletmeye Gönderilen Görüşme Talepleri', icon: '', routerLink: '/apply-calls' },
    //   ],
    // },
    {
      title: 'Yerlileştirme Modülü', icon: 'element-5', routerLink: '/offers', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Başvurduğum Çağrılar', icon: '', routerLink: '/offers' },
        { title: 'Başvuruya Açık Çağrılar', icon: '', routerLink: '/apply-calls' },
      ],
    },
    {
      title: 'Yerlileştirme Modülü', icon: 'element-5', routerLink: '/kosgeb-destek', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB,CompanyTypes.KOSGEBUSER], shown: false,
      subMenu: [
        { title: 'KOSGEB Destek Çağrıları', icon: '', routerLink: '/kosgeb-destek' },
        { title: 'Talep Toplama', icon: '', routerLink: '/request-collection' },
        { title: 'Tüm Çağrılar', icon: '', routerLink: '/calls' },

      ],
    },
    {
      title: 'I2 Modülü', icon: 'element-5', routerLink: '/gorusme-talepleri', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB], shown: false,
      subMenu: [
        { title: 'Görüşme Talepleri', icon: '', routerLink: '/gorusme-talepleri' },
        { title: 'Tüm Başvurular', icon: '', routerLink: '/offers' },

      ],
    },
    {
      title: 'Toplantı Modülü', icon: 'tablet-book', routerLink: '/company-management', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.Muadil, CompanyTypes.ADMIN], shown: false,
      subMenu: [
        { title: 'Toplantı Planla', icon: '', routerLink: '/toplanti/toplanti-planla' },
        { title: 'Toplantılarım', icon: '', routerLink: '/toplanti/toplantilarim' },
        { title: 'Takvimim', icon: 'calendar-add', routerLink: '/conversations' },
      ],
    },
    {
      title: 'B2B Görüşmeler', icon: 'element-5', routerLink: '/b2b', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Büyük İşletmeler', icon: '', routerLink: '/buyuk-isletmeler' },
        { title: 'Büyük İşletmeye Gönderilen Görüşme Talepleri', icon: '', routerLink: '/bi-gonderilen-gorusmeler' },
      ],
    },
    {
      title: 'Toplantı Modülü', icon: 'tablet-book', routerLink: '/company-management', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI, CompanyTypes.BI], shown: false,
      subMenu: [
        { title: 'Toplantılarım', icon: '', routerLink: '/toplanti/toplantilarim' },
        { title: 'Takvimim', icon: 'calendar-add', routerLink: '/conversations' },
      ],
    },
    {
      title: 'Global Zeka', icon: 'tablet-book', routerLink: '/company-management', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB], shown: false,
      subMenu: [
        { title: 'Anketler', icon: '', routerLink: '/poll' },
      ],
    },
    {
      title: 'Raporlama Modülü', icon: 'tablet-book', routerLink: '/raporlar', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB], shown: false,
      subMenu: [
        { title: 'Raporlar', icon: '', routerLink: '/raporlar' },
       
      ],
    },

    {
      title: 'E-Ticaret Modülü', icon: 'tablet-book', routerLink: '/', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI], shown: false,
      subMenu: [
        { title: 'Ürünler ve Hizmetler', icon: '', routerLink: 'catalog/vitrin' },
       
      ],
    },

    {
      title: 'E-Ticaret Modülü', icon: 'element-12', routerLink: '/catalog', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI],
      subMenu: [
        { title: 'Kategoriler', icon: '', routerLink: 'catalog/kategoriler' },
        { title: 'Ürünler ve Hizmetler', icon: '', routerLink: 'catalog/urunler' },
        { title: 'Ürün veya Hizmet Ekle', icon: '', routerLink: 'catalog/urun-ekle' },
        {title:'Pazar Yerleri', icon: '', routerLink: 'catalog/pazar-yerleri'}
      ],
      shown: true
    },

    { title: 'Rol Grupları', icon: 'element-4', routerLink: '/rol-gruplari', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.ADMIN], shown: true },
    { title: 'Kullanıcı Yönetimi', icon: 'user', routerLink: '/user-management', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.ADMIN], shown: false },
    { title: 'Şirket Yönetimi', icon: 'compass', routerLink: '/company-management', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.Muadil, CompanyTypes.ADMIN], shown: false },
    { title: 'Uygulama Örnekleri', icon: 'element-8', routerLink: '/application-examples', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: true },
    { title: 'Mesajlar', icon: 'message-notif', routerLink: '/apps/chat', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI, CompanyTypes.KOBI], shown: true },
    
    {
      title: 'Finans Modülü', icon: 'element-5', routerLink: '/finans-modulu', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Finans', icon: '', routerLink: '/finans-modulu' },
      ],
    },
    

    
    {
      title: 'Hesap Ayarları', icon: 'profile-circle', routerLink: '/crafted/account/overview', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI, CompanyTypes.KOSGEB], shown: true,
      subMenu: [
        { title: 'Profilim', icon: '', routerLink: '/crafted/account/profilim' },
        { title: 'Kullanıcı Yönetimi', icon: '', routerLink: '/crafted/account/kullanici-yonetimi' },
        { title: 'Hesap Ayarları', icon: '', routerLink: '/crafted/account/settings' },
      ],
    },
    {
      title: 'Hesap Ayarları', icon: 'profile-circle', routerLink: '/crafted/account/overview', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI], shown: true,
      subMenu: [
        { title: 'Profilim', icon: '', routerLink: '/crafted/account/profilim' },
        { title: 'Kullanıcı Yönetimi', icon: '', routerLink: '/crafted/account/kullanici-yonetimi' },
        { title: 'Hesap Ayarları', icon: '', routerLink: '/crafted/account/settings' },
        { title: 'Adresler', icon: '', routerLink: '/crafted/account/adreslerim'},

      ],
    },


    {
      title: 'Raporlar', icon: '', routerLink: 'crafted/widgets', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: true,
      subMenu: [
        { title: 'Horizontal', icon: '', routerLink: 'crafted/widgets' },
      ],
      shown: false
    },

  ];



  user$: Observable<UserType>;

  constructor(
    private auth: AuthService,
  ) {

  }


  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

  }


}

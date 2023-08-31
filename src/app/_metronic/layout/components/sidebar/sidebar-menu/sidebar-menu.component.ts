import { Component, HostBinding, OnDestroy, OnInit,Input, SimpleChanges } from '@angular/core';
import { MenuItem,subMenu } from './sidebar.interface';
import { Observable, Subscription } from 'rxjs';

import { AuthService,UserType } from 'src/app/modules/auth';
import { CompanyTypes, UserRoles } from 'src/app/modules/auth/models/user-company.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})


export class SidebarMenuComponent implements OnInit {


  menuItems: MenuItem[] = [
    { title: 'Gösterge Paneli', icon: 'element-11', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Rol Grupları', icon: 'element-4', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Kullanıcı Yönetimi', icon: 'element-6', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Şirket Yönetimi', icon: 'element-3', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Tüm Çağrılar', icon: 'element-7', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Tüm Çözümler', icon: 'element-3', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Tüm Teklifler', icon: 'element-1', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Tüm Başvurular', icon: 'element-5', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },
    { title: 'Duyurular', icon: 'element-9', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN] },



    { title: 'Gösterge Paneli', icon: 'element-11', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI] },
    { title: 'Başvuruya Açık Çözümler', icon: 'element-2', routerLink: '/kobi',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI] },
    { title: 'Çağrı Oluştur', icon: 'element-3', routerLink: '/create-call',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI]  },
    { title: 'Çağrılarım', icon: 'element-5', routerLink: '/calls',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI] },
    { title: 'Görüşmelerim', icon: 'element-7', routerLink: '/conversations',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:true,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI] },
    { title: 'Başvuruya Açık Çağrılar', icon: 'element-1', routerLink: '/buyukIsletmeler',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI] },
    {
      title: 'Fonksiyonlar ve Modüller', icon: 'element-12', routerLink: '/catalog',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:true,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI],
      subMenu: [
        { title: 'Toplantı Modülü', icon: '', routerLink: 'catalog/vitrin' },
        { title: 'B2B Zekası', icon: '', routerLink: 'catalog/kategoriler' },
        { title: 'Raporlama Modülü', icon: '', routerLink: 'catalog/kategori-ekle' },
        { title: 'Anlaşma Modülü', icon: '', routerLink: 'catalog/urunler' },
        { title: 'Global Zeka', icon: '', routerLink: 'catalog/urun-ekle' },
        { title: 'Çağrı Zekası', icon: '', routerLink: 'catalog/urun-ekle' },
        { title: 'E-Ticaret', icon: '', routerLink: 'catalog/urun-ekle' },
        { title: 'Tedarik Zekası', icon: '', routerLink: 'catalog/urun-ekle' },
        { title: 'Yerleştirme Zekası', icon: '', routerLink: 'catalog/urun-ekle' },
        { title: 'Finansman Modülü', icon: '', routerLink: 'catalog/urun-ekle' },
        { title: 'Proje Zekası', icon: '', routerLink: 'catalog/urun-ekle' },
      ]
    },
    { title: 'Hesap Ayarları', icon: 'profile-circle', routerLink: '/crafted/account/overview',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI,CompanyTypes.KOSGEB] },
  {
    title: 'Katalog', icon: '', routerLink: '/catalog',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI],
    subMenu: [
      { title: 'Vitrin', icon: '', routerLink: 'catalog/vitrin' },
      { title: 'Kategoriler', icon: '', routerLink: 'catalog/kategoriler' },
      { title: 'Kategori Ekle', icon: '', routerLink: 'catalog/kategori-ekle' },
      { title: 'Ürünler', icon: '', routerLink: 'catalog/urunler' },
      { title: 'Ürün Ekle', icon: '', routerLink: 'catalog/urun-ekle' },
    ]
  },
  {
    title: 'Raporlar', icon: '', routerLink: 'crafted/widgets',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:true,
    subMenu: [
      { title: 'Horizontal', icon: '', routerLink: 'crafted/widgets' },
    ]
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

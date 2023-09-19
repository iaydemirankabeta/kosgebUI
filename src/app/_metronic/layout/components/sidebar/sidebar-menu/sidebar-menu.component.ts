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
    { title: 'Anasayfa', icon: 'element-11', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN,CompanyTypes.KOSGEBUSER],shown:true },
    { title: 'Rol Grupları', icon: 'element-4', routerLink: '/rol-gruplari',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.ADMIN],shown:true },
    { title: 'Kullanıcı Yönetimi', icon: 'element-6', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.ADMIN],shown:false },
    { title: 'Şirket Yönetimi', icon: 'element-3', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN],shown:false },
    { title: 'Tüm Çağrılar', icon: 'element-7', routerLink: '/calls',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN,CompanyTypes.KOSGEBUSER],shown:false },
    { title: 'Tüm Çözümler', icon: 'element-3', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN,CompanyTypes.KOSGEBUSER],shown:false },
    { title: 'Tüm Teklifler', icon: 'element-1', routerLink: '/offers',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN,CompanyTypes.KOSGEBUSER],shown:false },
    { title: 'Tüm Başvurular', icon: 'element-5', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN,CompanyTypes.KOSGEBUSER],shown:false },
    { title: 'Duyurular', icon: 'element-9', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOSGEB,CompanyTypes.Muadil,CompanyTypes.ADMIN,CompanyTypes.KOSGEBUSER],shown:false },



    { title: 'Anasayfa', icon: 'element-11', routerLink: '/dashboard',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI],shown:true },
    { title: 'Kobiler', icon: 'element-2', routerLink: '/kobi',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI],shown:true },
    { title: 'Kobi Çözümleri', icon: 'element-6', routerLink: '/kobi-cozumleri',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI],shown:true },
    { title: 'Tekliflerim / Görüşme Taleplerim', icon: 'element-6', routerLink: '/offers',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI,CompanyTypes.BI],shown:true },
    { title: 'Uygulama Örnekleri', icon: 'element-8', routerLink: '/application-examples',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI],shown:true },
    { title: 'Çözüm Oluştur', icon: 'element-3', routerLink: '/create-solution',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI],shown:true },
    { title: 'Çözümlerim', icon: 'element-5', routerLink: '/my-solutions',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI],shown:true },


    { title: 'Çağrı Oluştur', icon: 'element-3', routerLink: '/create-call',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI],shown:true  },
    { title: 'Çağrılarım', icon: 'element-5', routerLink: '/calls',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI],shown:true },
    { title: 'Takvimim', icon: 'element-7', routerLink: '/conversations',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI],shown:true },
    { title: 'Başvuruya Açık Çağrılar', icon: 'element-1', routerLink: '/apply-calls',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI],shown:true },
    { title: 'Arama', icon: 'element-11', routerLink: '/arama',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI],shown:true },
    { title: 'Mesajlar', icon: 'element-11', routerLink: '/apps/chat',roles:[UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI],shown:true },
    
    { title: 'Başvuru Yapılan Çağrılar', icon: 'element-7', routerLink: '/offers',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:true,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI],shown:true },
    { title: 'Hesap Ayarları', icon: 'profile-circle', routerLink: '/crafted/account/overview',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.BI,CompanyTypes.KOBI,CompanyTypes.KOSGEB],shown:true },
    {
      title: 'Ürünlerim ve Hizmetlerim', icon: 'element-12', routerLink: '/catalog',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:false,companyTypes:[CompanyTypes.KOBI],
      subMenu: [
        { title: 'Kategoriler', icon: '', routerLink: 'catalog/kategoriler' },
        { title: 'Ürünler ve Hizmetler', icon: '', routerLink: 'catalog/urunler' },
        { title: 'Ürün veya Hizmet Ekle', icon: '', routerLink: 'catalog/urun-ekle' },
      ],
      shown:true
    },
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
      ],
      shown:true
    },
    

  {
    title: 'Raporlar', icon: '', routerLink: 'crafted/widgets',roles:[UserRoles.KosgebAdmin,UserRoles.User],disabled:true,
    subMenu: [
      { title: 'Horizontal', icon: '', routerLink: 'crafted/widgets' },
    ],
    shown:false
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

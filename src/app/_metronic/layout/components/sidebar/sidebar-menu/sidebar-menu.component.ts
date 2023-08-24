import { Component, HostBinding, OnDestroy, OnInit,Input } from '@angular/core';
import { MenuItem,subMenu } from './sidebar.interface';
import { Observable, Subscription } from 'rxjs';

import { AuthService,UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})


export class SidebarMenuComponent implements OnInit {


  menuItems: MenuItem[] = [
    { title: 'Gösterge Paneli', icon: 'element-11', routerLink: '/dashboard',roles:[1] },
    { title: 'Başvuruya Açık Çözümler', icon: 'element-2', routerLink: '/kobi',roles:[1] },
    { title: 'Çağrı Oluştur', icon: 'element-3', routerLink: '/create-call',roles:[1] },
    { title: 'Çağrılarım', icon: 'element-5', routerLink: '/calls',roles:[1] },
    { title: 'Görüşmelerim', icon: 'element-7', routerLink: '/conversations',roles:[1] },
    { title: 'Büyük İşletmeler', icon: 'element-1', routerLink: '/kobi',roles:[2] },
    {
      title: 'Fonksiyonlar ve Modüller', icon: 'element-12', routerLink: '/catalog',roles:[1],
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
    { title: 'Hesap Ayarları', icon: 'profile-circle', routerLink: '/crafted/account/overview',roles:[1] },
  {
    title: 'Katalog', icon: '', routerLink: '/catalog',roles:[1],
    subMenu: [
      { title: 'Vitrin', icon: '', routerLink: 'catalog/vitrin' },
      { title: 'Kategoriler', icon: '', routerLink: 'catalog/kategoriler' },
      { title: 'Kategori Ekle', icon: '', routerLink: 'catalog/kategori-ekle' },
      { title: 'Ürünler', icon: '', routerLink: 'catalog/urunler' },
      { title: 'Ürün Ekle', icon: '', routerLink: 'catalog/urun-ekle' },
    ]
  },
  {
    title: 'Raporlar', icon: '', routerLink: 'crafted/widgets',roles:[2],
    subMenu: [
      { title: 'Horizontal', icon: '', routerLink: 'crafted/widgets' },
    ]
  },

  ];
  user$: Observable<UserType>;
  private unsubscribe: Subscription[] = [];

  constructor(
    private auth: AuthService,
  ) {
    
  }
  

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    console.log(this.user$);

  }

}

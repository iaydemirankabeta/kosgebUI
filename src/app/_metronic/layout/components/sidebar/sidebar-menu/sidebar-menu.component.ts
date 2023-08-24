import { Component, OnInit,Input } from '@angular/core';
import { MenuItem,subMenu } from './sidebar.interface';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})


export class SidebarMenuComponent implements OnInit {


  menuItems: MenuItem[] = [
    { title: 'Gösterge Paneli', icon: 'element-11', routerLink: '/dashboard' },
    { title: 'Ürün/Hizmet Firmaları', icon: 'element-2', routerLink: '/kobi' },
    { title: 'Büyük İşletmeler', icon: 'element-1', routerLink: '/kobi' },
  {
    title: 'Katalog', icon: '', routerLink: '/catalog',
    subMenu: [
      { title: 'Vitrin', icon: '', routerLink: 'catalog/vitrin' },
      { title: 'Kategoriler', icon: '', routerLink: 'catalog/kategoriler' },
      { title: 'Kategori Ekle', icon: '', routerLink: 'catalog/kategori-ekle' },
      { title: 'Ürünler', icon: '', routerLink: 'catalog/urunler' },
      { title: 'Ürün Ekle', icon: '', routerLink: 'catalog/urun-ekle' },
    ]
  },
  {
    title: 'Raporlar', icon: '', routerLink: 'crafted/widgets',
    subMenu: [
      { title: 'Horizontal', icon: '', routerLink: 'crafted/widgets' },
    ]
  },

  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}

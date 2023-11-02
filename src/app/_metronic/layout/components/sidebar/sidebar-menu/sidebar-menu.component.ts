import { Component, OnInit } from '@angular/core';
import { MenuItem, subMenu } from './sidebar.interface';
import { Observable } from 'rxjs';

import { AuthService, UserType } from 'src/app/modules/auth';
import { CompanyTypes, UserRoles } from 'src/app/modules/auth/models/user-company.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})


export class SidebarMenuComponent implements OnInit {


  menuItems: MenuItem[] = [
    { title: 'Anasayfa', icon: 'home', routerLink: '/anasayfa', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.Muadil, CompanyTypes.ADMIN, CompanyTypes.KOSGEBUSER], shown: true },
    { title: 'Anasayfa', icon: 'home', routerLink: '/anasayfa', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI, CompanyTypes.KOBI], shown: true },
    { title: 'Tedarik Zekası', icon: 'search-list', routerLink: '/arama', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI, CompanyTypes.KOBI], shown: true },
    {
      title: 'Yerlileştirme Modülü', icon: 'element-5', routerLink: '/cagrilar', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI], shown: false,
      subMenu: [
        { title: 'Çağrı Oluştur', icon: 'element-3', routerLink: '/yerellestirme//cagri-olustur' },
        { title: 'Çağrılarım', icon: 'call', routerLink: '/yerellestirme//cagrilar' },
        { title: 'Çağrılarıma Gelen Başvurular', icon: 'paper-clip', routerLink: '/yerellestirme/cagrima-gelen-basvurular' },
        { title: 'KOSGEB Talep Toplama', icon: '', routerLink: '/yerellestirme/kosgeb-talep-toplama' },
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
        { title: 'Başvurduğum Çağrılar', icon: '', routerLink: 'yerellestirme/cagrima-gelen-basvurular' },
        { title: 'Başvuruya Açık Çağrılar', icon: '', routerLink: '/yerellestirme/basvuruya-acik-cagrilar' },
      ],
    },
    {
      title: 'Yerlileştirme Modülü', icon: 'element-5', routerLink: '/kosgeb-destek', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB,CompanyTypes.KOSGEBUSER], shown: false,
      subMenu: [
        // { title: 'KOSGEB Destek Çağrıları', icon: '', routerLink: '/kosgeb-destek' },
        { title: 'Talep Toplama', icon: '', routerLink: '/yerellestirme/talep-olustur' },
        { title: 'Tüm Çağrılar', icon: '', routerLink: '/yerellestirme/cagrilar' },

      ],
    },
    {
      title: 'Çağrı Zekası', icon: 'element-5', routerLink: '/kosgeb-destek', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB,CompanyTypes.KOSGEBUSER], shown: false,
      subMenu: [
        { title: 'KOSGEB Destek Çağrıları', icon: '', routerLink: '/kosgeb-destek' },
       

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
        { title: 'Takvimim', icon: 'calendar-add', routerLink: '/takvimim' },
      ],
    },
    {
      title: 'B2B', icon: 'element-5', routerLink: '/b2b', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Büyük İşletmeler', icon: '', routerLink: '/buyuk-isletmeler' },
        { title: 'Büyük İşletmeye Gönderilen Görüşme Talepleri', icon: '', routerLink: '/bi-gonderilen-gorusmeler' },
      ],
    },
    {
      title: 'B2B', icon: 'element-5', routerLink: '/b2b', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI], shown: false,
      subMenu: [
        { title: 'Kobiler', icon: '', routerLink: '/kobi' },
        { title: 'Kobilerden Gelen Görüşme Talepleri', icon: '', routerLink: '/kobilerden-gelen-gorusmeler' },
      ],
    },
    {
      title: 'Toplantı Modülü', icon: 'tablet-book', routerLink: '/company-management', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI, CompanyTypes.BI], shown: false,
      subMenu: [
        { title: 'Toplantılarım', icon: '', routerLink: '/toplanti/toplantilarim' },
        { title: 'Takvimim', icon: 'calendar-add', routerLink: '/takvimim' },
      ],
    },
    {
      title: 'Kobi Penceresi', icon: 'element-5', routerLink: '/b2b', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Kobiler', icon: '', routerLink: '/kobi' },
        { title: 'Proje Ortaklığı Talep Ettiğim Kobiler', icon: '', routerLink: '/dashboard' },
        { title: 'Proje Ortaklığı Teklif Eden  Kobiler', icon: '', routerLink: '/dashboard' },

      ],
    },
    {
      title: 'Global Zeka', icon: 'tablet-book', routerLink: '/global-zeka', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB], shown: false,
      subMenu: [
        { title: 'Anketler', icon: '', routerLink: 'global-zeka/anketler' },
      ],
    },
    {
      title: 'Proje Zekası', icon: 'tablet-book', routerLink: '/proje-zekasi', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB,CompanyTypes.BI,CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Bildirimler', icon: '', routerLink: '/proje-zekasi/bildirimler' },
       
      ],
    },
    {
      title: 'Raporlama Modülü', icon: 'tablet-book', routerLink: '/raporlar', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB], shown: false,
      subMenu: [
        { title: 'Raporlar', icon: '', routerLink: '/rapor' },
        { title: 'Profil Görüntülemeleri', icon: '', routerLink: '/raporlar/kosgeb-goruntuleme' },
       
      ],
    },  

    {
      title: 'Raporlama Modülü', icon: 'tablet-book', routerLink: '/raporlar', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI,CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Profili Görüntüleyenler', icon: '', routerLink: '/raporlar/profil-goruntuleme' },
       
      ],
    },

    {
      title: 'E-Ticaret Modülü', icon: 'element-12', routerLink: '/', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI], shown: false,
      subMenu: [
        { title: 'Ürünler ve Hizmetler', icon: '', routerLink: 'katalog/vitrin' },
       
      ],
    },
    {
      title: 'E-Ticaret Modülü', icon: 'element-12', routerLink: '/', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB], shown: false,
      subMenu: [
        { title: 'Ürünler ve Hizmetler', icon: '', routerLink: 'katalog/urunler' },
       
      ],
    },

    {
      title: 'E-Ticaret Modülü', icon: 'element-12', routerLink: '/katalog', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI],
      subMenu: [
        { title: 'Vitrin', icon: '', routerLink: 'katalog/vitrin' },
        { title: 'Kategoriler', icon: '', routerLink: 'katalog/kategoriler' },
        { title: 'Ürünler ve Hizmetler', icon: '', routerLink: 'katalog/urunler' },
        { title: 'Ürün veya Hizmet Ekle', icon: '', routerLink: 'katalog/urun-ekle' },
        {title:'Pazar Yerleri', icon: '', routerLink: 'katalog/pazar-yerleri'}
      ],
      shown: true
    },

    { title: 'Rol Grupları', icon: 'element-4', routerLink: '/rol-gruplari', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.ADMIN], shown: true },
    { title: 'Kullanıcı Yönetimi', icon: 'user', routerLink: '/kullanici-yonetimi', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.ADMIN], shown: false },
    { title: 'Şirket Yönetimi', icon: 'compass', routerLink: '/sirket-yonetimi', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOSGEB, CompanyTypes.Muadil, CompanyTypes.ADMIN], shown: false },
    { title: 'Uygulama Örnekleri', icon: 'element-8', routerLink: '/uygulama-ornekleri', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: true },
    { title: 'Mesajlar', icon: 'message-notif', routerLink: '/apps/chat', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI, CompanyTypes.KOBI], shown: true },
    
    {
      title: 'Finans Modülü', icon: 'element-5', routerLink: '/finans-modulu', roles: [UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI], shown: false,
      subMenu: [
        { title: 'Finans', icon: '', routerLink: '/finans-modulu' },
      ],
    },
    

    
    {
      title: 'Hesap Ayarları', icon: 'profile-circle', routerLink: '', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.KOBI, CompanyTypes.KOSGEB], shown: true,
      subMenu: [
        { title: 'Profilim', icon: '', routerLink: '/hesabim/profilim' },
        { title: 'Kullanıcı Yönetimi', icon: '', routerLink: '/hesabim/kullanici-yonetimi' },
        { title: 'Hesap Ayarları', icon: '', routerLink: '/hesabim/ayarlar' },
        { title: 'Adresler', icon: '', routerLink: '/hesabim/adreslerim'},
      ],
    },
    {
      title: 'Hesap Ayarları', icon: 'profile-circle', routerLink: '', roles: [UserRoles.KosgebAdmin, UserRoles.User], disabled: false, companyTypes: [CompanyTypes.BI], shown: true,
      subMenu: [
        { title: 'Profilim', icon: '', routerLink: '/hesabim/profilim' },
        { title: 'Kullanıcı Yönetimi', icon: '', routerLink: '/hesabim/kullanici-yonetimi' },
        { title: 'Hesap Ayarları', icon: '', routerLink: '/hesabim/ayarlar' },
        { title: 'Adresler', icon: '', routerLink: '/hesabim/adreslerim'},

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

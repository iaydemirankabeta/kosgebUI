import {Component, OnInit} from '@angular/core';
import {environment} from 'src/environments/environment';

const kobiFilter = [
  {
    id:1,
    name:'Sektör',
    options:[
      {id:1,name:'Gıda',value:1,category:'Sektör'},
      {id:1,name:'İnşaat',value:1,category:'Sektör'},
      {id:1,name:'Tekstil',value:1,category:'Sektör'},
      {id:1,name:'Kozmetik',value:1,category:'Sektör'},
      {id:1,name:'Teknoloji',value:1,category:'Sektör'},
      {id:1,name:'Hububat (Tahıl)',value:1,category:'Sektör'},
    ],
    
   },{
    id:2,
    name:'İşletme Tipi',
    options:[
      {id:1,name:'Şahıs Şirketi',value:1,category:'İşletme Tipi'},
      {id:1,name:'Limited Şirket',value:1,category:'İşletme Tipi'},
      {id:1,name:'Anonim Şirket',value:1,category:'İşletme Tipi'},
      {id:1,name:'Özel İşletme',value:1,category:'İşletme Tipi'},
      {id:1,name:'Kamu İşletme',value:1,category:'İşletme Tipi'},
      {id:1,name:'Karma İşletmeler',value:1,category:'İşletme Tipi'},
      {id:1,name:'Yabancı Sermayeli İşletmeler',value:1,category:'İşletme Tipi'},
    ],
   },{
    id:2,
    name:'Sertifikasyonlar ve Belgeler',
    options:[
      {id:1,name:'ISO 9001 - Kalite Yönetim Sistemi',value:1,category:'Sertifikasyonlar ve Belgeler'},
      {id:1,name:'ISO 13485 - Tıbbi Cihazlar Kalite Yönetim Sistemi',value:1,category:'Sertifikasyonlar ve Belgeler'},
      {id:1,name:'ISO 14001 - Çevre Yönetim Sistemi',value:1,category:'Sertifikasyonlar ve Belgeler'},
      {id:1,name:'ISO 15378 - İlaçlar için birincil ambalaj malzemeleri',value:1,category:'Sertifikasyonlar ve Belgeler'},
    ],
   }
   ,{
    id:2,
    name:'İşletme Faaliyet Yeri',
    options:[
      {id:1,name:'İstanbul',value:1,category:'İşletme Faaliyet Yeri'},
      {id:1,name:'Ankara',value:1,category:'İşletme Faaliyet Yeri'},
      {id:1,name:'İzmir',value:1,category:'İşletme Faaliyet Yeri'},
      {id:1,name:'Antalya',value:1,category:'İşletme Faaliyet Yeri'},
    ],
   }
   ,{
    id:2,
    name:'Toplam Personel',
    options:[
      {id:1,name:'0 - 5',value:1,category:'Toplam Personel'},
      {id:1,name:'6 - 10',value:1,category:'Toplam Personel'},
      {id:1,name:'11 - 20',value:1,category:'Toplam Personel'},
      {id:1,name:'21 - 50',value:1,category:'Toplam Personel'},
      {id:1,name:'51 - 250',value:1,category:'Toplam Personel'},
      {id:1,name:'250 ve üstü',value:1,category:'Toplam Personel'},
    ],
   }
   
   
   

];
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  kobiFilter = kobiFilter;
  appThemeName: string = environment.appThemeName;
  appPurchaseUrl: string = environment.appPurchaseUrl;

  ngOnInit(): void {
    
    console.log(kobiFilter);
    
  }

}

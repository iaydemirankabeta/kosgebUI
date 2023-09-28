import { Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';

export interface Call{
  id:number,
  title:string,
  BIName:string,
  totalOffer:string,
  offer:string,
  badget:string,
  badgetColor:string,
  expectationDescription:string;
  tags:string,
  piece:string,
  url:{name:string}[];
  sektor?:string;
  it?:string;
  svb?:string;
  ify?:string;
  tp?:string;
  nace_kodu?:string;
  ciro?:string;
  tedarikci_tipi?:string;
  gtip?:string;
  yakinlik?:string;
  ekozellik?:string;
  beyazyaka?:string;
  maviyaka?:string;
  yurticiatis?:string;
  yurtdisiatis?:string;
  karlilik?:string;
  istatistikibölge?:string;
  argeTamamlama?:string;
  ithalgtip?:string;
  ihracgtip?:string;
}

export interface Filter {
  id: number;
  label: string;
  name: string;
  options: FilterOptions[];
}



export interface FilterOptions {
  id: number; name: string; value: number; category: string
}

@Component({
  selector: 'app-pending-calls',
  templateUrl: './pending-calls.component.html',
  styleUrls: ['./pending-calls.component.scss']
})
export class PendingCallsComponent {
  displayedColumns: string[] = ["BIName",'CallName', 'Piece', 'Action'];
  pendingCalls : Call[] = [
    {
      id: 1, title: 'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',BIName:"ISUZU",
      totalOffer: '50', offer: '22',
      badget: 'Enerji ', badgetColor: '#27ae60', tags: '#ActiveNoiceCanelling #ANC #GürültüEngelleme #GürültüKontrolü',
      piece: "200",
      url: [
        { name: 'Özel Sorun/İhtiyaç/Fırsat Alanı' },
        { name: 'Teknoloji Tedarikçisinden Beklentisi' },
        { name: 'Aradığı Teknoloji Tedarikçisi Özellikleri' },
        { name: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri' },
      ],expectationDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ornare nisl. Nunc vitae mauris enim. In accumsan ullamcorper lectus."
    },
    {
      id: 2, title: 'Kozmetik Teknoloji Çözümler',BIName:"ZARA",
      totalOffer: '70', offer: '56', piece: "500",
      badget: 'Kozmetik', badgetColor: '#8e44ad', tags: '#cosmetic,#technology,#application #GürültüEngelleme #GürültüKontrolü',
      url: [
        { name: 'Özel Sorun/İhtiyaç/Fırsat Alanı' },
        { name: 'Teknoloji Tedarikçisinden Beklentisi' },
        { name: 'Aradığı Teknoloji Tedarikçisi Özellikleri' },
        { name: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri' },
      ],expectationDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ornare nisl. Nunc vitae mauris enim. In accumsan ullamcorper lectus."
    }
  ]
  dataSet = new MatTableDataSource(this.pendingCalls)

  selectedPendingCall:any = this.pendingCalls[0];
  keys = Object.keys(this.selectedPendingCall);
  filters:Filter[] = [
    {
      id: 1,
      label: 'Sektör',
      name: 'sektor',
      options: [
        { id: 1, name: 'Gıda', value: 1, category: 'Sektör',},
        { id: 2, name: 'İnşaat', value: 2, category: 'Sektör'},
        { id: 3, name: 'Tekstil', value: 3, category: 'Sektör' },
        { id: 4, name: 'Kozmetik', value: 4, category: 'Sektör'},
        { id: 5, name: 'Teknoloji', value: 5, category: 'Sektör'},
        { id: 6, name: 'Hububat (Tahıl)', value: 6, category: 'Sektör'},
      ],
    },
    {
      id: 2,
      label: 'İşletme Tipi',
      name: 'it',
      options: [
        { id: 1, name: 'Şahıs Şirketi', value: 1, category: 'İşletme Tipi' },
        { id: 2, name: 'Limited Şirket', value: 2, category: 'İşletme Tipi' },
        { id: 3, name: 'Anonim Şirket', value: 3, category: 'İşletme Tipi' },
        { id: 4, name: 'Özel İşletme', value: 4, category: 'İşletme Tipi' },
        { id: 5, name: 'Kamu İşletme', value: 5, category: 'İşletme Tipi' },
        { id: 6, name: 'Karma İşletmeler', value: 6, category: 'İşletme Tipi' },
        { id: 7, name: 'Yabancı Sermayeli İşletmeler', value: 7, category: 'İşletme Tipi' },
      ],
    },
    {
      id: 3,
      label: 'Sertifikasyon ve Belgeler',
      name: 'svb',
      options: [
        { id: 1, name: 'ISO 9001 - Kalite Yönetim Sistemi', value: 1, category: 'Sertifikasyonlar ve Belgeler' },
        { id: 2, name: 'ISO 13485 - Tıbbi Cihazlar Kalite Yönetim Sistemi', value: 2, category: 'Sertifikasyonlar ve Belgeler' },
        { id: 3, name: 'ISO 14001 - Çevre Yönetim Sistemi', value: 3, category: 'Sertifikasyonlar ve Belgeler' },
        { id: 4, name: 'ISO 15378 - İlaçlar için birincil ambalaj malzemeleri', value: 4, category: 'Sertifikasyonlar ve Belgeler' },
      ],
    },
    {
      id: 4,
      label: 'İşletme Faaliyet Yeri',
      name: 'ify',
      options: [
        { id: 1, name: 'İstanbul', value: 1, category: 'İşletme Faaliyet Yeri' },
        { id: 2, name: 'Ankara', value: 2, category: 'İşletme Faaliyet Yeri' },
        { id: 3, name: 'İzmir', value: 3, category: 'İşletme Faaliyet Yeri' },
        { id: 4, name: 'Antalya', value: 4, category: 'İşletme Faaliyet Yeri' },
      ],
    },
    {
      id: 5,
      label: 'Toplam Personel',
      name: 'tp',
      options: [
        { id: 1, name: '0 - 5', value: 1, category: 'Toplam Personel' },
        { id: 2, name: '6 - 10', value: 2, category: 'Toplam Personel' },
        { id: 3, name: '11 - 20', value: 3, category: 'Toplam Personel' },
        { id: 4, name: '21 - 50', value: 4, category: 'Toplam Personel' },
        { id: 5, name: '51 - 250', value: 5, category: 'Toplam Personel' },
        { id: 6, name: '250 ve üstü', value: 6, category: 'Toplam Personel' },
      ],
    },
    {
      id: 6,
      label: 'NACE Kodu',
      name: 'nace_kodu',
      options: [
        { id: 1, name: '01.13.17', value: 1, category: 'NACE Kodu' },
        { id: 2, name: '01.13.18', value: 2, category: 'NACE Kodu' },
        { id: 3, name: '01.13.19', value: 3, category: 'NACE Kodu' },
        { id: 4, name: '01.23.02', value: 4, category: 'NACE Kodu' },
        { id: 5, name: '01.24.04', value: 5, category: 'NACE Kodu' },
        { id: 6, name: '01.61.06', value: 6, category: 'NACE Kodu' },
        { id: 7, name: '46.17.02', value: 7, category: 'NACE Kodu' },
      ],
    },
    {
      id: 7,
      label: 'Ciro',
      name: 'ciro',
      options: [
        { id: 1, name: '0 - 1 Milyon TL', value: 1, category: 'Ciro' },
        { id: 2, name: '1 - 5 Milyon TL', value: 2, category: 'Ciro' },
        { id: 3, name: '5 - 10 Milyon TL', value: 3, category: 'Ciro' },
        { id: 4, name: '10 - 15 Milyon TL', value: 4, category: 'Ciro' },
        { id: 5, name: '15 - 25 Milyon TL', value: 5, category: 'Ciro' },
        { id: 6, name: '25 - 50 Milyon TL', value: 6, category: 'Ciro' },
        { id: 7, name: '50 - 125 Milyon TL', value: 7, category: 'Ciro' },
      ],
    },
    {
      id: 8,
      label: 'Tedarikçi Tipi',
      name: 'tedarikci_tipi',
      options: [
        { id: 1, name: 'Doğrudan Tedarikçi (1. Derece Tedarikçi)', value: 1, category: 'Tedarikçi Tipi' },
        { id: 2, name: 'Dolaylı Tedarikçi (2. Seviye Tedarikçi)', value: 2, category: 'Tedarikçi Tipi' },
        { id: 3, name: 'Mal Tedarikçisi', value: 3, category: 'Tedarikçi Tipi' },
        { id: 4, name: 'Hizmet Alımı', value: 4, category: 'Tedarikçi Tipi' },
      ],
    },
    {
      id: 9,
      label: 'GTİP Bilgisi',
      name: 'gtip',
      options: [
        { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
        { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
        { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
        { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
        { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
        { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
        { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
        { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
        { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
        { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
        { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
        { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
        { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
        { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
        { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
        { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
        { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
        { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
        { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
        { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
        { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
        { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
        { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
        { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
        { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
      ],
    },
    {
      id: 10,
      label: 'Yakınlık (KM)',
      name: 'yakinlik',
      options: [
        { id: 1, name: '10-20 Km', value: 1, category: 'Yakınlık (KM)' },
        { id: 2, name: '20-50 Km', value: 2, category: 'Yakınlık (KM)' },
        { id: 3, name: '50-100 Km', value: 3, category: 'Yakınlık (KM)' },
        { id: 4, name: '100-200 Km', value: 4, category: 'Yakınlık (KM)' },
        { id: 5, name: '200-300 Km', value: 5, category: 'Yakınlık (KM)' },
        { id: 6, name: '300-400 Km', value: 6, category: 'Yakınlık (KM)' },
        { id: 7, name: '400-500 Km', value: 7, category: 'Yakınlık (KM)' },
        { id: 8, name: '500-600 Km', value: 8, category: 'Yakınlık (KM)' },
        { id: 9, name: '500 + Km', value: 9, category: 'Yakınlık (KM)' },
      ],
    },
    {
      id: 11,
      label: 'Ek Özellik',
      name: 'ekozellik',
      options: [
        { id: 1, name: 'Arge-Merkezi', value: 1, category: 'Ek Özellik' },
        { id: 2, name: 'Tasarım Belgesi', value: 2, category: 'Ek Özellik' },
      ],
    }, {
      id: 12,
      label: 'Beyaz Yakalı Personel Sayısı',
      name: 'beyazyaka',
      options: [
        { id: 1, name: '0 - 5', value: 1, category: 'Beyaz Yaka' },
        { id: 2, name: '6 - 10', value: 2, category: 'Beyaz Yaka' },
        { id: 3, name: '11 - 20', value: 3, category: 'Beyaz Yaka' },
        { id: 4, name: '21 - 50', value: 4, category: 'Beyaz Yaka' },
        { id: 5, name: '51 - 250', value: 5, category: 'Beyaz Yaka' },
        { id: 6, name: '250 ve üstü', value: 6, category: 'Beyaz Yaka' },
      ],
    }, {
      id: 12,
      label: 'Mavi Yaka Personel Sayısı',
      name: 'maviyaka',
      options: [
        { id: 1, name: '0 - 5', value: 1, category: 'Mavi Yaka' },
        { id: 2, name: '6 - 10', value: 2, category: 'Mavi Yaka' },
        { id: 3, name: '11 - 20', value: 3, category: 'Mavi Yaka' },
        { id: 4, name: '21 - 50', value: 4, category: 'Mavi Yaka' },
        { id: 5, name: '51 - 250', value: 5, category: 'Mavi Yaka' },
        { id: 6, name: '250 ve üstü', value: 6, category: 'Mavi Yaka' },
      ],
    }, {
      id: 20,
      label: 'Yurt İçi Satış',
      name: 'yurticiatis',
      options: [
        { id: 1, name: '10k - 50k', value: 1, category: 'Yurt İçi Satış' },
        { id: 2, name: '100k - 200k', value: 2, category: 'Yurt İçi Satış' },
        { id: 3, name: '200k - 500k', value: 3, category: 'Yurt İçi Satış' },
        { id: 4, name: '500k - 1M', value: 4, category: 'Yurt İçi Satış' },
      ],
    }, {
      id: 14,
      label: 'Yurt Dışı Satış',
      name: 'yurtdisiatis',
      options: [
        { id: 1, name: '10k - 50k', value: 1, category: 'Yurt Dışı Satış' },
        { id: 2, name: '100k - 200k', value: 2, category: 'Yurt Dışı Satış' },
        { id: 3, name: '200k - 500k', value: 3, category: 'Yurt Dışı Satış' },
        { id: 4, name: '500k - 1M', value: 4, category: 'Yurt Dışı Satış' },
      ],
    }, {
      id: 15,
      label: 'Karlılık',
      name: 'karlilik',
      options: [
        { id: 1, name: '0-%25', value: 1, category: 'Karlılık' },
        { id: 2, name: '%25-%50', value: 2, category: 'Karlılık' },
        { id: 3, name: '%50-%75', value: 3, category: 'Karlılık' },
        { id: 4, name: '%75-%100', value: 4, category: 'Karlılık' },
        { id: 5, name: '%100+', value: 2, category: 'Karlılık' },

      ],
    }, {
      id: 16,
      label: 'İstatistiki Bölge',
      name: 'istatistikibölge',
      options: [
        { id: 1, name: 'Düzey 1 İstatistiki Bölge', value: 1, category: 'İstatistiki Bölge' },
        { id: 2, name: 'Düzey 2 İstatistiki Bölge', value: 2, category: 'İstatistiki Bölge' },
        { id: 3, name: 'Düzey 3 İstatistiki Bölge', value: 3, category: 'İstatistiki Bölge' },
      ],
    }, {
      id: 17,
      label: 'Ar-Ge Projesi Tamamlamış Olma Durumu',
      name: 'argeTamamlama',
      options: [
        { id: 1, name: 'Evet', value: 1, category: 'Ar-Ge Projesi Tamamlamış Olma Durumu' },
        { id: 2, name: 'Hayır', value: 2, category: 'Ar-Ge Projesi Tamamlamış Olma Durumu' },
      ],
    },
    {
      id: 18,
      label: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu',
      name: 'argeYurutme',
      options: [
        { id: 1, name: 'Evet', value: 1, category: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu' },
        { id: 2, name: 'Hayır', value: 2, category: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu' },
      ],
    },

    {
      id: 19,
      label: 'İthal Edilen Ürünlerin GTİP’leri',
      name: 'ithalgtip',
      options: [
        { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
        { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
        { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
        { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
        { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
        { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
        { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
        { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
        { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
        { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
        { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
        { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
        { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
        { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
        { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
        { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
        { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
        { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
        { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
        { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
        { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
        { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
        { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
        { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
        { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
      ],
    },
    {
      id: 19,
      label: 'İhraç Edilen Ürünlerin GTİP’leri',
      name: 'ihracgtip',
      options: [
        { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
        { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
        { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
        { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
        { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
        { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
        { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
        { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
        { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
        { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
        { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
        { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
        { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
        { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
        { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
        { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
        { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
        { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
        { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
        { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
        { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
        { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
        { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
        { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
        { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
      ],
    },

  ];
  
  user$: Observable<UserType>;
  modalConfig: ModalConfig = {
    modalTitle: "Çağrıyı Görüntüle",
    closeButtonLabel: 'Gönder',
    hideCloseButton: () => true
  };
  @ViewChild('detailModal') private modalComponent: ModalComponent;
  @ViewChild('MatSort') sort: MatSort;
  constructor(private auth: AuthService,private _liveAnnouncer: LiveAnnouncer) {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.filters = this.getKobiFilter();
  }
  ngAfterViewInit() {
    this.dataSet.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

  }
  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    console.log(this.selectedPendingCall);
  }
  openDetailModal(item: any) {
    this.selectedPendingCall = item
    this.modalComponent.open();
  }
  closeDetailModal(){
    this.modalComponent.close();

  }
  getKobiFilter() : Filter[] {
    return [
      {
        id: 1,
        label: 'Sektör',
        name: 'sektor',
        options: [
          { id: 1, name: 'Gıda', value: 1, category: 'Sektör',},
          { id: 2, name: 'İnşaat', value: 2, category: 'Sektör'},
          { id: 3, name: 'Tekstil', value: 3, category: 'Sektör' },
          { id: 4, name: 'Kozmetik', value: 4, category: 'Sektör'},
          { id: 5, name: 'Teknoloji', value: 5, category: 'Sektör'},
          { id: 6, name: 'Hububat (Tahıl)', value: 6, category: 'Sektör'},
        ],
      },
      {
        id: 2,
        label: 'İşletme Tipi',
        name: 'it',
        options: [
          { id: 1, name: 'Şahıs Şirketi', value: 1, category: 'İşletme Tipi' },
          { id: 2, name: 'Limited Şirket', value: 2, category: 'İşletme Tipi' },
          { id: 3, name: 'Anonim Şirket', value: 3, category: 'İşletme Tipi' },
          { id: 4, name: 'Özel İşletme', value: 4, category: 'İşletme Tipi' },
          { id: 5, name: 'Kamu İşletme', value: 5, category: 'İşletme Tipi' },
          { id: 6, name: 'Karma İşletmeler', value: 6, category: 'İşletme Tipi' },
          { id: 7, name: 'Yabancı Sermayeli İşletmeler', value: 7, category: 'İşletme Tipi' },
        ],
      },
      {
        id: 3,
        label: 'Sertifikasyon ve Belgeler',
        name: 'svb',
        options: [
          { id: 1, name: 'ISO 9001 - Kalite Yönetim Sistemi', value: 1, category: 'Sertifikasyonlar ve Belgeler' },
          { id: 2, name: 'ISO 13485 - Tıbbi Cihazlar Kalite Yönetim Sistemi', value: 2, category: 'Sertifikasyonlar ve Belgeler' },
          { id: 3, name: 'ISO 14001 - Çevre Yönetim Sistemi', value: 3, category: 'Sertifikasyonlar ve Belgeler' },
          { id: 4, name: 'ISO 15378 - İlaçlar için birincil ambalaj malzemeleri', value: 4, category: 'Sertifikasyonlar ve Belgeler' },
        ],
      },
      {
        id: 4,
        label: 'İşletme Faaliyet Yeri',
        name: 'ify',
        options: [
          { id: 1, name: 'İstanbul', value: 1, category: 'İşletme Faaliyet Yeri' },
          { id: 2, name: 'Ankara', value: 2, category: 'İşletme Faaliyet Yeri' },
          { id: 3, name: 'İzmir', value: 3, category: 'İşletme Faaliyet Yeri' },
          { id: 4, name: 'Antalya', value: 4, category: 'İşletme Faaliyet Yeri' },
        ],
      },
      {
        id: 5,
        label: 'Toplam Personel',
        name: 'tp',
        options: [
          { id: 1, name: '0 - 5', value: 1, category: 'Toplam Personel' },
          { id: 2, name: '6 - 10', value: 2, category: 'Toplam Personel' },
          { id: 3, name: '11 - 20', value: 3, category: 'Toplam Personel' },
          { id: 4, name: '21 - 50', value: 4, category: 'Toplam Personel' },
          { id: 5, name: '51 - 250', value: 5, category: 'Toplam Personel' },
          { id: 6, name: '250 ve üstü', value: 6, category: 'Toplam Personel' },
        ],
      },
      {
        id: 6,
        label: 'NACE Kodu',
        name: 'nace_kodu',
        options: [
          { id: 1, name: '01.13.17', value: 1, category: 'NACE Kodu' },
          { id: 2, name: '01.13.18', value: 2, category: 'NACE Kodu' },
          { id: 3, name: '01.13.19', value: 3, category: 'NACE Kodu' },
          { id: 4, name: '01.23.02', value: 4, category: 'NACE Kodu' },
          { id: 5, name: '01.24.04', value: 5, category: 'NACE Kodu' },
          { id: 6, name: '01.61.06', value: 6, category: 'NACE Kodu' },
          { id: 7, name: '46.17.02', value: 7, category: 'NACE Kodu' },
        ],
      },
      {
        id: 7,
        label: 'Ciro',
        name: 'ciro',
        options: [
          { id: 1, name: '0 - 1 Milyon TL', value: 1, category: 'Ciro' },
          { id: 2, name: '1 - 5 Milyon TL', value: 2, category: 'Ciro' },
          { id: 3, name: '5 - 10 Milyon TL', value: 3, category: 'Ciro' },
          { id: 4, name: '10 - 15 Milyon TL', value: 4, category: 'Ciro' },
          { id: 5, name: '15 - 25 Milyon TL', value: 5, category: 'Ciro' },
          { id: 6, name: '25 - 50 Milyon TL', value: 6, category: 'Ciro' },
          { id: 7, name: '50 - 125 Milyon TL', value: 7, category: 'Ciro' },
        ],
      },
      {
        id: 8,
        label: 'Tedarikçi Tipi',
        name: 'tedarikci_tipi',
        options: [
          { id: 1, name: 'Doğrudan Tedarikçi (1. Derece Tedarikçi)', value: 1, category: 'Tedarikçi Tipi' },
          { id: 2, name: 'Dolaylı Tedarikçi (2. Seviye Tedarikçi)', value: 2, category: 'Tedarikçi Tipi' },
          { id: 3, name: 'Mal Tedarikçisi', value: 3, category: 'Tedarikçi Tipi' },
          { id: 4, name: 'Hizmet Alımı', value: 4, category: 'Tedarikçi Tipi' },
        ],
      },
      {
        id: 9,
        label: 'GTİP Bilgisi',
        name: 'gtip',
        options: [
          { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
          { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
          { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
          { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
          { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
          { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
          { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
          { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
          { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
          { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
          { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
          { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
          { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
          { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
          { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
          { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
          { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
          { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
          { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
          { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
          { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
          { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
          { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
          { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
          { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
        ],
      },
      {
        id: 10,
        label: 'Yakınlık (KM)',
        name: 'yakinlik',
        options: [
          { id: 1, name: '10-20 Km', value: 1, category: 'Yakınlık (KM)' },
          { id: 2, name: '20-50 Km', value: 2, category: 'Yakınlık (KM)' },
          { id: 3, name: '50-100 Km', value: 3, category: 'Yakınlık (KM)' },
          { id: 4, name: '100-200 Km', value: 4, category: 'Yakınlık (KM)' },
          { id: 5, name: '200-300 Km', value: 5, category: 'Yakınlık (KM)' },
          { id: 6, name: '300-400 Km', value: 6, category: 'Yakınlık (KM)' },
          { id: 7, name: '400-500 Km', value: 7, category: 'Yakınlık (KM)' },
          { id: 8, name: '500-600 Km', value: 8, category: 'Yakınlık (KM)' },
          { id: 9, name: '500 + Km', value: 9, category: 'Yakınlık (KM)' },
        ],
      },
      {
        id: 11,
        label: 'Ek Özellik',
        name: 'ekozellik',
        options: [
          { id: 1, name: 'Arge-Merkezi', value: 1, category: 'Ek Özellik' },
          { id: 2, name: 'Tasarım Belgesi', value: 2, category: 'Ek Özellik' },
        ],
      }, {
        id: 12,
        label: 'Beyaz Yakalı Personel Sayısı',
        name: 'beyazyaka',
        options: [
          { id: 1, name: '0 - 5', value: 1, category: 'Beyaz Yaka' },
          { id: 2, name: '6 - 10', value: 2, category: 'Beyaz Yaka' },
          { id: 3, name: '11 - 20', value: 3, category: 'Beyaz Yaka' },
          { id: 4, name: '21 - 50', value: 4, category: 'Beyaz Yaka' },
          { id: 5, name: '51 - 250', value: 5, category: 'Beyaz Yaka' },
          { id: 6, name: '250 ve üstü', value: 6, category: 'Beyaz Yaka' },
        ],
      }, {
        id: 12,
        label: 'Mavi Yaka Personel Sayısı',
        name: 'maviyaka',
        options: [
          { id: 1, name: '0 - 5', value: 1, category: 'Mavi Yaka' },
          { id: 2, name: '6 - 10', value: 2, category: 'Mavi Yaka' },
          { id: 3, name: '11 - 20', value: 3, category: 'Mavi Yaka' },
          { id: 4, name: '21 - 50', value: 4, category: 'Mavi Yaka' },
          { id: 5, name: '51 - 250', value: 5, category: 'Mavi Yaka' },
          { id: 6, name: '250 ve üstü', value: 6, category: 'Mavi Yaka' },
        ],
      }, {
        id: 20,
        label: 'Yurt İçi Satış',
        name: 'yurticiatis',
        options: [
          { id: 1, name: '10k - 50k', value: 1, category: 'Yurt İçi Satış' },
          { id: 2, name: '100k - 200k', value: 2, category: 'Yurt İçi Satış' },
          { id: 3, name: '200k - 500k', value: 3, category: 'Yurt İçi Satış' },
          { id: 4, name: '500k - 1M', value: 4, category: 'Yurt İçi Satış' },
        ],
      }, {
        id: 14,
        label: 'Yurt Dışı Satış',
        name: 'yurtdisiatis',
        options: [
          { id: 1, name: '10k - 50k', value: 1, category: 'Yurt Dışı Satış' },
          { id: 2, name: '100k - 200k', value: 2, category: 'Yurt Dışı Satış' },
          { id: 3, name: '200k - 500k', value: 3, category: 'Yurt Dışı Satış' },
          { id: 4, name: '500k - 1M', value: 4, category: 'Yurt Dışı Satış' },
        ],
      }, {
        id: 15,
        label: 'Karlılık',
        name: 'karlilik',
        options: [
          { id: 1, name: '0-%25', value: 1, category: 'Karlılık' },
          { id: 2, name: '%25-%50', value: 2, category: 'Karlılık' },
          { id: 3, name: '%50-%75', value: 3, category: 'Karlılık' },
          { id: 4, name: '%75-%100', value: 4, category: 'Karlılık' },
          { id: 5, name: '%100+', value: 2, category: 'Karlılık' },

        ],
      }, {
        id: 16,
        label: 'İstatistiki Bölge',
        name: 'istatistikibölge',
        options: [
          { id: 1, name: 'Düzey 1 İstatistiki Bölge', value: 1, category: 'İstatistiki Bölge' },
          { id: 2, name: 'Düzey 2 İstatistiki Bölge', value: 2, category: 'İstatistiki Bölge' },
          { id: 3, name: 'Düzey 3 İstatistiki Bölge', value: 3, category: 'İstatistiki Bölge' },
        ],
      }, {
        id: 17,
        label: 'Ar-Ge Projesi Tamamlamış Olma Durumu',
        name: 'argeTamamlama',
        options: [
          { id: 1, name: 'Evet', value: 1, category: 'Ar-Ge Projesi Tamamlamış Olma Durumu' },
          { id: 2, name: 'Hayır', value: 2, category: 'Ar-Ge Projesi Tamamlamış Olma Durumu' },
        ],
      },
      {
        id: 18,
        label: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu',
        name: 'argeYurutme',
        options: [
          { id: 1, name: 'Evet', value: 1, category: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu' },
          { id: 2, name: 'Hayır', value: 2, category: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu' },
        ],
      },

      {
        id: 19,
        label: 'İthal Edilen Ürünlerin GTİP’leri',
        name: 'ithalgtip',
        options: [
          { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
          { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
          { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
          { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
          { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
          { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
          { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
          { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
          { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
          { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
          { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
          { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
          { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
          { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
          { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
          { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
          { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
          { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
          { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
          { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
          { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
          { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
          { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
          { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
          { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
        ],
      },
      {
        id: 19,
        label: 'İhraç Edilen Ürünlerin GTİP’leri',
        name: 'ihracgtip',
        options: [
          { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
          { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
          { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
          { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
          { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
          { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
          { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
          { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
          { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
          { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
          { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
          { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
          { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
          { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
          { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
          { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
          { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
          { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
          { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
          { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
          { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
          { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
          { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
          { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
          { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
        ],
      },

    ];
  }
}

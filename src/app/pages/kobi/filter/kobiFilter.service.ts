import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
    public selectedFilters: any[] = [];
    getKobiFilter() {
      return [
          {
            id: 1,
            label:'Sektör',
            name: 'sektor',
            options: [
              { id: 1, name: 'Gıda', value: 1, category: 'Sektör',sektor:'gida' },
              { id: 2, name: 'İnşaat', value: 2, category: 'Sektör',sektor:'insaat' },
              { id: 3, name: 'Tekstil', value: 3, category: 'Sektör',sektor:'tekstil' },
              { id: 4, name: 'Kozmetik', value: 4, category: 'Sektör',sektor:'kozmetik' },
              { id: 5, name: 'Teknoloji', value: 5, category: 'Sektör',sektor:'teknoloji' },
              { id: 6, name: 'Hububat (Tahıl)', value: 6, category: 'Sektör',sektor:'hububat' },
            ],
          },
          {
            id: 2,
            label:'İşletme Tipi',
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
            label:'Sektör ve Belgeler',
            name: 'svb',
            options: [
              { id: 1, name: 'ISO 9001 - Kalite Yönetim Sistemi', value: 1, type:'sector', category: 'Sertifikasyonlar ve Belgeler' },
              { id: 2, name: 'ISO 13485 - Tıbbi Cihazlar Kalite Yönetim Sistemi', value: 2, category: 'Sertifikasyonlar ve Belgeler' },
              { id: 3, name: 'ISO 14001 - Çevre Yönetim Sistemi', value: 3, category: 'Sertifikasyonlar ve Belgeler' },
              { id: 4, name: 'ISO 15378 - İlaçlar için birincil ambalaj malzemeleri', value: 4, category: 'Sertifikasyonlar ve Belgeler' },
            ],
          },
          {
            id: 4,
            label:'İşletme Faaliyet Yeri',
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
            label:'Toplam Personel',
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
      ];
  }
  
  updateSelectedFilters(selectedFilters: any[]) {
    this.selectedFilters = selectedFilters;
  }
}

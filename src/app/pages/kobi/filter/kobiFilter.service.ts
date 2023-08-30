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
          label:'',
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
      ];
      
  }
  updateSelectedFilters(selectedFilters: any[]) {
    this.selectedFilters = selectedFilters;
  }
}

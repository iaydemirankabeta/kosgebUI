import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandevuService {

  randevular: any[] = [];

  getRandevuVerileri(): any[] {
    // Örnek randevu verileri oluşturun
    const randevuVerileri = [
      { tarih: new Date(2023, 9, 23), saat: '10:00', dolu: true },
      { tarih: new Date(2023, 9, 23), saat: '11:00', dolu: true },
      { tarih: new Date(2023, 9, 23), saat: '12:00', dolu: true },
      { tarih: new Date(2023, 9, 24), saat: '14:00', dolu: true },
      // Daha fazla randevu verisi ekleyebilirsiniz
    ];
  
    return randevuVerileri;
  }

  randevuOlustur(selectedDate: Date) {
    // Seçilen tarih ve saat ile randevu oluşturma işlemleri burada yapılacak
    this.randevular.push({
      tarih: selectedDate,
      // Diğer randevu bilgileri
    });
  }
}

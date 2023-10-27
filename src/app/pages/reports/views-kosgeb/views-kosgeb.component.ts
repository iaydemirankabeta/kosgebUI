import { Component } from '@angular/core';
import { ViewsService } from './views.service';
import { delay, of } from 'rxjs';

// Simüle edilmiş servis
class FakeViewsService {
  getKobiRapor(selectedName: string, selectedDateRange: string, selectedSector: string) {
    // KOBİ raporunu simüle etmek için örnek veriler
    return of([
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-01',
        details: 'Ankabeta profilini görüntüledi.'
      },
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-02',
        details: 'Ankabeta profilini görüntüledi.'
      },
      {
        operationType: 'Arama',
        date: '2023-10-02',
        details: 'Ankabeta hakkında arama yaptı.'
      },
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-03',
        details: 'ABC Company profilini görüntüledi.'
      },
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-03',
        details: 'Ankabeta profilini görüntüledi.'
      },
      // Diğer örnek veriler buraya eklenebilir
    ]).pipe(delay(1000)); // Gerçek servis gibi bir gecikme ekleyebilirsiniz
  }

  getBiRapor(selectedName: string, selectedDateRange: string, selectedSector: string) {
    // Bİ raporunu simüle etmek için örnek veriler
    return of([
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-01',
        details: 'Ankabeta profilini görüntüledi.'
      },
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-02',
        details: 'Ankabeta profilini görüntüledi.'
      },
      {
        operationType: 'Arama',
        date: '2023-10-02',
        details: 'Ankabeta hakkında arama yaptı.'
      },
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-03',
        details: 'ABC Company profilini görüntüledi.'
      },
      {
        operationType: 'Profil Görüntüleme',
        date: '2023-10-03',
        details: 'Ankabeta profilini görüntüledi.'
      },
      // Diğer örnek veriler buraya eklenebilir
    ]).pipe(delay(1000)); // Gerçek servis gibi bir gecikme ekleyebilirsiniz
  }

  getKobiOptions(): string[] {
    // KOBİ seçeneklerini simüle etmek için örnek veriler
    return ['KOBİ Seçenek 1', 'KOBİ Seçenek 2', 'KOBİ Seçenek 3'];
  }

  getBiOptions(): string[] {
    // Bİ seçeneklerini simüle etmek için örnek veriler
    return ['Bİ Seçenek 1', 'Bİ Seçenek 2', 'Bİ Seçenek 3'];
  }
}

@Component({
  selector: 'app-views-kosgeb',
  templateUrl: './views-kosgeb.component.html',
  styleUrls: ['./views-kosgeb.component.scss'],
  providers: [
    // Servis yerine fake servisi kullan
    { provide: ViewsService, useClass: FakeViewsService }
  ]
})
export class ViewsKOSGEBComponent {
  selectedType: string = '';
  selectedName: string = '';
  startDate: string = ''; // Başlangıç tarihi için alan
  endDate: string = '';   // Bitiş tarihi için alan
  selectedSector: string = '';
  reportData: any[] = [];
  kobiOptions: string[] = ['KOBİ Seçenek 1', 'KOBİ Seçenek 2', 'KOBİ Seçenek 3']; // Örnek KOBİ seçenekleri
  biOptions: string[] = ['Bİ Seçenek 1', 'Bİ Seçenek 2', 'Bİ Seçenek 3']; // Örnek Bİ seçenekleri

  constructor(private raporService: ViewsService) {}

  generateReport() {
    if (this.selectedType === 'kobi') {
      this.raporService.getKobiRapor(this.selectedName, this.startDate, this.endDate, this.selectedSector)
        .subscribe((data) => {
          this.reportData = data;
        });
    } else if (this.selectedType === 'bi') {
      this.raporService.getBiRapor(this.selectedName, this.startDate, this.endDate, this.selectedSector)
        .subscribe((data) => {
          this.reportData = data;
        });
    }
  }
}

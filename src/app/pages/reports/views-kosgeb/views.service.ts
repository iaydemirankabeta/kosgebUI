import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  private mockKobiData = [
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
    // Diğer KOBİ raporu verileri burada oluşturulabilir.
  ];
  
  private mockBiData = [
    {
      operationType: 'Profil Görüntüleme',
      date: '2023-10-01',
      details: 'Ankabeta profilini görüntüledi.'
    },
    {
      operationType: 'Profil Görüntüleme',
      date: '2023-10-03',
      details: 'Bİ-Örnek profilini görüntüledi.'
    },
    {
      operationType: 'Arama',
      date: '2023-10-03',
      details: 'Bİ-Örnek hakkında arama yaptı.'
    },
    {
      operationType: 'Profil Görüntüleme',
      date: '2023-10-04',
      details: 'Bİ-XYZ profilini görüntüledi.'
    },
    {
      operationType: 'Arama',
      date: '2023-10-04',
      details: 'Bİ-XYZ hakkında arama yaptı.'
    },
    // Diğer Bİ raporu verileri burada oluşturulabilir.
  ];
  
  getKobiRapor(selectedName: string, startDate: string, endDate: string, selectedSector: string): Observable<any[]> {
    // API isteği yerine mock verileri dönüyoruz.
    return of(this.mockKobiData);
  }
  
  getBiRapor(selectedName: string, startDate: string, endDate: string, selectedSector: string): Observable<any[]> {
    // API isteği yerine mock verileri dönüyoruz.
    return of(this.mockBiData);
  }
}

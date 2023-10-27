import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileViewsService {

  private mockProfilGoruntulemeler: any[] = [
    { firmaAdi: 'Firma 1', goruntulemeTarihi: '2023-10-27' },
    { firmaAdi: 'Firma 2', goruntulemeTarihi: '2023-10-26' },
    { firmaAdi: 'Firma 3', goruntulemeTarihi: '2023-10-24' },
    { firmaAdi: 'Firma 4', goruntulemeTarihi: '2023-10-23' },
    { firmaAdi: 'Firma 5', goruntulemeTarihi: '2023-10-22' },
    // Diğer mock verileri buraya ekleyin
  ];

  constructor() { }

  getProfilGoruntulemeler(): Observable<any[]> {
    return of(this.mockProfilGoruntulemeler);
  }
  
}

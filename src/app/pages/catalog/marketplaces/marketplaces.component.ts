import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplaces',
  templateUrl: './marketplaces.component.html',
  styleUrls: ['./marketplaces.component.scss']
})
export class MarketplacesComponent {

  displayedColumns: string[] = ['TeklifId', 'CagriAdi', 'FirmaAdi', 'TeklifTarihi', 'TeklifStatusu'];
  marketplacesData: any[] = [
    {
      TeklifId: 1,
      CagriAdi: 'Mağaza 1',
      FirmaAdi: 'Firma 1',
      TeklifTarihiChecked: true,
      TeklifStatusu: 'Aktif'
    },
    {
      TeklifId: 2,
      CagriAdi: 'Mağaza 2',
      FirmaAdi: 'Firma 2',
      TeklifTarihiChecked: false,
      TeklifStatusu: 'Pasif'
    },
    {
      TeklifId: 3,
      CagriAdi: 'Mağaza 3',
      FirmaAdi: 'Firma 3',
      TeklifTarihiChecked: true,
      TeklifStatusu: 'Aktif'
    }
    // Diğer örnek verileri buraya ekleyebilirsiniz.
  ];

}

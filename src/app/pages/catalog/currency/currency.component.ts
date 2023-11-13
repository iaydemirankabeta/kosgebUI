import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {

  currencyList = [
    {
      country: "Türkiye",
      currency: "Türk Lirası",
      code: "₺"
    },
    {
      country: "ABD",
      currency: "Amerikan Doları",
      code: "$"
    },
    {
      country: "€",
      currency: "Euro",
      code: "€"
    },
    // Diğer ülkeler ve para birimleri
  ];
  selectedCurrency: string = '₺'; // Başlangıçta TRY olarak varsayalım

  @Output() currencySelected = new EventEmitter<string>();

  // Para birimi seçildiğinde bu yöntemi çağırın
  onCurrencySelected() {
    this.currencySelected.emit(this.selectedCurrency);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

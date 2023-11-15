import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService<T> {
  items: T[]; // Sayfalanan öğelerin bulunduğu dizi
  currentPage: number = 1; // Şu anki sayfa numarası
  itemsPerPage: number = 30; // Sayfa başına öğe sayısı

  get paginatedItems(): T[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  setPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.getTotalPages()) {
      this.currentPage = pageNumber;
    }
  }

  setItemsPerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1; // Sayfa boyutu değiştiğinde şu anki sayfa sıfırlanır
  }
}

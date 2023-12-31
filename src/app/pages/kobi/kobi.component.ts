import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FilterService } from './filter/kobiFilter.service';
import { KobiService } from './kobi.service';
import { PaginationService } from '../service/pagination.service';
import { FilterComponent } from './filter/filter.component';
import { filter } from 'rxjs';


@Component({
  selector: 'app-kobi',
  templateUrl: './kobi.component.html',
  styleUrls: ['./kobi.component.scss']
})
export class KobiComponent {

filterOptions: any[];
  constructor(private filterService: FilterService,private KobiService:KobiService// Adjust the type accordingly
  ) {
  } // Servisi enjekte edin

  paginationService: PaginationService<any> = new PaginationService<any>();


  selectedFiltersList: { filterName: string, selectedValue: any }[] = [];
  businessList:any = [];

  filters: any[] ;
  selectedFilters: { [key: number]: any } = {};
  
  

  ngOnInit(): void {
    this.businessList = this.KobiService.fakeBusinesses;
    
        this.filters = this.filterService.getKobiFilter();
    
    this.initializeSelectedFilters();
    this.paginationService.items = this.businessList; // Set the items in the pagination service
    this.paginationService.setItemsPerPage(21); // Set the items per page
  }

  get paginatedBusinessList(): any[] {
    return this.paginationService.paginatedItems;
  }

  getRange(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Use pagination service to handle page change
  onPageChange(pageNumber: number): void {
    this.paginationService.setPage(pageNumber);
  }

  initializeSelectedFilters(): void {
    for (const filter of this.filters) {
      this.selectedFilters[filter.id] = null;
    }

  }

  emitFilterChanges(selectedFilters: any): void {
    // Seçili filtreleri sıfırla
    this.selectedFiltersList = [];
  
    // Filtrelenmiş işletmeleri güncelle ve sayfalandır
    this.paginationService.items = this.KobiService.fakeBusinesses.filter((business: any) => {
      for (let filterId in selectedFilters) {
        if (filterId !== 'konum') {
          if (selectedFilters[filterId] !== null) {
            const selectedValue = +selectedFilters[filterId];
            if (business[filterId] !== selectedValue) {
              return false;
            } else {
              // Seçili filtreleri listeye ekle
              const filterInfo = this.filters.find(filter => filter.id === parseInt(filterId));
              if (filterInfo) {
                this.selectedFiltersList.push({ filterName: filterInfo.name, selectedValue });
              }
            }
          }
        }
      }
      return true; // Include business if all selected filters match
    });
  
    // Sayfayı ilk sayfaya ayarla
    this.paginationService.setPage(1);
  }
  
  

  modalConfig: ModalConfig = {
    modalTitle: "Şirket Bilgileri",
    closeButtonLabel:'Kapat'

  };
  raporModalConfig: ModalConfig = {
    modalTitle: "Rapor Bilgileri",
    closeButtonLabel:'Kapat'
  };

  
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('raporModal') private raporModalComponent: ModalComponent;

  async openModal() {
    return await this.modalComponent.open();
  }
  async openRaporModal(){
    return await this.raporModalComponent.open();
  }

  modalCompareConfig: ModalConfig = {
    modalTitle : "Karşılaştırma",
    hideCloseButton: () => true,
  }

  @ViewChild('compare') private compare:ModalComponent

  selectedItems: number[] = [];

  isSelected(item: number): boolean {
    return this.selectedItems.includes(item);
  }

  toggleSelected(item: number) {

    if (this.isSelected(item)) {
      // Öğe zaten seçili, bu yüzden seçimden kaldır
      this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem !== item);
        
    } 
    else if (this.selectedItems.length < 2) {
      // Maksimum 2 öğe seçilebilir, eğer şu an 2 öğe seçili değilse seçimi ekle
      this.selectedItems.push(item);
        if (this.selectedItems.length == 2)
      {
        this.compare.open();
        return false;
      }  
    }else{
      alert("Karşılaştırmak için maksimum 2 KOBİ seçilebilir")

    }
  }

  closeModal(){
    return this.modalComponent.close();
  }

  selectedSortOption = 'recommended'; // Başlangıçta önerilenler sıralı olsun.

  // Sıralama işlevi
  sortBusinessListAlphabetically() {
    this.paginationService.items.sort((a: any, b: any) => {
      if (this.selectedSortOption === 'az') {
        return a.name.localeCompare(b.name);
      } else if (this.selectedSortOption === 'za') {
        return b.name.localeCompare(a.name);
      }

      // Diğer sıralama seçenekleri burada eklenebilir.
    });
  }

  // Açılır listedeki seçenek değiştikçe tetiklenecek olay işleyicisi
  onSortChange(event: any) {
    this.selectedSortOption = event.target.value;

    this.sortBusinessListAlphabetically();
  }

}

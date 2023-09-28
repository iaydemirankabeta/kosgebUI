import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FilterService } from './filter/kobiFilter.service';
import { KobiService } from './kobi.service';
import { FilterComponent } from './filter/filter.component';
import { filter } from 'rxjs';


@Component({
  selector: 'app-kobi',
  templateUrl: './kobi.component.html',
  styleUrls: ['./kobi.component.scss']
})
export class KobiComponent {

filterOptions: any[];
  constructor(private filterService: FilterService,private KobiService:KobiService) {
  } // Servisi enjekte edin

  selectedFiltersList: { filterName: string, selectedValue: any }[] = [];
  businessList:any = [];

  filters: any[] ;
  selectedFilters: { [key: number]: any } = {};
  
  

  ngOnInit(): void {
    this.businessList = this.KobiService.fakeBusinesses;
    
        this.filters = this.filterService.getKobiFilter();
    
    this.initializeSelectedFilters();
  }

  initializeSelectedFilters(): void {
    for (const filter of this.filters) {
      this.selectedFilters[filter.id] = null;
    }

  }

  emitFilterChanges(selectedFilters: any): void {
    
    // Seçili filtreleri sıfırla
    this.selectedFiltersList = [];

    this.businessList = this.KobiService.fakeBusinesses.filter((business: any) => {
      for (let filterId in selectedFilters) {
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
      return true; // Include business if all selected filters match
    });

  }
  

  modalConfig: ModalConfig = {
    modalTitle: "Şirket Bilgileri",
    closeButtonLabel:'Kapat'

  };

  
  @ViewChild('modal') private modalComponent: ModalComponent;
  async openModal() {
    return await this.modalComponent.open();
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

}

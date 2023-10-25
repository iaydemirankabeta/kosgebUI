import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FilterService } from './filter/kobiFilter.service';
import { KobiService } from './kobi.service';
import { FilterComponent } from './filter/filter.component';
import { filter } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.scss']
})
export class BiComponent {
  form: FormGroup;

  filterOptions: any[];
  router: any;
  constructor(private filterService: FilterService,private KobiService:KobiService,private routerr: Router,private fb: FormBuilder) {

    this.form = this.fb.group({
      meetingdescription: ['', Validators.required],
    });  
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
        if (filterId != 'konum'){
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

  }
  

  modalConfig: ModalConfig = {
    modalTitle: "Şirket Bilgileri",
    closeButtonLabel:'Kapat'

  };
  raporModalConfig: ModalConfig = {
    modalTitle: "Rapor Bilgileri",
    closeButtonLabel:'Kapat'
  };
  meetingModalConfig: ModalConfig = {
    modalTitle: "Görüşme Açıklaması",
    closeButtonLabel:'Kapat'
  }
  successModalConfig: ModalConfig = {
    modalTitle: "",
    closeButtonLabel:'Kapat',
    onClose:() => this.closeMeetingModal(),
  }
 
  
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('raporModal') private raporModalComponent: ModalComponent;
  @ViewChild('meetingModal') private meetingModalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;

  closeMeetingModal(){
    this.meetingModalComponent.close();
    this.form.reset();
    return true;
  }
  async openModal() {
    return await this.modalComponent.open();
  }
   denemeModal() {
    return  this.meetingModalComponent.close();
  }
  async openRaporModal(){
    return await this.raporModalComponent.open();
  }
  async openMeetingModal(){
    return await this.meetingModalComponent.open();
  }
 async openSuccessModal(){
  return await this.modalSuccessComponent.open();
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
  characterCount: number = 0;
  updateCharacterCount() {
    const meetingDescriptionControl = this.form.get('meetingdescription');
    if (meetingDescriptionControl) {
      this.characterCount = meetingDescriptionControl.value.length;
    }
  }

  selectedSortOption = 'recommended'; // Başlangıçta önerilenler sıralı olsun.

  // Sıralama işlevi
  sortBusinessListAlphabetically() {
    this.businessList.sort((a: any, b: any) => {
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

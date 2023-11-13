import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { DataService } from 'src/app/_fake/fake-data';
import { Company } from 'src/app/models/Company.model';
import { AuthService, UserModel, UserType } from 'src/app/modules/auth';
import { KobiService } from '../kobi/kobi.service';
import { Business } from '../kobi/business.model';
import { FilterService } from './filter/kobiFilter.service';

@Component({
  selector: 'app-kobi-cozumleri',
  templateUrl: './kobi-cozumleri.component.html',
  styleUrls: ['./kobi-cozumleri.component.scss']
})
export class KobiCozumleriComponent {
  
  tabs = [
    { id: '1', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
    { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
    { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  ];

  filterOptions: any[];
  filters: any[] ;
  trigClick : Business[]

  selectedFilters: { [key: number]: any } = {};
  selectedFiltersList: { filterName: string, selectedValue: any }[] = [];
  user$: Observable<UserType>;

  activeTabIndex = 0;
  modalTitle = '';
  showOfferModal = false;
  isList=true;
  modalConfig: ModalConfig = {
    modalTitle: this.modalTitle,
    closeButtonLabel:'Kapat'

  };
  modalOfferConfig: ModalConfig = {
    modalTitle: "Görüşme Talebi",
    closeButtonLabel:'Gönder',
    hideCloseButton:() => true
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('offermodal') private modalOfferComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;
  form: FormGroup;
  targetValue:number;
  isEnabledError:boolean = false;
  user :UserModel|undefined

  constructor(private fb: FormBuilder,private auth:AuthService,private dataService:DataService,private kobiService:KobiService,private filterService:FilterService) {
    this.user = auth.currentUserValue;
    this.trigClick = kobiService.fakeBusinesses.filter((x:any) => x.call);

    this.form = this.fb.group({
      firmAuthority: ['', Validators.required],
      offerTitle: ['', Validators.required],
      offerDescription: ['', Validators.required],
      offerDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {    
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

    this.trigClick = this.kobiService.fakeBusinesses.filter((business: any) => {  
      for (let filterId in selectedFilters) {
        if (selectedFilters[filterId] !== null && business.call) {
          const selectedValue = +selectedFilters[filterId];
          if (business[filterId] !== selectedValue && business.call) {
            return false; 
          } else {
            // Seçili filtreleri listeye ekle
            const filterInfo = this.filters.find(filter => filter.id === parseInt(filterId));
            if (filterInfo && business.call) {
              this.selectedFiltersList.push({ filterName: filterInfo.name, selectedValue });
            }
          }
        }
      }
      if(business.call)
        return true; // Include business if all selected filters match
      else
        return false;
    });

  }

  onSubmit() {
    console.log(this.form.invalid,this.form.value)
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const formData = new FormData();
  
      formData.append('firmAuthority', this.form.value.firmAuthority);
      formData.append('offerTitle', this.form.value.offerTitle);
      formData.append('offerDescription', this.form.value.offerDescription);
      formData.append('offerDate', this.form.value.offerDate);

      this.isEnabledError=false;
      this.modalOfferComponent.close(); 
      this.form.reset();     
      this.openSuccessModal()
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
    }
  }
  async openModal(event:any) {
    this.targetValue = event ;  
    this.showTabContent(this.targetValue);
    return await this.modalComponent.open();
    
  }

  openSuccessModal(){
    this.modalSuccessComponent.open();
    return true;
  }

   openOfferModal() {
    this.modalOfferComponent.open();
  }



  listOrCard(isList:boolean){
    console.log(typeof(isList),isList)
    this.isList = isList
  }
  
  showTabContent(index: number) {
    this.modalConfig ={
      modalTitle : ''+this.tabs[index].label+'',
    } 
    
    this.activeTabIndex = index;
    
  }
  
}

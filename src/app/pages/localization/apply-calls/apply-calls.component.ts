import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/_fake/fake-data';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { Company } from 'src/app/models/Company.model';
import { AuthService, UserModel, UserType } from 'src/app/modules/auth';
import { KobiService } from '../../kobi/kobi.service';
import { Business } from '../../kobi/business.model';
import { FilterService } from './filter/kobiFilter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-calls',
  templateUrl: './apply-calls.component.html',
  styleUrls: ['./apply-calls.component.scss']
})
export class ApplyCallsComponent {
  filterOptions: any[];
  form: FormGroup;
  selectedCompany:Company | null = null
  user$: Observable<UserType>;
  trigClick : Business[]
  filters: any[] ;
  selectedFilters: { [key: number]: any } = {};
  selectedFiltersList: { filterName: string, selectedValue: any }[] = [];
  constructor(private auth:AuthService,private dataService:DataService,private kobiService:KobiService,private filterService:FilterService,private fb: FormBuilder) {
    this.user = auth.currentUserValue;
    this.trigClick = kobiService.fakeBusinesses.filter((x:any) => x.call);
    this.form = this.fb.group({
      firmAuthority: ['', Validators.required],
      offerTitle: ['', Validators.required],
      offerDescription: ['', Validators.required],
    });  }

  tabs = [
    { id: '1', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
    { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
    { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  ];

  activeTabIndex = 0;
  modalTitle = '';
  user :UserModel|undefined
  modalConfig: ModalConfig = {
    modalTitle: this.modalTitle,
    closeButtonLabel:'Kapat'

  };
  modalOfferConfig: ModalConfig = {
    modalTitle: "Başvur",
    closeButtonLabel:'Gönder',
    hideCloseButton:() => true
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;
  @ViewChild('offermodal') private modalOfferComponent: ModalComponent;
  isEnabledError:boolean=false
  targetValue:number;
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

  openSuccessModal(){
    this.modalSuccessComponent.open();
    return true;
  }

   openOfferModal() {
    this.modalOfferComponent.open();
  }
  async openModal(event:any) {
    this.targetValue = event ;  
    this.showTabContent(this.targetValue);
    return await this.modalComponent.open();
    
  }
  
  showTabContent(index: number) {
    this.modalConfig ={
      modalTitle : ''+this.tabs[index].label+'',
    } 
    
    this.activeTabIndex = index;
    
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

  currentView = 'grid';

  toggleView(view: string) {
    this.currentView = view;
  }


  modalSSSConfig: ModalConfig = {
    modalTitle: 'Sıkça Sorulan Sorular',
    closeButtonLabel:'Kapat'

  };

  @ViewChild('modalSSS') private modalSSSComponent: ModalComponent;

  sss(){
      this.modalSSSComponent.open();
  }

  modalaboutSSConfig: ModalConfig = {
    modalTitle: 'Çağrı Hakkında Sorular',
    closeButtonLabel:'Kapat'

  };

  @ViewChild('aboutSS') private modalaboutssComponent: ModalComponent;

  aboutss(){
      this.modalaboutssComponent.open();
  }
  
}

import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FilterService } from './filter/kobiFilter.service';
import { FilterComponent } from './filter/filter.component';
import { filter } from 'rxjs';

interface Business {
  id: number;
  name: string;
  sektor: string;
  category: string;
  employeeCount: string;
  location: string;
  company: string;
  chart: boolean;
  group: boolean;
  users: boolean;
  pin: boolean;
  companyInfo: {
    name: string;
    // Diğer özellikler
    description: string;
  }[];
}



const fakeBusinesses = [
  { id: 1, name: 'Motor Parçaları',sektor: '1', category: 'Gıda', tp: '1', ify: '1', company: 'Suziki',chart:true,group:true,users:false,pin:true,
  companyInfo:[
    {name:'Hakkımızda',ciro:'2.5M',worker:'+50 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Suzukinin Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ]
},
  { id: 2, name: 'Yedek Parça Teminatı',sektor: '1', category: 'inşaat', tp: '1', ify: '', company: 'BMW',chart:false,group:false,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'2M',worker:'+50 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'BMW Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 3, name: 'Motor',sektor: '2', category: 'Kozmetik', tp: '2', ify: '3', company: 'Wolkswagen',chart:false,group:false,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'5M',worker:'+20 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Wolkswagen Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 4, name: 'Lastik Teminatı',sektor: '3', category: 'Teknoloji', tp: '3', location: 'Ankara', company: 'Petlas',chart:true,group:true,users:false,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'1.5M',worker:'+w0 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Renault Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 5, name: 'Tampon',sektor: '2', category: 'Teknoloji', tp: '3', ify: '4', company: 'Fiat',chart:true,group:false,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'2.5M',worker:'+80 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Fiat Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 6, name: 'Çözüm Önerisi',sektor: '4', category: 'İnşaat', tp: '3', ify: '2', company: 'Hyundai',chart:false,group:true,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'2.5M',worker:'+10 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Hyundai Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
];

@Component({
  selector: 'app-kobi',
  templateUrl: './kobi.component.html',
  styleUrls: ['./kobi.component.scss']
})
export class KobiComponent {

filterOptions: any[];
  constructor(private filterService: FilterService) {} // Servisi enjekte edin

  selectedFiltersList: { filterName: string, selectedValue: any }[] = [];

businessList = fakeBusinesses;

  filters: any[] ;
  selectedFilters: { [key: number]: any } = {};
  
  

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

    this.businessList = fakeBusinesses.filter((business: any) => {
      for (let filterId in selectedFilters) {
        if (selectedFilters[filterId] !== null) {
          const selectedValue = selectedFilters[filterId];
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
    console.log(this.selectedFiltersList);
    console.log(this.businessList);
  }
  

  



  modalConfig: ModalConfig = {
    modalTitle: "Şirket Bilgileri",
    closeButtonLabel:'Kapat'

  };

  
  @ViewChild('modal') private modalComponent: ModalComponent;
  async openModal() {
    return await this.modalComponent.open();
  }
  


}

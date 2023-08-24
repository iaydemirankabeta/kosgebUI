import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';



const fakeBusinesses = [
  { id: 1, name: 'Çözüm Önerisi', company: 'Suziki',category:'Araba Parçası',chart:true,group:true,users:false,pin:true,
  companyInfo:[
    {name:'Hakkımızda',ciro:'2.5M',worker:'+50 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Suzukinin Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ]
},
  { id: 2, name: 'Çözüm Önerisi', company: 'BMW',category:'Araba Parçası',chart:false,group:false,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'2M',worker:'+50 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'BMW Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 2, name: 'Çözüm Önerisi', company: 'Wolkswagen',category:'Araba Parçası',chart:false,group:false,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'5M',worker:'+20 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Wolkswagen Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 2, name: 'Çözüm Önerisi', company: 'Renault',category:'Araba Parçası',chart:true,group:true,users:false,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'1.5M',worker:'+w0 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Renault Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 2, name: 'Çözüm Önerisi', company: 'Fiat',category:'Araba Parçası',chart:true,group:false,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'2.5M',worker:'+80 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Fiat Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
  { id: 2, name: 'Çözüm Önerisi', company: 'Hyundai',category:'Araba Parçası',chart:false,group:true,users:true,pin:true,companyInfo:[
    {name:'Hakkımızda',ciro:'2.5M',worker:'+10 bin ',code:'gosterge',location:'İstanbul',sektor:'Otomobil',description:'Hyundai Dünyanın en büyük otomobil üreticilerinden biri haline gelmesi 100 yıldan uzun bir zamanda gerçekleşmiştir. Bu yıllarda şirket, kendisini tercih edenlerin ve kendisine güvenenlerin günlük yaşamlarını önemli ölçüde kolaylaştıran yenilikçi teknolojiler ve kaliteli otomobil modelleri sunarak kendisine görülen değere layık olduğunu ispatlamıştır.'}
  ] },
];

@Component({
  selector: 'app-kobi',
  templateUrl: './kobi.component.html',
  styleUrls: ['./kobi.component.scss']
})
export class KobiComponent {
  businessList = fakeBusinesses;
  

  modalConfig: ModalConfig = {
    modalTitle: "Şirket Bilgileri",
    closeButtonLabel:'Kapat'

  };

  
  @ViewChild('modal') private modalComponent: ModalComponent;
  async openModal() {
    return await this.modalComponent.open();
  }
  


}

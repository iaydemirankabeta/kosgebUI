import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

export interface ConversationElement {
  id:string,
  firm: string;
  firmAuthority: string;

}
const ELEMENT_DATA: ConversationElement[] = [
  {id:"X Çağrısı",firm:"X şirketi", firmAuthority:"Tufan Yazıcı"},
  {id:"Y Çağrısı",firm:"Y şirketi", firmAuthority:"Gizem Turanlı"},
  {id:"Z Çağrısı",firm:"Z şirketi", firmAuthority:"Onur Yaşar"},
];

@Component({
  selector: 'app-submitted-offers',
  templateUrl: './submitted-offers.component.html',
  styleUrls: ['./submitted-offers.component.scss']
})
export class SubmittedOffersComponent {
  displayedColumns: string[] = ['Cagri', 'GorusulecekFirma', 'GorusulecekFirmaYetkilisi',"Aksiyon"];
  dataSource = ELEMENT_DATA;
  data = [
    {id:1, title:'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',
    badget:'Enerji ',badgetColor:'#27ae60',tags:'#ActiveNoiceCanelling #ANC #GürültüEngelleme #GürültüKontrolü',
    url:[
      {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
      {name:'Teknoloji Tedarikçisinden Beklentisi'},
      {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
      {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
    ],
    status:"Açık"
  },
  {id:2, title:'Kozmetik Teknoloji Çözümler',badget:'Kozmetik',badgetColor:'#8e44ad',tags:'#cosmetic,#technology,#application #GürültüEngelleme #GürültüKontrolü',
  url:[
    {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
    {name:'Teknoloji Tedarikçisinden Beklentisi'},
    {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
    {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
  ],
  status:"Teklif Sürecinde"
  },
  {id:3, title:'Tekstil Ürün İthalatı',badget:'Tekstil',badgetColor:'#c0392b',tags:'#tekstile,#product,#ithalat,#GürültüEngelleme #GürültüKontrolü',
  url:[
  {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
  {name:'Teknoloji Tedarikçisinden Beklentisi'},
  {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
  {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
  ],
  status:"İptal Edildi"
  }
  ]
  trigClick = this.data;
  tabs = [
    { id: '1', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
    { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
    { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  ];
  

  activeTabIndex = 0;
  modalTitle = '';
  showOfferModal = false;
  isList=true;
  statuses = ["Açık","Teklif Sürecinde", "Değerlendirme Aşamasında","Müzakere Aşamasında","Onay Bekliyor","Tamamlandı","Reddedildi","İptal Edildi","Süresi Doldu"]
  modalConfig: ModalConfig = {
    modalTitle: this.modalTitle,
    closeButtonLabel:'Kapat'

  };
  modalOfferConfig: ModalConfig = {
    modalTitle: "Teklif İste",
    closeButtonLabel:'Teklif İste'

  };
  modalAcceptConfig: ModalConfig = {
    modalTitle: "Teklif Kabul Edildi",
    closeButtonLabel:'Tamam'

  };
  modalDetailsConfig: ModalConfig = {
    modalTitle: "Teklif Talebi Detayı",
    closeButtonLabel:'Kapat'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('detailmodal') private detailModalComponent: ModalComponent;
  @ViewChild('acceptmodal') private acceptModalComponent: ModalComponent;

  
  targetValue:number;
  
  async openModal(event:any) {
    this.targetValue = event ;  
    this.showTabContent(this.targetValue);
    return await this.modalComponent.open();
    
  }


  async openDetailModal(){
    this.detailModalComponent.open()
  }
  async openAcceptModal(){
    this.acceptModalComponent.open()
  }

  onFilterChange(event:any){
    this.trigClick = this.data.filter(x => x.status == event.target.value)
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


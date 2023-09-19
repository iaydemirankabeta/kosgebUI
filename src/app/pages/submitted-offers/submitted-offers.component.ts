import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';

export interface ConversationElement {
  id:string,
  firm: string;
  firmAuthority: string;
  solutionName:string;
}
const ELEMENT_DATA: ConversationElement[] = [
  {id:"X Çağrısı",firm:"X şirketi", firmAuthority:"Tufan Yazıcı",solutionName:"Gürültü Engelleyici Malzeme Tedariği"},
  {id:"Y Çağrısı",firm:"Y şirketi", firmAuthority:"Gizem Turanlı",solutionName:"Kozmetik Ürünlerin Tedariği"},
];

@Component({
  selector: 'app-submitted-offers',
  templateUrl: './submitted-offers.component.html',
  styleUrls: ['./submitted-offers.component.scss']
})
export class SubmittedOffersComponent {
  displayedColumns: string[] = ['TeklifId', 'CagrıAdi', 'FirmaAdi',"TeklifTarihi","TeklifStatusu"];
  displayedColumns2: string[] = ['CozumId', 'CozumAdi', 'FirmaAdi',"FirmaYetkilisi","YetkiliAjandasi"];
  dataSource = ELEMENT_DATA;
  data = [
    {id:1,callId:1, callName:'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',
    firmName:'X Firması ', offerDate:'23.09.2023',
    status:"Açık"
  },
  {id:2,callId:2, callName:'Kozmetik Teknoloji Çözümler',
  firmName:'Y Firması ', offerDate:'27.09.2023',
  status:"Değerlendirme Aşamasında"
}, 
{id:3,callId:3, callName:'Tekstil Ürün İthalatı',
firmName:'Z Firması ', offerDate:'24.09.2023',
status:"Onaylandı"
},
  ]
  trigClick = this.data;
  tabs = [
    { id: '1', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
    { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
    { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  ];
  user$: Observable<UserType>;
  activeTabIndex = 0;
  modalTitle = '';
  showOfferModal = false;
  isList=true;
  callId:string|null;
  constructor(private route: ActivatedRoute,private auth:AuthService){
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.route.params.subscribe(params => {
      const callId = params['callId'];
      // Fetch the product details using the product service
      if (callId) {
        this.callId = callId;
         this.trigClick = this.data.filter((element) => element.callId == callId);
        return this.trigClick
      } else {
        this.callId = null;
        
      }
    });
  }
  allOffers(){
    this.callId = null
    this.trigClick = this.data;
  }
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
  modalCreateMeetingConfig: ModalConfig = {
    modalTitle : "Toplantı Oluştur",
    hideCloseButton: () => true,
  }
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('detailmodal') private detailModalComponent: ModalComponent;
  @ViewChild('acceptmodal') private acceptModalComponent: ModalComponent;
  @ViewChild('meetingModal') private meetingModal:ModalComponent
  
  targetValue:number;
  selectedOffer:any = this.data[2];
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

  async createMeeting(item : any){
    this.selectedOffer = item
    this.meetingModal.open();
  }

  async closeMeetingModal(){
    this.meetingModal.close();
  }

}


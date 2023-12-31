import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent {
  
  isBoolean: boolean = true; // Varsayılan değeri true olarak ayarlayabilirsiniz
  user$: Observable<UserType>;

  trigClick = [
    {id:1, title:'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',
    totalOffer:'50',offer:'22',status:'Başvuru Toplama Aşamasında', 
    badget:'Enerji ',badgetColor:'#27ae60',tags:'#ActiveNoiceCanelling #ANC #GürültüEngelleme #GürültüKontrolü',
    piece:"200",
    url:[
      {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
      {name:'Teknoloji Tedarikçisinden Beklentisi'},
      {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
      {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
    ]
  },
    {id:2, title:'Kozmetik Teknoloji Çözümler',
    totalOffer:'70',offer:'56',status:'Revize Gerekli',piece:"500",
    badget:'Kozmetik',badgetColor:'#8e44ad',tags:'#cosmetic,#technology,#application #GürültüEngelleme #GürültüKontrolü',
    url:[
      {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
      {name:'Teknoloji Tedarikçisinden Beklentisi'},
      {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
      {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
    ]
  },
    {id:3, title:'Tekstil Ürün İthalatı',
    totalOffer:'40',offer:'7',status:'KOSGEB Onayı Bekleniyor',piece:"1000",
    badget:'Tekstil',badgetColor:'#c0392b',tags:'#tekstile,#product,#ithalat,#GürültüEngelleme #GürültüKontrolü',
    url:[
      {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
      {name:'Teknoloji Tedarikçisinden Beklentisi'},
      {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
      {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
],

}
  ]
  tabs = [
    { id: '1', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
    { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
    { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  ];

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
  

  activeTabIndex = 0;
  modalTitle = '';
  constructor(private auth:AuthService) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    console.log(this.user$)
  }
  modalConfig: ModalConfig = {
    modalTitle: this.modalTitle,
    closeButtonLabel:'Kapat'

  };
  @ViewChild('modal') private modalComponent: ModalComponent;

  targetValue:number;
  
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
  currentView = 'grid';

  toggleView(view: string) {
    this.currentView = view;
  }
  
}

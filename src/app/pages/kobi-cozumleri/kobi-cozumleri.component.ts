import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-kobi-cozumleri',
  templateUrl: './kobi-cozumleri.component.html',
  styleUrls: ['./kobi-cozumleri.component.scss']
})
export class KobiCozumleriComponent {
  trigClick = [
    {id:1, title:'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',
    badget:'Enerji ',badgetColor:'#27ae60',tags:'#ActiveNoiceCanelling #ANC #GürültüEngelleme #GürültüKontrolü',
    url:[
      {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
      {name:'Teknoloji Tedarikçisinden Beklentisi'},
      {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
      {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
    ]
  },
  {id:2, title:'Kozmetik Teknoloji Çözümler',badget:'Kozmetik',badgetColor:'#8e44ad',tags:'#cosmetic,#technology,#application #GürültüEngelleme #GürültüKontrolü',
  url:[
    {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
    {name:'Teknoloji Tedarikçisinden Beklentisi'},
    {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
    {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
  ]
},
{id:3, title:'Tekstil Ürün İthalatı',badget:'Tekstil',badgetColor:'#c0392b',tags:'#tekstile,#product,#ithalat,#GürültüEngelleme #GürültüKontrolü',
url:[
  {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
  {name:'Teknoloji Tedarikçisinden Beklentisi'},
  {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
  {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
]
}
  ]
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
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firmAuthority: ['', Validators.required],
      offerTitle: ['', Validators.required],
      offerDescription: ['', Validators.required],
      offerDate: ['', Validators.required],
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

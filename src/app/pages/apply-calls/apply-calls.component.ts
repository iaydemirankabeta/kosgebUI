import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-apply-calls',
  templateUrl: './apply-calls.component.html',
  styleUrls: ['./apply-calls.component.scss']
})
export class ApplyCallsComponent {
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
  
}

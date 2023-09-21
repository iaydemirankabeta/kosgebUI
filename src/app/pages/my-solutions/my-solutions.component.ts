import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-my-solutions',
  templateUrl: './my-solutions.component.html',
  styleUrls: ['./my-solutions.component.scss']
})
export class MySolutionsComponent {
  isBoolean: boolean = true; // Varsayılan değeri true olarak ayarlayabilirsiniz

  trigClick = [
    {id:1, title:'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',
    totalOffer:'50',offer:'22',isBoolean:'true',
    badget:'Enerji ',badgetColor:'#27ae60',tags:'#ActiveNoiceCanelling #ANC #GürültüEngelleme #GürültüKontrolü',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ex risus. Proin lobortis lacus diam, sit amet dignissim elit sodales ac. Fusce eu hendrerit arcu, et sodales augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent cursus interdum diam vitae luctus. Phasellus consequat eget tellus sed blandit. Sed bibendum vehicula lorem ac finibus. Pellentesque eget faucibus felis. Ut sagittis neque eu felis faucibus ullamcorper. Nunc a auctor risus, sit amet lobortis neque. Curabitur nisl eros, egestas eu vestibulum vitae, aliquam at elit. Nullam id efficitur libero, sed vehicula mi.",
    url:[
      {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
      {name:'Teknoloji Tedarikçisinden Beklentisi'},
      {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
      {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
    ],
    isActive:true,
  },
  {id:2, title:'Kozmetik Teknoloji Çözümler',
  totalOffer:'70',offer:'56',isBoolean:'false',
  badget:'Kozmetik',badgetColor:'#8e44ad',tags:'#cosmetic,#technology,#application #GürültüEngelleme #GürültüKontrolü',
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ex risus. Proin lobortis lacus diam, sit amet dignissim elit sodales ac. Fusce eu hendrerit arcu, et sodales augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent cursus interdum diam vitae luctus. Phasellus consequat eget tellus sed blandit. Sed bibendum vehicula lorem ac finibus. Pellentesque eget faucibus felis. Ut sagittis neque eu felis faucibus ullamcorper. Nunc a auctor risus, sit amet lobortis neque. Curabitur nisl eros, egestas eu vestibulum vitae, aliquam at elit. Nullam id efficitur libero, sed vehicula mi.",

  url:[
    {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
    {name:'Teknoloji Tedarikçisinden Beklentisi'},
    {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
    {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
  ],
  isActive:false,

},
{id:3, title:'Tekstil Ürün İthalatı',
totalOffer:'40',offer:'7',isBoolean:'false',
badget:'Tekstil',badgetColor:'#c0392b',tags:'#tekstile,#product,#ithalat,#GürültüEngelleme #GürültüKontrolü',
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ex risus. Proin lobortis lacus diam, sit amet dignissim elit sodales ac. Fusce eu hendrerit arcu, et sodales augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent cursus interdum diam vitae luctus. Phasellus consequat eget tellus sed blandit. Sed bibendum vehicula lorem ac finibus. Pellentesque eget faucibus felis. Ut sagittis neque eu felis faucibus ullamcorper. Nunc a auctor risus, sit amet lobortis neque. Curabitur nisl eros, egestas eu vestibulum vitae, aliquam at elit. Nullam id efficitur libero, sed vehicula mi.",

url:[
  {name:'Özel Sorun/İhtiyaç/Fırsat Alanı'},
  {name:'Teknoloji Tedarikçisinden Beklentisi'},
  {name:'Aradığı Teknoloji Tedarikçisi Özellikleri'},
  {name:'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri'},
],
isActive:false,

}
  ]
  tabs = [
    { id: '1', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
    { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
    { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  ];
  user$: Observable<UserType>;
  constructor(private auth:AuthService) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    console.log(this.user$)
  }

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
  currentView = 'grid';

  toggleView(view: string) {
    this.currentView = view;
  }
  
}

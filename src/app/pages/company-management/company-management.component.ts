import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { Sector } from '../application-examples/Models/Application';


export interface CompaniesModel {
  name:string,
  companyType:string;
  personel:number;
  income:string;
  region:string;
  sector:string
}
const ELEMENT_DATA: CompaniesModel[] = [
  {name:"BMC",companyType:"Büyük İşletme",personel:300,income:"350M+",region:"İstanbul",sector:"Teknoloji"},
  {name:"Ulak A.Ş",companyType:"KOBİ",personel:20,income:"200K+",region:"İstanbul",sector:"Teknoloji"},
  {name:"Tek Holding",companyType:"Büyük İşletme",personel:2190,income:"10M+",region:"Ankara",sector:"Tekstil"},
  {name:"Fark Gıda",companyType:"KOBİ",personel:35,income:"500K+",region:"Ankara",sector:"Gıda"},
  {name:"Pek Holding",companyType:"Büyük İşletme",personel:4520,income:"500M+",region:"İzmir",sector:"Gıda"},
  {name:"Palan Tekstil",companyType:"KOBİ",personel:23,income:"350K+",region:"Gaziantep",sector:"Tekstil"},
];

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.scss']
})
export class CompanyManagementComponent {
  sectors : Sector[] = [
    {name:"Tekstil"},
    {name:"Kimya"},
    {name:"Otomotiv"},
    {name:"Hububat"},
    {name:"İnşaat"},
    {name:"Teknoloji"}
  ];
  companyTypes=[
    "Büyük İşletme","KOBİ"
  ]
  displayedColumns: string[] = ['Name', 'CompanyType', "Income",'Personel',"Region","Sector","Details"];
  dataSource = ELEMENT_DATA;
  selectedCompany:CompaniesModel|null = null
  isEnabledError : boolean = false
  
  constructor() {

  }

  @ViewChild('addUpdateModal') private addUpdateModalComponent: ModalComponent;

  modalAddUpdateConfig: ModalConfig = {
    modalTitle: "Kullanıcı Ekleme / Güncelleme",
    closeButtonLabel:'Ekle',
    dismissButtonLabel:'Kapat',
    onClose:() => this.closeAddUpdateModal(),
    onDismiss:() => this.closeAddUpdateModal(),
  };


  openAddUpdateModal(item:CompaniesModel|null = null){
    this.selectedCompany = item;
    if(item !== null){
    }
    this.addUpdateModalComponent.open();
  }

  closeAddUpdateModal(){
    this.selectedCompany = null;
    this.addUpdateModalComponent.close();
    return true;
  }



  search(event:any){
    if(event.target.value.length > 0){
      this.dataSource = ELEMENT_DATA.filter(x => x.name.includes(event.target.value))
    }
    else{
      this.dataSource = ELEMENT_DATA
    }
  }

}

import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalConfig, ModalComponent } from 'src/app/_metronic/partials';
import { AuthService } from 'src/app/modules/auth';
export interface Request{
  requestId:string,
  sector: string;
  lastDate: Date;
}
@Component({
  selector: 'app-apply-request',
  templateUrl: './apply-request.component.html',
  styleUrls: ['./apply-request.component.scss']
})
export class ApplyRequestComponent {
  isEnabledError:boolean = false;
  form : FormGroup;
  displayedColumns: string[] = ["RequestId",'Sector', 'LastDate', 'Action'];
  data = new MatTableDataSource([
    {requestId:"1",sector:"Enerji",lastDate:new Date("2021-09-23")},
    {requestId:"2",sector:"Otomativ",lastDate:new Date("2021-09-23")},
    {requestId:"3",sector:"Kimya",lastDate:new Date("2021-09-23")},
  ]);
  counter:number[]=[1]
  productData = [
    {id:1,name:"Otomatik Şanzıman",category:"Otomotiv",},
    {id:2,name:"Jant",category:"Otomotiv",},
    {id:3,name:"Motor Sibobu", category:"Otomotiv",},
    {id:4,name:"Kaporta", category:"Otomotiv",},
    {id:5,name:"Akü", category:"Otomotiv",},
    {id:6,name:"Kış Lastiği", category:"Otomotiv",},
    {id:7,name:"Hidrojen Peroksit", category:"Kimya",},
    {id:8,name:"Katalizör", category:"Kimya",},
    {id:9,name:"Karbon Fiber",category:"Kimya",},
    {id:10,name:"20mm Elektrik Hat Kablosu", category:"Enerji",},
    {id:11,name:"Karbon Fiber", category:"Enerji",},
    {id:12,name:"Ölçüm Aracı", category:"Enerji",},
    {id:13,name:"Ters Akım Önleyici", category:"Enerji",},
    {id:14,name:"Sigorta", category:"Enerji",},
  ]
  usingProductData = [
    {id:1,name:"Otomatik Şanzıman",category:"Otomotiv",},
    {id:2,name:"Jant",category:"Otomotiv",},
    {id:3,name:"Motor Sibobu", category:"Otomotiv",},
    {id:4,name:"Kaporta", category:"Otomotiv",},
    {id:5,name:"Akü", category:"Otomotiv",},
    {id:6,name:"Kış Lastiği", category:"Otomotiv",},
    {id:7,name:"Hidrojen Peroksit", category:"Kimya",},
    {id:8,name:"Katalizör", category:"Kimya",},
    {id:9,name:"Karbon Fiber",category:"Kimya",},
    {id:10,name:"20mm Elektrik Hat Kablosu", category:"Enerji",},
    {id:11,name:"Karbon Fiber", category:"Enerji",},
    {id:12,name:"Ölçüm Aracı", category:"Enerji",},
    {id:13,name:"Ters Akım Önleyici", category:"Enerji",},
    {id:14,name:"Sigorta", category:"Enerji",},
  ]
  selectedProducts: any[] = [];
  selectedRequest: Request | null = null;
  sectors : any[] = [
    {name:"Tekstil"},
    {name:"Kimya"},
    {name:"Otomotiv"},
    {name:"Hububat"},
    {name:"İnşaat"},
    {name:"Teknoloji"},
    {name:"Enerji"},
  ];
  detailModalConfig: ModalConfig = {
    modalTitle: "Talep Detayı",
    closeButtonLabel: 'Kapat',
  };
  createModalConfig: ModalConfig = {
    modalTitle: "Talep Oluştur",
    closeButtonLabel: 'Gönder',
    hideCloseButton: () => true,
    onDismiss: () => {
      this.counter = [1];
      this.selectedProducts = [];
      return true;
    }
  };
  successModalConfig:ModalConfig={
    modalTitle:"İşlem Başarılı",
    closeButtonLabel:'Tamam'
  }
  @ViewChild('detailModal') private modalComponent: ModalComponent;
  @ViewChild('createModal') private createModalComponent: ModalComponent;
  @ViewChild('successModal') private successModalComponent: ModalComponent;

  @ViewChild('MatSort') sort: MatSort;
  constructor(private auth: AuthService,private fb: FormBuilder) {
    this.form = this.fb.group({
      sector: ['', Validators.required],
      lastDate: ['', Validators.required],
    });
  }
  ngAfterViewInit() {
    this.data.sort = this.sort;
  }
  openDetailModal() {
    this.modalComponent.open();
  }
  openCreateModal(request: Request) {
    this.usingProductData = this.productData.filter(x => x.category === request.sector);
    this.createModalComponent.open();
  }
  openSuccessModal() {
    this.createModalComponent.close();
    this.successModalComponent.open();
  }

  addProduct(product: any) {
    if (!this.selectedProducts.includes(product)) {
      this.selectedProducts.push(product);
    }
  }
  removeProduct(product: any) {
    this.selectedProducts = this.selectedProducts.filter((p) => p.id !== product.id);
  }
  addProductWithoutInList(name: any) {
    this.selectedProducts.push({name:name,category:this.selectedRequest?.sector,id:this.productData.length+1});
  }
  counterUpdate() {
    this.counter.push(this.counter.length+1);
    console.log(this.counter)
}
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

  }
}

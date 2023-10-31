import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService } from 'src/app/modules/auth';

export interface Request{
  requestId:string,
  sector: string;
  lastDate: Date;
}
@Component({
  selector: 'app-request-collection',
  templateUrl: './request-collection.component.html',
  styleUrls: ['./request-collection.component.scss']
})
export class RequestCollectionComponent {
  isEnabledError:boolean = false;
  isProductBased:boolean=true;
  form : FormGroup;
  displayedColumns: string[] = ["RequestId",'Sector', 'LastDate', 'Action'];
  productBasedColumns:string[] = ["Product","BINumber","Piece"];
  companyBasedColumns:string[] = ["Name","Product","Piece"];
  ProductBasedData = new MatTableDataSource([
    {name:"Otomatik Şanzıman",BINumber:"10",piece:10},
    {name:"Jant",BINumber:"20",piece:1000},
    {name:"Motor Sibobu",BINumber:"30",piece:50000},
  ]);
  companyBasedData = new MatTableDataSource([
    {name:"X Şirketi",product:"Otomatik Şanzıman",piece:10},
    {name:"X Şirketi",product:"Jant",piece:10},
    {name:"Y Şirketi",product:"Jant",piece:1000},
    {name:"Y Şirketi",product:"Motor Sibobu",piece:1000},
    {name:"Z Şirketi",product:"Motor Sibobu",piece:50000},
  ]);
  data = new MatTableDataSource([
    {requestId:"1",sector:"Enerji",lastDate:new Date("2021-09-23")},
    {requestId:"2",sector:"Kozmetik",lastDate:new Date("2021-09-23")},
    {requestId:"3",sector:"Tekstil",lastDate:new Date("2021-09-23")},
  ]);
  selectedRequest: Request | null = null;
  sectors : any[] = [
    {name:"Tekstil"},
    {name:"Kimya"},
    {name:"Otomotiv"},
    {name:"Hububat"},
    {name:"İnşaat"},
    {name:"Teknoloji"}
  ];
  detailModalConfig: ModalConfig = {
    modalTitle: "Talep Detayı",
    closeButtonLabel: 'Kapat',
  };
  createModalConfig: ModalConfig = {
    modalTitle: "Talep Oluştur",
    closeButtonLabel: 'Talep Oluştur',
  };
  @ViewChild('detailModal') private modalComponent: ModalComponent;
  @ViewChild('createModal') private createModalComponent: ModalComponent;
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
  openDetailModal(request: Request) {
    this.selectedRequest = request;
    this.modalComponent.open();
  }
  openCreateModal() {
    this.createModalComponent.open();
  }
  onSubmit() {
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const formData = new FormData();
      formData.append('sector', this.form.value.sector);
      formData.append('lastDate', this.form.value.lastDate);
      this.isEnabledError=false;
      this.form.reset();      
       return this.createModalComponent.close();
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
    }
  }

  tableProductBasedChange(bool:boolean){
    this.isProductBased = bool;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

  }
}

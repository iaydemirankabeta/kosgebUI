import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalConfig, ModalComponent } from 'src/app/_metronic/partials';
import { AuthService } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { UserCompany } from 'src/app/modules/auth/models/user-company.model';
import { UserModel } from 'src/app/modules/auth/models/user.model';

export interface Request{
  productId?:string,
  requestId?:string,
  lastDate?:Date,
  sector?:string,
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
  data = new MatTableDataSource([]);
  counter:number[]=[1]
  productData:any = [ ]
  usingProductData:any = [  ]
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
  user: UserModel | undefined;

  constructor(private auth: AuthService,private fb: FormBuilder,private httpClient: HttpClient,private changeDetectorRefs: ChangeDetectorRef) {
    this.user = auth.currentUserValue;


    this.form = this.fb.group({
      items: this.fb.array([]) // FormGroup dizisi
    });
  
    // Örnek olarak 5 adet form kontrolü oluşturmak için döngü

  }

  get itemsFormArray() {
    return this.form.get('items') as FormArray;
  }
  companyId:any;
  addItem() {
    this.counter.push(this.counter.length+1);
    const itemFormGroup = this.fb.group({
      demandCallId: [this.demandCallId],
      productId: ['', Validators.required],
      companyId: [this.companyId],
      productAmount: [0, [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)]], // 0 değeri ve sayısal formatta validasyon
    });

    this.itemsFormArray.push(itemFormGroup);
  }
  

  getAllDemandCall(){
    this.httpClient.get<any>(`${environment.apiUrl}/Localization/demandCall/getalldemandcall`).subscribe({
      next: (response: any) => {
        // Gelen cevabı işleyebilirsiniz

        this.data = response.map((item: { demandCallId: any; sectorName: any; endDate: string | number | Date; }) => ({
          RequestId: item.demandCallId,
          Sector: item.sectorName,
          LastDate: new Date(item.endDate),
          // Diğer sütunlar burada eklenebilir
        }));
        this.changeDetectorRefs.detectChanges();

        
      },
      error: (error) => {
        console.error('Veri alınamadı:', error);
      },
      complete: () => {
        console.log('İşlem tamamlandı.');

      }
  });
  }
  ngOnInit(): void {
    this.companyId =  this.user ? this.user.selectedCompany?.company.id : null;

    this.getAllDemandCall();
    
  }

  ngAfterViewInit() {
    this.data.sort = this.sort;
  }
  openDetailModal() {
    this.modalComponent.open();
  }
  demandCallId:any;
openCreateModal(request: any) {

  this.selectedRequest = request;
  this.demandCallId = request?.RequestId;

  this.httpClient.get(environment.apiUrl + "/Localization/DemandCall/GetApplyDemandCallData")
  .subscribe({
    next: (response: any) => {
      this.usingProductData = response.data;
      this.changeDetectorRefs.detectChanges();
    }
  });

  this.createModalComponent.open();
}

  onSubmit() {
    console.log(this.form);
    if (this.form) {

      const products = this.form.value.items;
      console.log(products)

    const requestData = products.map((product: any) => {
      return {
        demandCallId: this.demandCallId,
        productId: product.productId,
        companyId: this.companyId,
        productAmount: Number(product.productAmount)
      };
    });
     
      this.isEnabledError = false;
      this.form.reset();
  
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      this.httpClient.post(environment.apiUrl + '/Localization/DemandCall/DemandCallApplyInsert', requestData).subscribe({
      next:  (response) => {
          console.log('Başarıyla gönderildi!', response);
          // Yanıtı işleyebilirsiniz
        },
      error:  (error) => {
          console.error('Hata oluştu:', error);
          // Hata durumunu ele alabilirsiniz
        }
      });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
    }
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

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

  }
}

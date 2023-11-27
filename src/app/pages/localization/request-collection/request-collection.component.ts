import { Component, ViewChild,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

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
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
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
  data = new MatTableDataSource([]);
  selectedRequest: Request | null = null;
  sectors : any[] = [];
  detailModalConfig: ModalConfig = {
    modalTitle: "Talep Detayı",
    closeButtonLabel: 'Kapat',
  };
  createModalConfig: ModalConfig = {
    modalTitle: "Talep Oluştur",
    closeButtonLabel: 'Talep Oluştur',
  };
  closeDemandModalConfig: ModalConfig = {
    modalTitle: "Talep Kapat",
    closeButtonLabel: 'İptal',
  };
  @ViewChild('detailModal') private modalComponent: ModalComponent;
  @ViewChild('createModal') private createModalComponent: ModalComponent;
  @ViewChild('closeDemandModal') private closeDemandModalComponent: ModalComponent;
  @ViewChild('MatSort') sort: MatSort;
  constructor(private auth: AuthService,private fb: FormBuilder,private httpClient: HttpClient,private changeDetectorRefs: ChangeDetectorRef) {
    this.form = this.fb.group({
      sector: ['', Validators.required],
      lastDate: ['', Validators.required],
    });
  }



  getAllDemandCall(){
    this.isLoading$.next(true);
    this.httpClient.get<any>(`${environment.apiUrl}/Localization/demandCall/getalldemandcall`).subscribe({
      next: (response: any) => {
        console.log(response);
        // Gelen cevabı işleyebilirsiniz

        this.data = response.map((item: { demandCallId: any; sectorName: any; endDate: string | number | Date; }) => ({
          RequestId: item.demandCallId,
          Sector: item.sectorName,
          LastDate: new Date(item.endDate),
          // Diğer sütunlar burada eklenebilir
        }));
        
      },
      error: (error) => {
        console.error('Veri alınamadı:', error);
      },
      complete: () => {
        console.log('İşlem tamamlandı.');
        this.isLoading$.next(false);

      }
  });
  }


  ngOnInit(): void {
    this.getAllDemandCall();

    this.httpClient.get<any>(`${environment.apiUrl}/Localization/DemandCall/GetSectorsForDemandCall`).subscribe({
     next: (response: any) => {
        this.sectors = response.dataList
        // Gelen cevabı işleyebilirsiniz
      },
      error:(error: any) => {
        console.error('Hata oluştu:', error);
        // Hata durumunda işlemler yapabilirsiniz
      }
    });
    
  }
  ngAfterViewInit() {
    this.data.sort = this.sort;
        this.changeDetectorRefs.detectChanges();

  }
  openDetailModal(request: Request) {
    this.selectedRequest = request;
    this.modalComponent.open();
  }
  openCreateModal() {
    this.createModalComponent.open();
  }
  closeDemand: any = [];
  openCloseDemandModal(element:any) {
    this.closeDemand = element;
    this.closeDemandModalComponent.open();
  }
  DeleteDemand() {
    console.log(this.closeDemand.RequestId);
    this.closeDemandModalComponent.close();
    
    const deleteUrl = `${environment.apiUrl}/DemandCall/DeleteDemandCall/${this.closeDemand.RequestId}`;
  
    this.httpClient.delete(deleteUrl).subscribe({
      next: (response) => {
        this.getAllDemandCall();
        console.log(response);
        // Yanıtı işleyebilirsiniz
      },
      error: (error) => {
        console.error('Hata oluştu:', error);
        // Hata durumunu ele alabilirsiniz
      }
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const selectedSectorId = this.form.value.sector;
      const selectedSector = this.sectors.find(sector => sector.sectorId === selectedSectorId);
      const date = new Date(this.form.value.lastDate);
      const formattedDate = new DatePipe('en-US').transform(date, 'yyyy-MM-dd');

      const requestData = {
        sectorName: selectedSector.sectorName,
        sectorId: selectedSector.sectorId,
        endDate:formattedDate ||  ''
      };
  
      this.isEnabledError = false;
      this.form.reset();
  
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      this.httpClient.post(environment.apiUrl + '/Localization/DemandCall/CreateDemandCall', requestData).subscribe({
       next: (response) => {
          this.getAllDemandCall();
          console.log(response);
          // Yanıtı işleyebilirsiniz
        },
      error:(error) => {
          console.error('Hata oluştu:', error);
          // Hata durumunu ele alabilirsiniz
        }
      });
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

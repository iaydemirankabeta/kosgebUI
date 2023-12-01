import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, UserModel, UserType } from 'src/app/modules/auth';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';


export interface Pool {
  id: number;
  title: string;
  questions: Question[];
  endDate: Date;
}



interface Question {
  id: number;
  title: string;
}

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent {
  startDate: Date = new Date(1991, 1);
  isNewQuest = false;
  isCheckboxChecked: boolean = false;


  sektorler = [
    { id: 1, name: "Gıda" },
    { id: 2, name: "İnşaat" },
    { id: 3, name: "Tekstil" },
    { id: 4, name: "Kozmetik" },
    { id: 5, name: "Teknoloji" },
    { id: 6, name: "Hububat (Tahıl)" },
  ]
  


  ulkeler = new MatTableDataSource([])
  sirketler = new MatTableDataSource([])
  oranlar = new MatTableDataSource([  ])
  selectedSektor: string = 'Gıda';
  selectedUlke: string = 'Almanya';
  selectedOran: string = '30';
  selectedSirket: string = 'X';
  form : FormGroup;

  endDateChange(item: any) {
    this.startDate = new Date(item.target.value)
    console.log(this.startDate);

    this.getApplicationsByFilter();
  }
  getApplicationsByFilter() {
    throw new Error('Method not implemented.');
  }
  changesektor(event: any) {
    console.log(event);
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex; // Seçilen option'ın index değeri

    this.selectedSektor = this.sektorler[selectedIndex].name; // Seçilen değeri değişkene ata
    this.form.controls['description'].setValue(`${this.selectedUlke}'da ${this.selectedSektor} sektöründe faaliyet gösteren ${this.selectedSirket} şirketi için düzenlenen %${this.selectedOran} KOSGEB destekli iş gezisine katılım sağlamak ister misiniz?`);

  }
  changeulke(event: any) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex; // Seçilen option'ın index değeri
    this.selectedUlke = this.countries[selectedIndex].countryName; // Seçilen değeri değişkene ata
    this.form.controls['description'].setValue(`${this.selectedUlke}'da ${this.selectedSektor} sektöründe faaliyet gösteren ${this.selectedSirket} şirketi için düzenlenen %${this.selectedOran} KOSGEB destekli iş gezisine katılım sağlamak ister misiniz?`);

  }
  changesirket(event: any) {
    this.selectedSirket = event.target.value; // Seçilen değeri değişkene ata
    this.form.controls['description'].setValue(`${this.selectedUlke}'da ${this.selectedSektor} sektöründe faaliyet gösteren ${this.selectedSirket} şirketi için düzenlenen %${this.selectedOran} KOSGEB destekli iş gezisine katılım sağlamak ister misiniz?`);

  }
  changeoran(event: any) {
    this.selectedOran = event.target.value; // Seçilen değeri değişkene ata
    this.form.controls['description'].setValue(`${this.selectedUlke}'da ${this.selectedSektor} sektöründe faaliyet gösteren ${this.selectedSirket} şirketi için düzenlenen %${this.selectedOran} KOSGEB destekli iş gezisine katılım sağlamak ister misiniz?`);

  }
  
  displayedColumns: string[] = ['Id', 'Title', 'LastDate', 'Action'];
  Pools: Pool[] = []
  counter: number[] = [1]
  selectedPool: Pool[] = [];
  createModalConfig: ModalConfig = {
    modalTitle: "Anket Oluştur",
    closeButtonLabel: 'Gönder',
    onDismiss: () => {
      this.counter = [1];
      return true;
    },
    hideCloseButton: () => true
  }

  successModalConfig: ModalConfig = {
    modalTitle: "Başarılı",
    closeButtonLabel: "Kapat"
  }

  detailModalConfig: ModalConfig = {
    modalTitle: "Anket Detayı",
    closeButtonLabel: "Kapat"
  }

  deleteModalConfig: ModalConfig = {
    modalTitle: "Sil",
  }

  constructor(private auth: AuthService,private fb: FormBuilder,private httpClient: HttpClient,private changeDetectorRefs: ChangeDetectorRef) {
    this.form = this.fb.group({
      question: ['', Validators.required],
      endDate: ['', Validators.required],
      sector: [this.selectedSektor, Validators.required],
      description: ['', Validators.required],
      countries: [this.selectedUlke, Validators.required],
      company: [this.selectedSirket, Validators.required],
      support: ['', Validators.required],
      showAdditionalContent: [this.selectedOran,Validators.required]
      
    });
    this.form.controls['description'].setValue(`${this.selectedUlke}'da ${this.selectedSektor} sektöründe faaliyet gösteren ${this.selectedSirket} şirketi için düzenlenen %${this.selectedOran} KOSGEB destekli iş gezisine katılım sağlamak ister misiniz?`);

  }


  @ViewChild('createModal') private createModalComponent: ModalComponent;
  @ViewChild('successModal') private successModalComponent: ModalComponent;
  @ViewChild('detailModal') private detailModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;
  selectedType: any;
  change(item: any) {
    this.selectedType = item.target.value;
  }

  openCreateModal() {
    this.createModalComponent.open();
  }

  /** Eğer anket oluşturulursa burası çalışacak. **/
  openSuccessModal() {
    this.createModalComponent.close();
    this.successModalComponent.open();
  }

  selectedPoolDetail: any;

openDetailModal(element: any) {
  if (this.user !== undefined) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.user.authToken);

    this.httpClient.get<any>(`${environment.apiUrl}/Company/Survey/GetSurveyAnswerDetails/${element.surveyId}`, { headers: headers }).subscribe({
      next: (response: any) => {
        // API yanıtının geldiği nokta
        console.log(response); // API yanıtını kontrol etmek için
        this.selectedPoolDetail = {
          surveyId: response.data.surveyId,
          description: response.data.description,
          yesRatio: response.data.yesRatio,
          noRatio: response.data.noRatio,
          participantCount: response.data.participantCount,
          countryList: response.data.countryListModelRatio || []
        };

        console.log(this.selectedPoolDetail); // selectedPoolDetail'i kontrol etmek için
        
      },
      error: (error) => {
        console.error('Veri alınamadı:', error);
      },
      complete: () => {
        this.detailModalComponent.open();
        this.changeDetectorRefs.detectChanges();

        console.log('İşlem tamamlandı.');
      }
    });
  }
}

  selectedPoll:any = [];
  openDeleteModal(element:any) {
    this.selectedPoll = element;
    this.deleteModalComponent.open();
  }


  closeDeleteModal() {
    if (this.user !== undefined) {

    const headers = new HttpHeaders().set("Authorization", "Bearer " + this.user.authToken); 

    this.httpClient.delete<any>(`${environment.apiUrl}/Company/Survey/DeleteSurveyById/${this.selectedPoll.surveyId}`, { headers }).subscribe({
     next: () => {
        console.log('Anket silindi.');
        window.location.reload();

      },
     error: (error) => {
        // Hata durumunda
        console.error('Anket silinemedi:', error);
      }
    });
    }
    // Modal kapatma işlemi burada yapılabilir, uygun bir modal componentiniz varsa modalı kapatma metodu burada çağrılabilir
  

    this.deleteModalComponent.close();
  }
  counterUpdate() {
    this.counter.push(this.counter.length + 1);
  }
  user: UserModel | undefined ;
  
  ngOnInit(): void {
    this.user = this.auth.currentUserValue;

   this.getAllSector();

   if (this.user !== undefined) {
    this.getAllCountries(this.user)
    this.getAllSurveys(this.user)
   }
    
  }

 
  

  getAllSector(){
    this.httpClient.get<any>(`${environment.apiUrl}/Company/Sector`).subscribe({
      next: (response: any) => {
        // Gelen cevabı işleyebilirsiniz
        this.sektorler = response;
        
      },
      error: (error) => {
        console.error('Veri alınamadı:', error);
      },
      complete: () => {
        console.log('İşlem tamamlandı.');

      }
  });
  }

  getAllSurveys(user: UserModel){
    
    let headers = new HttpHeaders().set("Authorization", "Bearer " + user.authToken)
    this.httpClient.get<any>(`${environment.apiUrl}/Company/Survey/GetAllSurveys`, { headers:headers }).subscribe({
      next: (response: any) => {
        
        this.Pools = response.data;
        this.changeDetectorRefs.detectChanges();

        // Gelen cevabı işleyin, örneğin bileşen içinde bir değişkene atayabilirsiniz
      },
      error: (error) => {
        console.error('Veri alınamadı:', error);
      },
      complete: () => {
        console.log('İşlem tamamlandı.');
      }
    });
    
  }

  countries:any = [];

  getAllCountries(user: UserModel) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + user.authToken)

    this.httpClient.get<any>(`${environment.apiUrl}/Company/Country/GetCountries`, { headers:headers }).subscribe({
      next: (response: any) => {
        this.countries = response.data;
      },
      error: (error) => {
        console.error('Veri alınamadı:', error);
      },
      complete: () => {
        console.log('İşlem tamamlandı.');
      }
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const date = new Date(this.form.value.endDate);
const datePipe = new DatePipe('en-US');
const formattedDate = datePipe.transform(date, 'yyyy-MM-dd');

      const requestData = {
        title: this.form.value.question,
        description: this.form.value.description,
        endDate: formattedDate,
        sectorId: this.form.value.sector,
        countryId: this.form.value.countries,
        supportPercentage: 0,

        companyName:this.form.value.company
        
      }
  
      this.form.reset();
      if (this.user !== undefined) {

        const headers = new HttpHeaders().set("Authorization", "Bearer " + this.user.authToken)
      
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      this.httpClient.post(environment.apiUrl + '/Company/Survey/CreateSurvey', requestData,{headers}).subscribe({
       next: (response) => {
          console.log(response);
          // Yanıtı işleyebilirsiniz
        },
      error:(error) => {
          console.error('Hata oluştu:', error);
          // Hata durumunu ele alabilirsiniz
        },complete: () => {
          console.log('İşlem tamamlandı.');
          this.openSuccessModal();
          window.location.reload();

        }
      });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
    }
  }
  }



}

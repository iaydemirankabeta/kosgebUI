import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


export interface Destek{
  id:number;
  tip:string;
}

@Component({
  selector: 'app-kosgeb-destek',
  templateUrl: './kosgeb-destek.component.html',
  styleUrls: ['./kosgeb-destek.component.scss']
})
export class KosgebDestekComponent {
  selectedType:any = "ARGE";
  user$: Observable<UserType>;

  yuklenenDosyalar: File[] = [];
  displayedColumns: string[] = ['Id','Tip','Aksiyon'];
  destekler= new MatTableDataSource([
    {id:1,tip:"AR-GE"},
    {id:2,tip:"KOBIGEL"},
    {id:3,tip:"İleri Girişimci Destek Programı"},
  ])
  firstModalConfig :ModalConfig = {
    modalTitle:"KOSGEB Destek Programı Seç",
    closeButtonLabel:"Devam Et",
    onClose:() => {
      this.openSecondModal();
      return true;
    }
  }
  secondModalConfig :ModalConfig = {
    modalTitle:"Gerekli Bilgileri Doldur",
  }
  @ViewChild('firstModal') private firstModal:ModalComponent;
  @ViewChild('secondModal') private secondModal:ModalComponent;
  constructor(private auth : AuthService,private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.user$ = this.auth.currentUserSubject.asObservable();

    

  }

  argeFormValue: any = {};
  kobigelFormValue: any = {};
  ileriGirisimciFormValue: any = {};


  postData(formData: any) {

    // Form verilerini göndermek için HTTP POST isteği yapılabilir
    this.httpClient.post(environment.apiUrl+'/Localization/DemandCall/CreateDemandCall ', formData).subscribe(
      (response) => {
        console.log('Başarıyla gönderildi!', response);
        // Yanıtı işleyebilirsiniz
      },
      (error) => {
        console.error('Hata oluştu:', error);
        // Hata durumunu ele alabilirsiniz
      }
    );
  }

  change(item:any){
    this.selectedType = item.target.value;
  }
  openFirstModal(){
    this.firstModal.open();
  }
  openSecondModal(){
    this.secondModal.open();
  }
  dosyaBirak(event: DragEvent): void {
    event.preventDefault();
    const dosyalar = event.dataTransfer?.files;

    if (dosyalar) {
      for (let i = 0; i < dosyalar.length; i++) {
        this.yuklenenDosyalar.push(dosyalar[i]);
      }
    }
  }

  dosyaSec(event: Event): void {
    const dosyaInput = event.target as HTMLInputElement;
    const dosyalar = dosyaInput.files;

    if (dosyalar) {
      for (let i = 0; i < dosyalar.length; i++) {
        this.yuklenenDosyalar.push(dosyalar[i]);
      }
    }
  }

  dosyaSecManuel(): void {
    const dosyaInput = document.querySelector('.drop-zone input') as HTMLElement;
    dosyaInput.click();
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }
}

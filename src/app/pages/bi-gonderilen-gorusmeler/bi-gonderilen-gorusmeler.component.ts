import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';

export interface Destek{
  id:number;
  tip:string;
}

@Component({
  selector: 'app-bi-gonderilen-gorusmeler',
  templateUrl: './bi-gonderilen-gorusmeler.component.html',
  styleUrls: ['./bi-gonderilen-gorusmeler.component.scss']
})
export class BiGonderilenGorusmelerComponent {
  selectedType:any = "ARGE";
  user$: Observable<UserType>;

  yuklenenDosyalar: File[] = [];
  displayedColumns: string[] = ['IsletmeAdı','GonderilenGorusmeTarihi','GorusmeAcıklaması','Durum'];
  destekler= new MatTableDataSource([
    {isletmeAdi:'X Şirketi',gorumeTarihi:'23.09.2023',gorusmeAciklamasi:'Görüşme Açıklama 1',durum:'Kosgeb den Görüşme Talep Edildi'},
    {isletmeAdi:'Y Şirketi',gorumeTarihi:'24.09.2023',gorusmeAciklamasi:'Görüşme Açıklama 2',durum:'Değerlendirme Aşamasında'},
    {isletmeAdi:'Z Şirketi',gorumeTarihi:'23.09.2023',gorusmeAciklamasi:'Görüşme Açıklama 3',durum:'Reddedildi'},
  ])
  
 

  // @ViewChild('firstModal') private firstModal:ModalComponent;
  // @ViewChild('secondModal') private secondModal:ModalComponent;
  constructor(private auth : AuthService) { }

  async ngOnInit(): Promise<void> {
    this.user$ = this.auth.currentUserSubject.asObservable();

  }
  change(item:any){
    this.selectedType = item.target.value;
  }
  // openFirstModal(){
  //   this.firstModal.open();
  // }
  // openSecondModal(){
  //   this.secondModal.open();
  // }
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

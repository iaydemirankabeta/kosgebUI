import { Component, HostBinding, OnDestroy, OnInit, ViewChild  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {AuthService, UserModel, UserType} from '../../modules/auth';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  selectedUlke: string = 'Almanya';
  ulkeler = new MatTableDataSource([
    { id: 1, tip: "Almanya" },
    { id: 2, tip: "Türkiye" },
    { id: 3, tip: "Amerika" },
    { id: 4, tip: "Çin" },
    { id: 5, tip: "Rusya" },
    { id: 6, tip: "Fransa" },
  ])
  user$: Observable<UserType>;
  private unsubscribe: Subscription[] = [];
  modalConfig : ModalConfig = {
    modalTitle: "Anket",
    closeButtonLabel: 'Cevabı Gönder',
  }
  @ViewChild('modal') private modalComponent: ModalComponent;

  openModal(){
    this.modalComponent.open();
  }
  
  constructor(
    private auth: AuthService,
    private httpClient: HttpClient,
  ) {
    
  }
  user: UserModel | undefined ;


  getSurveys(){
    if (this.user !== undefined) {
      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.user.authToken)
      
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      this.httpClient.post(environment.apiUrl + '/Company/Survey/CreateSurveyAnswer',{headers}).subscribe({
       next: (response) => {
          console.log(response);
          // Yanıtı işleyebilirsiniz
        },
      error:(error) => {
          console.error('Hata oluştu:', error);
          // Hata durumunu ele alabilirsiniz
        },complete: () => {
          console.log('İşlem tamamlandı.');

        }
      });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
    }
  }

  changeulke(event: any) {
    this.selectedUlke = event.target.value; 
  }
  

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;

    this.user$ = this.auth.currentUserSubject.asObservable();
    this.getSurveys();

  }
}

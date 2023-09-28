import { Component, HostBinding, OnDestroy, OnInit, ViewChild  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {AuthService, UserType} from '../../modules/auth';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  
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
  ) {
    
  }
  
  

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

  }
}

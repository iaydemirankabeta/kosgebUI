import { Component, HostBinding, OnDestroy, OnInit  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {AuthService, UserType} from '../../modules/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  
  user$: Observable<UserType>;
  private unsubscribe: Subscription[] = [];

  constructor(
    private auth: AuthService,
  ) {
    
  }
  

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

  }
}

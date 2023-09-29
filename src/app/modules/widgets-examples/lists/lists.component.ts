import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from '../../auth';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent {
  user$: Observable<UserType>;
  title = "Şanzıman";
  constructor(private auth:AuthService) {

  }
  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  
  }
}

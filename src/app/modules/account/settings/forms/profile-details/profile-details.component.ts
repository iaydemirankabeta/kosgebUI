import { ChangeDetectorRef, Component, OnDestroy, OnInit  } from '@angular/core';
import { BehaviorSubject, Subscription,Observable } from 'rxjs';
import {AuthService, UserType} from '../../../../../modules/auth';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  user$: Observable<UserType>;
  private unsubscribe: Subscription[] = [];

  constructor(private cdr: ChangeDetectorRef,private auth: AuthService) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

  }

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthService, UserType } from '../../auth';
import { CityService } from './city.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  cities: any[] = [];
  yuklenenDosyalar: File[] = [];

  selectedCity: any;

  user$: Observable<UserType>;
  private unsubscribe: Subscription[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private auth: AuthService,
    private cityService: CityService
  ) {

    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
    
  }
  

  async ngOnInit(): Promise<void> {
    this.user$ = this.auth.currentUserSubject.asObservable();
    try {
      const data = await this.cityService.getCities().toPromise();
      this.cities = Object.values(data);
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Şehirler yüklenirken hata oluştu:', error);
    }
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

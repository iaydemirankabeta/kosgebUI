import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';
// import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
// import { AuthService, UserType } from 'src/app/modules/auth';
// import { RandevuService } from './randevu.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AppModalComponent } from './meet-modal.component';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay,
  CalendarView,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import { MonthViewDay } from 'calendar-utils'; // İmport MonthViewDay sınıfını içe aktarın
import { ActivatedRoute } from '@angular/router';
import { RandevuService } from './kobi-randevu.service';
import { AppModalComponent } from './kobi-meet-modal.component';



export interface Destek{
  id:number;
  tip:string;
}

@Component({
  selector: 'app-kobilerden-gelen-gorusmeler',
  templateUrl: './kobilerden-gelen-gorusmeler.component.html',
  styleUrls: ['./kobilerden-gelen-gorusmeler.component.scss']
})
export class KobilerdenGeleneGorusmelerComponent {
  selectedType:any = "ARGE";
  user$: Observable<UserType>;

  yuklenenDosyalar: File[] = [];
  displayedColumns: string[] = ['IsletmeAdı','GorusmeAcıklaması','GonderilenGorusmeTarihi','Action'];
  destekler= new MatTableDataSource([
    {isletmeAdi:'X Şirketi',gorusmeTarihi:'23.09.2023',gorusmeAciklamasi:'Görüşme Açıklama 1'},
    {isletmeAdi:'Y Şirketi',gorusmeTarihi:'24.09.2023',gorusmeAciklamasi:'Görüşme Açıklama 2'},
    {isletmeAdi:'Z Şirketi',gorusmeTarihi:'23.09.2023',gorusmeAciklamasi:'Görüşme Açıklama 3'},
  ])
  
 

  // @ViewChild('firstModal') private firstModal:ModalComponent;
  // @ViewChild('secondModal') private secondModal:ModalComponent;
  // modalService: any;
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('meet') private meet: ModalComponent;
  @ViewChild('acceptmodal') private acceptModalComponent: ModalComponent;
  @ViewChild('meetingModal') private meetingModal:ModalComponent

  // constructor(private route: ActivatedRoute,private auth:AuthService,
  //   private randevuService: RandevuService,private modalService: NgbModal){
  //   this.user$ = this.auth.currentUserSubject.asObservable();
  // }
  constructor(private route: ActivatedRoute,private auth:AuthService,
    private randevuService: RandevuService,private modalService: NgbModal){
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

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
  async acRandevuModal() {
    
    this.meet.open()
  }
  locale:string = "tr";
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  refresh = new Subject<void>();
  activeDayIsOpen: boolean = true;
  selectedDates : Date[] = [];
  viewDate: Date = new Date();
  events: any[] = [];

  setView(view: CalendarView) {
    this.view = view;
  }
  selectedDayViewDate: Date;
  selectedMonthViewDay: CalendarMonthViewDay;
  onDayClick(day: MonthViewDay): void {
    const today = new Date(); // Bugünkü tarihi alın
    const clickedDate = day.date; // Tıklanan günün tarihini alın
    this.selectedMonthViewDay = day;
    const selectedDateTime = this.selectedMonthViewDay.date.getTime();
    const dateIndex = this.selectedDates.findIndex(
      (selectedDay) => selectedDay.getTime() === selectedDateTime
    );
    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDates.splice(dateIndex, 1);
    } else {
      day.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = day;
      this.selectedDates.push(clickedDate);
    }
    // Tıklanan tarih bugünden önceyse tıklamayı engelle
    if (clickedDate < today ) {
      return;
    }
  }

  selectHour(){
    this.meet.close();
    this.openModalMeet(this.selectedDates);
  }
  

  openModalMeet(selectedDate: Date[]) {
    console.log(selectedDate);
    const modalRef = this.modalService.open(AppModalComponent);
    modalRef.componentInstance.selectedDate = selectedDate;
  }
  


  modalMeetConfig: ModalConfig = {
    modalTitle: "Randevu",
    closeButtonLabel:'Kapat',
    hideCloseButton:() => true
  }; 
  
}

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {MeetingService } from './meeting.service';
import { DatePipe } from '@angular/common';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { Observable, first } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { MeetingNotesService } from './meeting-notes/meeting-notes.service';
import localeTr from '@angular/common/locales/tr'; // Türkçe yerelleştirme
import { Meeting } from './meeting.model';
import { MeetingNote } from './meeting-notes/meeting-note.model';




@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent {
  meetings: Meeting[];
  user$: Observable<UserType>;
  selectedMeetingNotes:MeetingNote[];
  searchCompanies:any=null;
  searchCities:any=null
  selectedCompany:any={id:"0"};
  selectedCity:any={id:"0"}
  selectedMeeting: Meeting; // selectedMeeting özelliğini tanımlayın

  modalCompareConfig: ModalConfig = {
    modalTitle : "Toplantım",
    hideCloseButton: () => true,
  }

  
  @ViewChild('modal') private modal:ModalComponent

  constructor(private meetingService: MeetingService,
    private datePipe: DatePipe,
    private auth: AuthService,
    private meetingNoteService: MeetingNotesService,
    private changeDetectorRef: ChangeDetectorRef


    ) {
    this.getMeetings()    
}

  startDate: Date | null = null;
  endDate: Date | null = null;
  meetings$: Observable<Meeting[]>;

  searchMeetingsByDateRange() {
    // meetings$ değişkeni bir Observable
  
    // İsteği oluşturmadan önce parametreleri kontrol et
    const requestParams: any = {
      cityId: this.selectedCity.id === "0" ? "" : this.selectedCity.id,
      companyId: this.selectedCompany.id === "0" ? "" : this.selectedCompany.id,
      page: 1,
      count: 10
    };
  
    if (this.startDate) {
      requestParams.startDate = this.startDate;
    }
  
    if (this.endDate) {
      requestParams.endDate = this.endDate;
    }
  
    // İsteği oluştur
    this.meetingService.getMeetings(requestParams).pipe(first()).subscribe((res:any) => {
      this.meetings = res.data.data
      this.changeDetectorRef.detectChanges();

    });
  
  }
  
  
  

  formatMeetingDate(meetingDate: Date): string | null | undefined {
    // Türkiye saat dilimini kullanmak için 'tr-TR' locale'ini kullanıyoruz.
    return this.datePipe.transform(meetingDate, 'dd.MM.yyyy HH:mm', 'tr-TR');
  }


  ngOnInit() {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  viewMeetingNotes(meeting: Meeting) {
    // Toplantı notları görüntüleme işlemi burada
    console.log(meeting);
    this.selectedMeeting = meeting;
    this.changeDetectorRef.detectChanges();
    this.meetingNoteService.getMeetingNotes(meeting.id).pipe(first()).subscribe((res:any) => {
      this.changeDetectorRef.detectChanges();
      this.selectedMeetingNotes = res.data;
      this.changeDetectorRef.detectChanges();

    });
    this.modal.open();
  }

  updateMeetingLink(event:any,meeting: Meeting) {
    this.meetingService.updateMeeting({
      id : meeting.id,
      meetingLink : event.target.value,
    }).pipe(first()).subscribe((res) => {
      
    });
  }


  companySearch(event:any){ 
    if(event.target.value.length > 3){
      this.meetingService.searchCompanies(event.target.value).pipe(first()).subscribe((searchResult:any) => {
        console.log(searchResult)
        this.searchCompanies = searchResult.data.data
        this.changeDetectorRef.detectChanges();
      })
    }
  }
  citySearch(event:any){
    if(event.target.value.length > 3){
      this.meetingService.searchCities(event.target.value).pipe(first()).subscribe((searchResult:any) => {
        console.log(searchResult)
        this.searchCities = searchResult.data
        this.changeDetectorRef.detectChanges();
      })
    }
  }
  citySelect(item:any){
    this.selectedCity = item;
  }

  companySelect(item:any){
    if(this.selectedCompany !== item)
      this.selectedCompany = item;
    else
      this.selectedCompany={id:"0"}
  }



  getMeetings(){
    this.meetingService.getMeetings({
      search : "",cityId:"",count:50,
      page:1,isDesc:false
    }).pipe(first()).subscribe((res:any) => {
      this.meetings = res.data.data
      this.changeDetectorRef.detectChanges();

    })
  }
  


}

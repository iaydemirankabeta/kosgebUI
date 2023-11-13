import { Component, ViewChild } from '@angular/core';
import {MeetingService } from './meeting.service';
import { DatePipe } from '@angular/common';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { MeetingNotesService } from './meeting-notes/meeting-notes.service';
import localeTr from '@angular/common/locales/tr'; // Türkçe yerelleştirme
import { Meeting } from './meeting.model';




@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent {
  meetings: Meeting[];
  user$: Observable<UserType>;

  selectedMeeting: Meeting; // selectedMeeting özelliğini tanımlayın

  modalCompareConfig: ModalConfig = {
    modalTitle : "Toplantım",
    hideCloseButton: () => true,
  }

  
  @ViewChild('modal') private modal:ModalComponent

  constructor(private meetingService: MeetingService,
    private datePipe: DatePipe,
    private auth: AuthService,
    private meetingNoteService: MeetingNotesService


    ) {}

  startDate: Date | null = null;
  endDate: Date | null = null;

  searchMeetingsByDateRange() {
    if (this.startDate && this.endDate) {
      // Başlangıç ve bitiş tarihlerini kullanarak toplantıları filtrelemek için MeetingService'i kullanın
      this.meetings = this.meetingService.getMeetings({
        startDate:this.startDate,
        endDate:this.endDate,
        page:1, 
        count:10
      });
    } else {
      // Başlangıç ve bitiş tarihleri eksikse, tüm toplantıları gösterin veya bir hata mesajı gösterin.
      this.meetings = this.meetingService.getMeetings();
    }
  }
  

  formatMeetingDate(meetingDate: Date): string | null | undefined {
    // Türkiye saat dilimini kullanmak için 'tr-TR' locale'ini kullanıyoruz.
    return this.datePipe.transform(meetingDate, 'dd.MM.yyyy HH:mm', 'tr-TR');
  }


  ngOnInit() {
    this.meetings = this.meetingService.getMeetings();
    this.user$ = this.auth.currentUserSubject.asObservable();


  }

  viewMeetingNotes(meeting: Meeting) {
    // Toplantı notları görüntüleme işlemi burada
    console.log(meeting)
    this.selectedMeeting = meeting;
    this.modal.open();
  }

  updateMeetingLink(meeting: Meeting) {
    this.meetingService.updateMeeting(meeting);
  }

  


}

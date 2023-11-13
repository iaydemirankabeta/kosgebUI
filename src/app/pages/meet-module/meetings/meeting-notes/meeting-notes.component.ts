import { Component, Input, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MeetingNote } from './meeting-note.model';
import { MeetingNotesService } from './meeting-notes.service';
import { Meeting, MeetingNoteType } from '../meeting.model';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-meeting-notes',
  templateUrl: './meeting-notes.component.html',
  styleUrls: ['./meeting-notes.component.scss']
})
export class MeetingNotesComponent {
  meetingId: string;
  meetingNotes: MeetingNote[] = [];
  @Input() meeting: Meeting | undefined; // @Input ile gelen meeting verisi
  user$: Observable<UserType>;
  newNote:string = "";


  constructor(
    private route: ActivatedRoute,
    private meetingNotesService: MeetingNotesService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

    // URL'den toplantı kimliğini al
    this.meetingId = this.route.snapshot.paramMap.get('id')!;
    // Toplantı notlarını al
    this.loadMeetingNotes();

    
  }

  private loadMeetingNotes() {
    this.meetingNotes = this.meetingNotesService.getMeetingNotes(this.meetingId);
  }


  addMeetingNote(category: string,note:string,meetingId:string) {
    
    let type;
    switch (category) {
        case 'will':
        type = MeetingNoteType.Will
        break;
        case 'can':
        type = MeetingNoteType.Can
        break;
        case 'marketShare':
        type = MeetingNoteType.MarketShare
        break;
        case 'numberofProjects':
        type = MeetingNoteType.NumberofProjects
        break;
        case 'estimatedExportInformation':
        type = MeetingNoteType.EstimatedExportInformation
        break;
        case 'overseasOfficeInformation':
        type = MeetingNoteType.OverseasOfficeInformation
        break;
        case 'info':
        type = MeetingNoteType.Info
        break;
      default:
        type = MeetingNoteType.Info
        break;
    }
    
    this.meetingNotesService.addMeetingNote(
      {
        note : note,
        noteType : type,
        meetingId : meetingId,
        userId: this.auth.currentUserValue?.id! 
      }
    )
  }
  
  removeMeetingNote(noteId: number) {
    
  }
  




  

}

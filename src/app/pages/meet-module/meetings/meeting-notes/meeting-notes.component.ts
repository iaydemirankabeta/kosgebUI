import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MeetingNote } from './meeting-note.model';
import { MeetingNotesService } from './meeting-notes.service';
import { Meeting, MeetingNoteType } from '../meeting.model';
import { Observable, first } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meeting-notes',
  templateUrl: './meeting-notes.component.html',
  styleUrls: ['./meeting-notes.component.scss']
})
export class MeetingNotesComponent {
  meetingId: string;
  willMeetingNotes: MeetingNote[] = [];
  canMeetingNotes: MeetingNote[] = [];
  infoMeetingNotes: MeetingNote[] = [];
  numberOfMeetingNotes: MeetingNote[] = [];
  estimatedExportMeetingNotes: MeetingNote[] = [];
  overseasOfficeMeetingNotes: MeetingNote[] = [];
  marketShareOfficeMeetingNotes: MeetingNote[] = [];

  @Input() meetingNotes: MeetingNote[] | undefined; // @Input ile gelen meeting verisi
  @Input() meeting: Meeting | undefined; // @Input ile gelen meeting verisi

  user$: Observable<UserType>;
  newNote:string = "";
  deletedParticipants:any=[]
  deletedExcludeParticipants:any=[]

  constructor(
    private route: ActivatedRoute,
    private meetingNotesService: MeetingNotesService,
    private auth: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private meetingService:MeetingService
  ) {

  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.loadMeetingNotes();
    // URL'den toplantı kimliğini al
  }

  ngOnChanges(){
    this.loadMeetingNotes()
  }

  private loadMeetingNotes() {
    this.willMeetingNotes =  this.meetingNotes!.filter((x:MeetingNote) => x.type == MeetingNoteType.Will)
      this.canMeetingNotes =  this.meetingNotes!.filter((x:MeetingNote) => x.type == MeetingNoteType.Can)
      this.infoMeetingNotes =  this.meetingNotes!.filter((x:MeetingNote) => x.type == MeetingNoteType.Info)
      this.numberOfMeetingNotes =   this.meetingNotes!.filter((x:MeetingNote) => x.type == MeetingNoteType.NumberofProjects)
      this.marketShareOfficeMeetingNotes =  this.meetingNotes!.filter((x:MeetingNote) => x.type == MeetingNoteType.MarketShare)
      this.estimatedExportMeetingNotes =  this.meetingNotes!.filter((x:MeetingNote) => x.type == MeetingNoteType.EstimatedExportInformation)
      this.overseasOfficeMeetingNotes =  this.meetingNotes!.filter((x:MeetingNote) => x.type == MeetingNoteType.OverseasOfficeInformation)
      this.changeDetectorRef.detectChanges();
  }


  addMeetingNote(category: string,note:string,meetingId:string) {
    
    let type;
    switch (category) {
        case 'will':
        type = MeetingNoteType.Will
        console.log("will")
        break;
        case 'can':
        type = MeetingNoteType.Can
        console.log("will")
        break;
        case 'marketShare':
        type = MeetingNoteType.MarketShare
        console.log("marketshare")

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
    console.log(type)
    this.meetingNotesService.addMeetingNote(
      {
        note : note,
        type : type,
        meetingId : meetingId,
        userId: this.auth.currentUserValue?.id! 
      }
    ).pipe(first()).subscribe((res) => {
      this.meetingNotesService.getMeetingNotes(this.meeting?.id!).pipe(first()).subscribe((response:any) => {
        console.log(response.data,"res")
        this.meetingNotes = response.data;
        this.willMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.Will)
        this.canMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.Can)
        this.infoMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.Info)
        this.numberOfMeetingNotes =   response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.NumberofProjects)
        this.marketShareOfficeMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.MarketShare)
        this.estimatedExportMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.EstimatedExportInformation)
        this.overseasOfficeMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.OverseasOfficeInformation)
        this.changeDetectorRef.detectChanges();
      })
    })
  }
  
  removeMeetingNote(noteId: string) {
      this.meetingNotesService.deleteMeetingNote(noteId).pipe(first()).subscribe((res:any) => {
        this.meetingNotesService.getMeetingNotes(this.meeting?.id!).pipe(first()).subscribe((response:any) => {
          console.log(response.data,"res")
          this.meetingNotes = response.data;
          this.willMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.Will)
          this.canMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.Can)
          this.infoMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.Info)
          this.numberOfMeetingNotes =   response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.NumberofProjects)
          this.marketShareOfficeMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.MarketShare)
          this.estimatedExportMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.EstimatedExportInformation)
          this.overseasOfficeMeetingNotes =  response.data.filter((x:MeetingNote) => x.type == MeetingNoteType.OverseasOfficeInformation)
          this.changeDetectorRef.detectChanges();
        })
      })
  }
  checkInDeleted(participant:any){
    if(this.deletedParticipants.some((x:any) => x.id == participant.id) ||this.deletedExcludeParticipants.some((x:any) => x.id == participant.id)){
      console.log("true")
      return true;
    }
    else
      return false;
  }

  removeExcludeParticipant(participant:any){
    if(this.deletedExcludeParticipants.some((x:any) => x == participant)){
      this.deletedExcludeParticipants.splice(this.deletedParticipants.indexOf(participant),1);
    }
    else{
      this.deletedExcludeParticipants.push(participant);
    }
    this.changeDetectorRef.detectChanges();

  }

  removeParticipant(participant:any){
    if(this.deletedParticipants.some((x:any) => x == participant)){
      this.deletedParticipants.splice(this.deletedParticipants.indexOf(participant),1);
    }
    else{
      this.deletedParticipants.push(participant);
    }
    this.changeDetectorRef.detectChanges();

  }

  updateMeeting(){
    this.meetingService.updateMeeting({
      id:this.meeting?.id!,
      deletedExcludeUsers:Array.from(this.deletedExcludeParticipants,(x:any) => x.id),
      deletedParticipants:Array.from(this.deletedParticipants,(x:any) => x.id),

    }).pipe(first()).subscribe((res) => {
      this.deletedExcludeParticipants.forEach((element:any) => {
        this.meeting?.excludeParticipants.splice(this.meeting.excludeParticipants.indexOf(element),1);
      });
      this.deletedParticipants.forEach((element:any) => {
        this.meeting?.participants.splice(this.meeting.participants.indexOf(element),1);
      });
      this.deletedParticipants = [];
      this.deletedExcludeParticipants=[];
      this.changeDetectorRef.detectChanges();

    })
  }

  

}

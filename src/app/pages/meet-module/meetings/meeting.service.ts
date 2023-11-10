import { Injectable } from '@angular/core';
import { Meeting,Note } from './meeting.model';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/Company.model';
import { BaseResponse } from 'src/app/models/BaseResponse.model';
import { Observable } from 'ol';

const baseURL = "http://localhost:8080/Company"
export interface GetMeetingDTO{
  page:number;
  count:number;
  columnName?:string
  isDesc?:boolean;
  search?:string;
  startDate?:Date;
  endDate?:Date;
  companyId?:string;
  cityId?:string;
}
export interface Meeting{
  id:string;
  name:string;
  topic:string;
  meetingDate:Date;
  meetingLink:string;
  company:{name:string;}
  participants:{isim:string;soyisim:string;email:string;unvan:string};
  excludeParticipants:{isim:string;soyisim:string;email:string;unvan:string;companyName:string};
}
export interface MeetingNote{
  note:string;
  type:MeetingNoteType
}
export enum MeetingNoteType{
  Did=0,
  Can=1,
  Info=2,
  NumberofProjects=3
}

@Injectable({
  providedIn: 'root',
})

export class MeetingService {

  // meetingNotes adlı özelliği tanımlayın ve başlangıçta boş bir harita olarak başlatın
  private meetingNotes: Map<number, Note[]> = new Map<number, Note[]>();

  constructor(private httpClient : HttpClient) {
    // Notları örnek olarak burada doldurabilirsiniz.
    // Örneğin, Toplantı 1 için notlar:
    this.meetingNotes.set(1, [
      { content: 'Yapılacaklar 1', category: 'Yapılacaklar' },
      { content: 'Yapılabilecekler 1', category: 'Yapılabilecekler' },
      { content: 'Bilgi 1', category: 'Bilgi' },
    ]);
  }

  getMeetings(getMeetingDTO:GetMeetingDTO):any{
    return this.httpClient.post(baseURL+"/Meeting/GetMeetings",getMeetingDTO);
  }


  getMeetingNotes(meeting: Meeting):any{
    const meetingId = meeting.id;
    return this.httpClient.get(`${baseURL}/MeetingNote/${meeting.id}`)
  }
  private notes: Note[] = [];

  addMeeting(meeting: Meeting) {
    return this.httpClient.post(`${baseURL}/Meeting`,meeting);
  }

  addNote(note: Note) {
    return this.httpClient.post(`${baseURL}/MeetingNote`,note);  
  }
  

  updateMeeting(meeting: Meeting) {
    return this.httpClient.put(`${baseURL}/Meeting/${meeting.id}`,meeting);
  }
}

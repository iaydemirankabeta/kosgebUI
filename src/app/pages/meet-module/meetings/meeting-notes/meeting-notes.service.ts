import { Injectable } from '@angular/core';
import { MeetingNote } from './meeting-note.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { AuthService } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeetingNotesService {
  private meetingNotes: MeetingNote[] = [];
  headers: HttpHeaders;
  user:any
  constructor(private httpClient : HttpClient,private auth : AuthService) {
    this.user = this.auth.currentUserValue;
    this.headers = new HttpHeaders().set("Authorization","Bearer "+this.user!.authToken)
  }


  getMeetingNotes(meetingId: string): any {
    // Belirli bir toplantıya ait notları döndürme
    return this.httpClient.get(`${environment.apiUrl}/Company/MeetingNote/GetMeetingNotes/${meetingId}`,{headers:this.headers}).pipe(map(res => {
      return res
    }))
  }
  addMeetingNote(note: MeetingNote) {
    return this.httpClient.post(`${environment.apiUrl}/Company/MeetingNote`,note,
    {headers:this.headers}).pipe(map((res)=>{
      return res;
  }),catchError(error => {
      console.error('Post request error:', error);
      throw error;
    }))
  }

  deleteMeetingNote(id: string): any {
    // Belirli bir toplantıya ait notları döndürme
    return this.httpClient.get(`${environment.apiUrl}/Company/MeetingNote/DeleteNote/${id}`,{headers:this.headers}).pipe(map(res => {
      return res
    }))
  }


}

import { Injectable } from '@angular/core';
import { MeetingDTO } from './meeting.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from 'src/app/models/Company.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { AuthService, UserModel } from 'src/app/modules/auth';

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
  participants:{name:string;email:string;unvan:string}[];
  excludeParticipants:{name:string;email:string;unvan:string;companyName:string}[];
}
export interface MeetingNote{
  note:string;
  type:MeetingNoteType
}


export enum MeetingNoteType{
  Did=0,
  Can=1,
  Info=2,
  NumberofProjects=3,
  EstimatedExportInformation=4,
  OverseasOfficeInformation=5
}

@Injectable({
  providedIn: 'root',
})

export class MeetingService {
  headers:HttpHeaders;
  user: UserModel | undefined;
  // meetingNotes adlı özelliği tanımlayın ve başlangıçta boş bir harita olarak başlatın
  private meetingNotes: Map<number, MeetingNote[]> = new Map<number, MeetingNote[]>();

  constructor(private httpClient : HttpClient,private auth : AuthService) {
    this.user = this.auth.currentUserValue;
    this.headers = new HttpHeaders().set("Authorization","Bearer "+this.user!.authToken)
  }

  getMeetings(getMeetingDTO:GetMeetingDTO|null = null):any{
    return this.httpClient.post(environment.apiUrl+"/Company/Meeting/GetMeetings",getMeetingDTO,
    {headers:this.headers}).pipe(
      map((res)=>{
        console.log(res)
        return res;
    }));
  }

  searchCities(search:string):any{
    return this.httpClient.get(environment.apiUrl+"/Company/City/GetCities/"+search,
    {headers:this.headers}).pipe(
      map((res)=>{
        return res;
    }));
  }


  addMeeting(meeting: MeetingDTO) {
    return this.httpClient.post(environment.apiUrl+"/Company/Meeting",meeting,
    {headers:this.headers}).pipe(
      map((res)=>{
        return res;
    }));
  }
  

  updateMeeting(meeting: Meeting) {
    return this.httpClient.put(`${environment.apiUrl}/Company/Meeting/${meeting.id}`,meeting);
  }

  searchCompanies(name:string):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/Company/Company/SearchCompanies",{
      Search:name,
      Page:1,
      Count:50
    }).pipe(
      map((searchResults:any) =>{
        return searchResults;
      })
    );
  }
  
  
  searchUsers(companyId:string,name:string =""):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/Identity/Account/SearchUsers",{
      Search:name,
      CompanyId:companyId,
      Page:1,
      Count:50
    }).pipe(
      map((searchResults:any) =>{
        return searchResults;
      })
    );
  }
}

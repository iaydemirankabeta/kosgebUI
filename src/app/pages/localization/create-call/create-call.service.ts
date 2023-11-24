import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService, UserModel } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';
import { Observable, lastValueFrom, map } from 'rxjs';
import { GetLocalizationInsertResponse } from './create-call.model';

@Injectable({
  providedIn: 'root'
})
export class CreateCallService {
  headers:HttpHeaders;
  user: UserModel | undefined;
  constructor(private httpClient : HttpClient,private auth : AuthService) {
    this.user = this.auth.currentUserValue;
    this.headers = new HttpHeaders().set("Authorization","Bearer "+this.user!.authToken)
  }

  GetLocalizationInsert(companyId: string): Observable<GetLocalizationInsertResponse> {
    return this.httpClient.get<GetLocalizationInsertResponse>(environment.apiUrl + "/Localization/Localization/GetLocalizationInsert?companyId=" + companyId,
       {headers:this.headers}).pipe(
      map((result:GetLocalizationInsertResponse)=>{
        return result;
    }));
          
  }


  GetTaslak():Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + "/Localization/DemandCall/GetSectorsForDemandCall" ,
       {headers:this.headers}).pipe(
      map((result:any)=>{
        return result;
    }));
          
  }
  
}

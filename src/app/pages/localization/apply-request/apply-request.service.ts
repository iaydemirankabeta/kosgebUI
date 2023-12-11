import { Injectable } from '@angular/core';
import { GetApplyDemandCallDataModel } from './apply-request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, UserModel } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class DemandCallService{
  headers:HttpHeaders;
  user : UserModel | undefined;
  httpClient: any;
  
  constructor(private http: HttpClient, private auth : AuthService){
    this.user = this.auth.currentUserValue;
    this.headers = new HttpHeaders().set("Authorization","Bearer "+ this.user!.authToken)
  }

  getApplyDemandCall(getApplyDemandCallDTO:GetApplyDemandCallDataModel|null = null):any{
    return this.httpClient.post(environment.apiUrl+"/Localization/DemandCall/GetApplyDemandCallData",getApplyDemandCallDTO,
    {headers:this.headers}).pipe(
      map((res)=>{
        return res;
    }));
  }

}
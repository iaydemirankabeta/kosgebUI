import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserModel } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyChoiceService {

  constructor(private httpClient : HttpClient) { 

  }

  CompanySelect(companyId:string,user:UserModel):Observable<any>{
    let headers = new HttpHeaders().set("Authorization","Bearer "+user.authToken)
    return this.httpClient.post(`${environment.apiUrl}/Identity/Account/GetUserInfo`,{
      userName:user.username,
      companyId
    },{
      headers
    }).pipe(
      map((apiData: any) => {
        console.log(apiData,"apidata")
        return apiData;
      })
    )
  }


}

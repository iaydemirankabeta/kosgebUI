import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactDTO, GetContactDTO } from './contact.model';
import { AuthService, UserModel } from 'src/app/modules/auth';

@Injectable({
  providedIn: 'root'
})
export class MeetPlanService {
  headers:HttpHeaders;
  user: UserModel | undefined;
  constructor(private httpClient : HttpClient,private auth : AuthService) {
    this.user = this.auth.currentUserValue;
    this.headers = new HttpHeaders().set("Authorization","Bearer "+this.user!.authToken)
  }

  addContact(contactModel:ContactDTO){
    return this.httpClient.post(`${environment.apiUrl}/Company/Contact/AddContact`,contactModel,
    {headers:this.headers}).pipe((response => {
      return response;
    }));
  }
  getContacts(){
    return this.httpClient.get(`${environment.apiUrl}/Company/Contact/GetContacts`,
    {headers:this.headers}).pipe((response => {
      return response;
    }));
  }
  deleteContact(id:string){
    return this.httpClient.delete(`${environment.apiUrl}/Company/Contact/${id}`,
    {headers:this.headers}).pipe((response => {
      return response;
    }));
  }
}



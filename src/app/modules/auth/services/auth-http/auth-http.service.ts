import { Injectable } from '@angular/core';
import { Observable, map,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';
import { UsersTable } from 'src/app/_fake/users.table';

const API_USERS_URL = `${environment.apiUrl}/Identity/Account`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(Username: string, Password: string): Observable<any> {
    return this.http.post<AuthModel>(`${API_USERS_URL}/login`, {
      Username,
      Password,
    }).pipe(
      map((apiData: any) => {
        const user = new UserModel();
        user.loginSetUser(apiData); // loginSetUser fonksiyonunu kullanarak API yanıtını işleyin
        console.log(user);
        return user;
      })
    );
    
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
      email,
    });
  }

  /*getUserByToken(token: string): Observable<UserModel> {
    console.log(token);

    const httpHeaders = new HttpHeaders({
      Authorization: `${token}`,
    });
    return this.http.get<UserModel>(`${API_USERS_URL}/me`, {
      headers: httpHeaders,
    });
  }*/

  getUserByToken(token: string): Observable<UserModel | undefined> {
    const user = UsersTable.users.find((u: UserModel) => {

      return token;
      
    });


    if (!user) {
      return of(undefined);
    }

    return of(user);
  }
  
}

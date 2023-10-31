import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class folderLoad {

  constructor(private http: HttpClient) { }

  dosyaYukle(dosya: File): Promise<any> {
    const formData = new FormData();
    formData.append('dosya', dosya);

    return this.http.post<any>('API_URL', formData).toPromise();
  }
}
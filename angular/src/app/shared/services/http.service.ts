import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://localhost:7259/api';

  constructor(private http: HttpClient) { }

  post(url: string, body: any): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/${url}`, body,{headers}).toPromise();
  }

  get(url: string): Promise<any> {
    return this.http.get(`${this.apiUrl}/${url}`).toPromise();
  }

  delete(url: string): Promise<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*'
    });
    return this.http.delete(`${this.apiUrl}/${url}`, {headers}).toPromise();
  }

}

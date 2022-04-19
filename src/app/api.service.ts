import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverURL: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  get(url: string) : Observable<any> {
    return this.http.get(this.serverURL + url);
  }

  post(url: string, data: any) : Observable<any> {
    return this.http.post(this.serverURL + url, data);
  }
}

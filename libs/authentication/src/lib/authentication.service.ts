import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// url cua gateway
const url = "http://localhost:8051/authorization";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    // do something here
  }

  login(formData: any): Observable<any> {
    console.log(formData);
    return this.http.post(url + "/login", formData);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(url + "/user/" + id);
  }
}

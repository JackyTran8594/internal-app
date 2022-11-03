import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationModule } from './authentication.module';

const url = "http://10.2.6.142:9200/api";

@Injectable({
  providedIn: AuthenticationModule
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    // do something here
  }

  login(formData: any): Observable<any> {
    return this.http.post(url + "/auth", formData);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(url + "/user/" + id);
  }
}

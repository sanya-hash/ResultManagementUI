import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost:8084/user"

  login(authRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, authRequest);
  }

}

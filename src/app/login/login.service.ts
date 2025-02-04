import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost:8088/user"

    getRole(): string | null {
    return localStorage.getItem('role'); // Retrieve role
  }

    isAuthenticated(): boolean {
            console.log(!!localStorage.getItem('token'));

    return !!localStorage.getItem('token'); // Check if token exists
  }

  login(authRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, authRequest);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  getUser():void{
    localStorage.getItem('name');
  }

}

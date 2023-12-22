import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Student } from '../student.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private apiUrl="http://localhost:8084/result"
  constructor(private http: HttpClient) { }
  getResults(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiUrl}`);

  }

  addResult(student: Student){
    return this.http.post(`${this.apiUrl}`,student)
  }

  getResult(rollno:any){
    return this.http.get(`${this.apiUrl}/${rollno}`);
  }

  updateResult(student:Student){
    return this.http.put(`${this.apiUrl}`,student);
  }

  deleteResult(rollno:any){
    return this.http.delete(`${this.apiUrl}/${rollno}`);
  }

}

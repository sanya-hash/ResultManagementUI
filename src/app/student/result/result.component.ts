import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student.model';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  students: Student={
    rollno: 0,
    name: '',
    dob: '',
    score: 0,

  }
 ngOnInit(): void {
     this.students= history.state.data;
 }
 constructor(){

 }
}

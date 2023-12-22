import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Student } from 'src/app/student.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private service: CommonServiceService, private router : Router ){
  
  }
  students: Student = {
    rollno: null,
    name: '',
    dob: '',
    score: null,
  };

  submit(){
  this.service.getResult(this.students.rollno).subscribe((response:any)=>{
    if(this.students.name != response.name){
      console.log("Invalid Name");
    }else{
    this.router.navigate(['student/result'],{state:{data:response}});
      
    }
  },
  (error)=>{
    console.log('error')
  })

  }
}

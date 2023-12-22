import { Component } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Student } from 'src/app/student.model';
@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent {

  constructor(private service :CommonServiceService){}
  students: Student = {
    rollno: null,
    name: '',
    dob: '',
    score: null,
  };
  submit(){
    this.service.addResult(this.students).subscribe((result)=>{
      window.alert("New result added!")
      console.log("uploaded Successfully");
    },
    (error)=>{
      console.log("Error");
    })
  }
}

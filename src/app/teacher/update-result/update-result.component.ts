import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Student } from 'src/app/student.model';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit{

  constructor(private service: CommonServiceService, private route: ActivatedRoute) { }
  students: Student = {
    rollno: 0,
    name: '',
    dob: '',
    score: 0,
  };
  
  ngOnInit(): void {
      this.service.getResult(this.route.snapshot.paramMap.get('rollno')).subscribe((result:any)=>{
        // console.log(result);
        this.students = result;
      })
  }
  submitUpdated() {
    this.service.updateResult(this.students).subscribe((result) => {
      console.log("updated Successfully");
    },
      (error) => {
        console.log("Error");
      })
  }
}

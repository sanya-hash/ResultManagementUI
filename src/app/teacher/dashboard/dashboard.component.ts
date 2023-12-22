import { Component , OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Student } from 'src/app/student.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  students: Student[] = [];
  


  constructor(private c: CommonServiceService, private router: Router){}



  ngOnInit(): void {
    this.getAllResults();
  }

  getAllResults(): void {
    this.c.getResults().subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {
        console.error('Error fetching results:', error);
      }
    );
  }

  update(rollno:any){
    this.router.navigate(['teacher/update/'+rollno]);
  }

  delete(rollno:any){
    this.c.deleteResult(rollno).subscribe((result:any)=>{
      //console.log("Deleted");
      //this.location.reload();
      this.students = this.students.filter(student => student.rollno !== rollno)
    },
    (error)=>{
      console.error('error');
    });
  }
}

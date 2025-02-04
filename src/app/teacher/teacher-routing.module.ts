import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddResultComponent } from './add-result/add-result.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import { authGuard } from '../guard/auth.guard';

const routes: Routes = [
  {path:'dashboard', 
    component:DashboardComponent, 
       canActivate: [authGuard], 
 data: { role: 'teacher' } // Only accessible to teachers
},
  { path: 'add', component: AddResultComponent ,     
      canActivate: [authGuard], 
 data: { role: 'teacher' } // Only accessible to teachers
},

  { path: 'update/:rollno', component: UpdateResultComponent,   
        canActivate: [authGuard], 
 data: { role: 'teacher' } // Only accessible to teachers
 },{
    path:'**',
    redirectTo:'login'
 }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

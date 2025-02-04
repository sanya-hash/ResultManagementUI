import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModel } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { authGuard } from '../guard/auth.guard';
const routes: Routes = [
  {
path:'',
component:DashboardComponent
  },
  {path:'dashboard', component:DashboardComponent,
    canActivate: [authGuard], 
    data: { role: 'student' } // Only accessible to students
},
  {path:'result', 
    component:ResultComponent,
      canActivate: [authGuard], 
    data: { role: 'student' } // Only accessible to students
},{
      path:'**',
    redirectTo:'login'

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

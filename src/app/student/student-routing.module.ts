import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModel } from '@angular/forms';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'result', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

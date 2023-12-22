import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { UpdateResultComponent } from './update-result/update-result.component';
import { AddResultComponent } from './add-result/add-result.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateResultComponent,
    AddResultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule
  ]
})
export class TeacherModule { }

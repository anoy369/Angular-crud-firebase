import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeeListComponent,
    EmployeeProfileComponent
  ],
  exports: [
    AddEmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class EmployeeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeeListComponent
  ],
  exports: [
    AddEmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule { }

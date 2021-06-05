import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  exports: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule { }

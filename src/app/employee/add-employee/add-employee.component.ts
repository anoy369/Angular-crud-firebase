import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../sevices/crud.service';
import { DEFAULT_EMPLOYEE, Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeName: string;
  employeeAge: number;
  employeePhone: number;
  employeeDesignation: string;
  employeeAddress: string;
  employeeEmail: string;
  employeeLinkedin: string;
  message = false;
  confirmation = false;


  constructor(private crudService: CrudService){

  }

  addEmployee(): any {
    const employee: Employee = DEFAULT_EMPLOYEE;

    employee.name = this.employeeName;
    employee.age = this.employeeAge;
    employee.phone = this.employeePhone;
    employee.designation = this.employeeDesignation;
    employee.address = this.employeeAddress;
    employee.email = this.employeeEmail;
    employee.linkedin = this.employeeLinkedin;

    this.crudService.createEmployee(employee).then(res => {
      this.employeeName = '';
      this.employeeAge = undefined;
      this.employeeAddress = '';
      this.employeeDesignation = '';
      this.employeePhone = undefined;
      this.employeeEmail = '';
      this.employeeLinkedin = '';

      console.log(res);
      this.message = true;
      this.confirmation = false;

    }).catch(error => {
      console.log(error);
    });
    this.message = false;
    console.log(this.message);
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.confirmation = true;
  }
}

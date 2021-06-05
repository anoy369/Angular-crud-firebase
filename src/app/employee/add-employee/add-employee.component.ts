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
  employeeAddress: string;
  message: string;

  constructor(public crudService: CrudService){

  }

  addEmployee(): any {
    const employee: Employee = DEFAULT_EMPLOYEE;

    employee.name = this.employeeName;
    employee.age = this.employeeAge;
    employee.address = this.employeeAddress;

    console.log(employee);

    this.crudService.createEmployee(employee).then(res => {
      this.employeeName = '';
      this.employeeAge = undefined;
      this.employeeAddress = '';

      console.log(res);
      this.message = 'Employee data saved';

    }).catch(error => {
      console.log(error);
    });
  }
  ngOnInit(): void {
  }

}

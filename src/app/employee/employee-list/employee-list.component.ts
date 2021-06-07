import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../sevices/crud.service';
import {Employee} from '../../interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getEmployees().subscribe( employees => {
      console.log(employees);
      this.employees = employees;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../sevices/crud.service';
import { Employee } from '../../interfaces/employee';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  editIcon = faPencilAlt;
  deleteIcon = faTrashAlt;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getEmployees().subscribe( employees => {
      console.log(employees);
      this.employees = employees;
    });
  };

  onDelete($event: MouseEvent, employee: Employee): void {
    this.crudService.deleteEmployee(employee);

    console.log(employee.id);
  }
}

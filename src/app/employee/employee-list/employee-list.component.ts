import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../sevices/crud.service';
import { Employee } from '../../interfaces/employee';
import { faCompressAlt, faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  editIcon = faPencilAlt;
  collapsIcon = faCompressAlt;
  deleteIcon = faTrashAlt;
  editState = false;
  employeeToEdit: Employee;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getEmployees().subscribe( employees => {
      console.log(employees);
      this.employees = employees;
    });
  }

  onDelete($event: MouseEvent, employee: Employee): void {
    this.crudService.deleteEmployee(employee);
    this.onCollapse();
  }

  onEdit($event: MouseEvent, employee: Employee): void {
      this.editState = true;
      this.employeeToEdit = employee;
  }

  onCollapse(): void{
      this.editState = false;
      this.employeeToEdit = null;
  }

  onUpdate($event: MouseEvent, employee: Employee): void {
    this.crudService.updateEmployee(employee);
    this.onCollapse();
  }
}

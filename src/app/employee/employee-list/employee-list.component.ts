import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../sevices/crud.service';
import { Employee } from '../../interfaces/employee';
import { faCompressAlt, faEnvelope, faMapMarkedAlt, faPencilAlt, faPhoneAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  editIcon = faPencilAlt;
  collapseIcon = faCompressAlt;
  deleteIcon = faTrashAlt;
  mapIcon = faMapMarkedAlt;
  emailIcon = faEnvelope;
  phoneIcon = faPhoneAlt;
  editState = false;
  employeeToEdit: Employee;
  confirmation = false;

  constructor(private crudService: CrudService,
              private router: Router) {}

  ngOnInit(): void {
    this.crudService.getEmployees().subscribe( employees => {
      console.log(employees);
      this.employees = employees;
    });
  }

  onDelete($event: MouseEvent, employee: Employee): void {
    this.crudService.deleteEmployee(employee);
    this.onCollapse();
    this.confirmation = false;
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

  onClick(): void {
    this.confirmation = true;
  }

  goToProfile(): void {
    this.router.navigate(['profile']);
  }
}

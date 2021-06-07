import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Employee } from '../interfaces/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  employees: Observable<any[]>;

  constructor(public fireservice: AngularFirestore) {}

  createEmployee(employee: Employee): any{
    return this.fireservice.collection('Employee').add(employee);
  }

  getEmployees(): any{
    this.employees = this.fireservice.collection('Employee').valueChanges();
    return this.employees;
  }
}

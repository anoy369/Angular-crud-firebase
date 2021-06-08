import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Employee } from '../interfaces/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  employees: Observable<any[]>;
  employeeDoc: AngularFirestoreDocument<Employee>;

  constructor(public fireservice: AngularFirestore) {
  this.fireservice.collection('Employee').get()
      .subscribe((snapshot) => {
        snapshot.forEach(doc => {});
      });
  }

  createEmployee(employee: Employee): any{
    employee.id = this.fireservice.createId();
    return this.fireservice.collection('Employee').doc(employee.id).set(employee);
  }

  getEmployees(): any{
    this.employees = this.fireservice
      .collection('Employee', ref => ref.orderBy('name', 'asc')).valueChanges();
    return this.employees;
  }

  deleteEmployee(employee: Employee): any {
    this.employeeDoc = this.fireservice.doc(`Employee/${employee.id}`);
    return this.employeeDoc.delete();
  }

  updateEmployee(employee: Employee): any {
    this.employeeDoc = this.fireservice.doc(`Employee/${employee.id}`);
    return this.employeeDoc.update(employee);
  }
}

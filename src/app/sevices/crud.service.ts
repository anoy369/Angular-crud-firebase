import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Employee } from '../interfaces/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  employees: Observable<any[]>;

  constructor(public fireservice: AngularFirestore) {
  this.fireservice.collection('Employee').get()
      .subscribe((snapshot) => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      });
  }

  createEmployee(employee: Employee): any{
    employee.id = this.fireservice.createId();
    return this.fireservice.collection('Employee').doc(employee.id).set(employee);
  }

  getEmployees(): any{
    this.employees = this.fireservice.collection('Employee').valueChanges();
    return this.employees;
  }
}

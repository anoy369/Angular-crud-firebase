import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Employee} from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservice: AngularFirestore) { }

  createEmployee(employee: Employee): any{
    return this.fireservice.collection('Employee').add(employee);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../interfaces/employee';
import { AngularFireDatabaseModule } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservice: AngularFirestore, private firedatabase: AngularFireDatabaseModule) { }

  createEmployee(employee: Employee): any{
    return this.fireservice.collection('Employee').add(employee);
  }
}

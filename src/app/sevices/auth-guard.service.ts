import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from '../interfaces/users';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  isLoggedIn = false;
  users: Observable<any[]>;
  user: User[]

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private fireStore: AngularFirestore) {

    this.getUser().subscribe( data => {
      this.user = data;
    });
  }

    getUser(): any{
      this.users = this.fireStore
        .collection('users', ref => ref.orderBy('id', 'asc')).valueChanges();
      return this.users;
    }

    login(email, password): any{
      for (const user of this.user) {
        if (user.email === email && user.password === password) {
          const userRole = user.role;
          const userId = user.id;
          if (userRole === 'admin'){
            localStorage.setItem('user', JSON.stringify(userRole));
          }else{
            localStorage.setItem('user', JSON.stringify(userId));
          }
        }
      }
      this.router.navigateByUrl('/');
    }

    signUp(user: User): any{
      user.id = this.fireStore.createId();
      return this.fireStore.collection('users').doc(user.id).set(user);
    }

    logOut(): void{
      this.fireAuth.signOut();
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      if (this.isLoggedIn === false){
        window.location.reload();
      }
    }

}

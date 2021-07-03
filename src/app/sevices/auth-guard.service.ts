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
  user: any;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private fireStore: AngularFirestore) { }

    login(): any{
      this.user = this.fireStore
        .collection('users', ref => ref.orderBy('id', 'asc')).valueChanges();
      return this.user;
      // this.fireAuth.signInWithEmailAndPassword(email, password).then(value => {
      //   console.log('You are logged in');
      //   this.isLoggedIn = true;
      //   localStorage.setItem('user', JSON.stringify(value.user));
      //
      //   const data: boolean = this.isLoggedIn;
      //   this.router.navigate([''], {
      //     queryParams: {data}
      //   });
      //   if (this.isLoggedIn){
      //     this.router.navigateByUrl('');
      //   }
      // }).catch(err => {
      //   console.log('Something went wrong:', err.message);
      // });
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

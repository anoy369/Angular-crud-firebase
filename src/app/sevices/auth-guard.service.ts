import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  isLoggedIn = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router) { }

    login(email: string, password: string): void{
      this.fireAuth.signInWithEmailAndPassword(email, password).then(value => {
        console.log('You are logged in');
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(value.user));

        const data: boolean = this.isLoggedIn;
        this.router.navigate([''], {
          queryParams: {data}
        });
        if (this.isLoggedIn){
          this.router.navigateByUrl('');
        }
      }).catch(err => {
        console.log('Something went wrong:', err.message);
      });
    }

    signUp(email: string, password: string): void{
      this.fireAuth.createUserWithEmailAndPassword(email, password).then(value => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(value.user));
        if (this.isLoggedIn){
          this.router.navigateByUrl('');
        }
      });
    }

    logOut(): void{
      this.fireAuth.signOut();
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      if (this.isLoggedIn === false){
        this.router.navigateByUrl('');
      }
    }

}

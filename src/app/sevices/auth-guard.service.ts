import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  isLoggedIn = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router) { }

}

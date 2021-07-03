import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../sevices/auth-guard.service';
import {DEFAULT_USER, User} from '../interfaces/users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;

  constructor(private authService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(): any{
    const user: User = DEFAULT_USER;

    user.email = this.email;
    user.password = this.password;

    this.authService.signUp(user).then( res => {
      this.email = '';
      this.password = '';
      this.router.navigateByUrl('/signIn');
    }).catch(error => {
      console.log(error);
    });
  }
}

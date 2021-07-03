import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../sevices/auth-guard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthGuardService) { }

  ngOnInit(): void {
  }

  onSignUp(email, password): void{
    this.authService.signUp(email, password);
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthGuardService} from '../../sevices/auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {}

  onSignIn(email, password): any{
    this.authService.login(email, password);
  }
}

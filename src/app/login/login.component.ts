import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthGuardService} from '../sevices/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthGuardService) { }

  ngOnInit(): void {
  }

  onSignIn(email, password): void{
    this.authService.login(email, password);
    if (this.authService.isLoggedIn){
      console.log('Your are logged In');
    }
  }
}

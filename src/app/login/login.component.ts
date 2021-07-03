import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthGuardService} from '../sevices/auth-guard.service';
import {User} from '../interfaces/users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User[];
  email: string;
  password: string;

  constructor(private authService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
    this.authService.login().subscribe(user => {
      this.user = user;
    });
  }

  onSignIn(email, password): any{
    for (const user of this.user) {
      if (user.email === email && user.password === password) {
        const userRole = user.role;
        const userId = user.id;
        if (userRole === 'admin'){
          localStorage.setItem('user', JSON.stringify(userRole));
        }else{
          localStorage.setItem('user', JSON.stringify(userId));
        }
        this.router.navigateByUrl('');
      }
    }
  }
}

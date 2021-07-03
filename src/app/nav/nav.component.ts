import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../sevices/auth-guard.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: any;

  constructor(private  authService: AuthGuardService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  onLogout(): void{
    this.authService.logOut();
  }

}

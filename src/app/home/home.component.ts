import {Component, OnInit, Input} from '@angular/core';
import {AuthGuardService} from '../sevices/auth-guard.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isShow = false;

  user: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthGuardService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  newEmployee(): void {
    this.isShow = !this.isShow;
  }

}

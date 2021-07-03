import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  employeeId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

}

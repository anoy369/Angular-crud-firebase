import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeProfileComponent} from './employee/employee-profile/employee-profile.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'profile',
      component: EmployeeProfileComponent
    },
    {
      path: 'signIn',
      component: LoginComponent
    },
    {
      path: 'signUp',
      component: SignupComponent
    }]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

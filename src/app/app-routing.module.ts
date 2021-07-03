import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './user/profile/profile.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'profile/:id',
      component: ProfileComponent
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

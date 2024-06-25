import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent,SignupComponent,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isLogin: boolean = true;

  showLogin() {
    this.isLogin = true;
  }

  showSignup() {
    this.isLogin = false;
  }

}

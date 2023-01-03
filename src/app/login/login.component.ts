import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = 'Enter username';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  handleLogin() {
    console.log(this.username);
    if (this.username === 'Test' && this.password === 'Test') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}

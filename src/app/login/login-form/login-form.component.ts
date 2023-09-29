import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(private router: Router) {}

  details = {
    email: '',
    password: '',
  };

  loginHandler() {
    this.router.navigate(['/projects']);
  }
}

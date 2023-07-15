import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailCtrl: FormControl;
  loginFormGroup: FormGroup;

  constructor(private router: Router) {
    this.emailCtrl = new FormControl('randika@local', [
      Validators.required,
      Validators.email,
    ]);

    this.loginFormGroup = new FormGroup({
      email: this.emailCtrl,
      password: new FormControl('passCCord1@2#', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onLogin() {
    console.log(this.loginFormGroup.value);
    this.router.navigate(['/admin']);
  }
}

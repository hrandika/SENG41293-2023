import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UpdateUser } from '../../state/app/app.actions';
import { catchError, from, tap, throwError } from 'rxjs';

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
  private angularFireAuth = inject(AngularFireAuth);

  constructor(private router: Router, private store: Store) {
    this.emailCtrl = new FormControl('randika@dilagro.lk', [
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
    const password = this.loginFormGroup.get('password')?.value;
    const authPromise = this.angularFireAuth.signInWithEmailAndPassword(
      this.emailCtrl.value,
      password
    );

    from(authPromise)
      .pipe(
        tap((credential) => {
          if (credential.user)
            this.store.dispatch(new UpdateUser(credential.user));
        }),
        tap(() => this.router.navigate(['/admin'])),
        catchError((e) => {
          return throwError(() => e);
        })
      )
      .subscribe();
  }
}

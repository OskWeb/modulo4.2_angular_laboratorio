import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  loginValid = false;
  formSend = false;

  myForm = this.fb.group({
    username: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
    }),
    password: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ],
    }),
  });

  login() {
    this.myForm.markAllAsTouched();
    if (this.myForm.errors == null && this.myForm.valid) {
      const loginState = this.authService.login(
        this.myForm.value.username ?? '',
        this.myForm.value.password ?? ''
      );
      this.formSend = true;
      if (loginState) {
        console.log('Login realizado con exito!!');
        this.router.navigate(['/dashboard']);
        this.loginValid = true;
      } else {
        this.loginValid = false;
      }
    }
  }

  showError() {
    const { touched, dirty, errors } = this.myForm;
    return touched && dirty && errors;
  }
}

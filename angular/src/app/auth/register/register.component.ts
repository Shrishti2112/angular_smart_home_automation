import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }
  onSubmit() {
    this.errorMessage ='';
    if (this.loginForm.valid) {
      const { username, password, confirmpassword } = this.loginForm.value;
      if (password !== confirmpassword) {
        this.errorMessage = "Password and Confirm Password do not match.";
        return;
      }
      this.authService.register(username, password).then(response => {
        this.router.navigate(['/auth/login']);
      }).catch(error => {
        console.error(error);
      });
    }
  }
}

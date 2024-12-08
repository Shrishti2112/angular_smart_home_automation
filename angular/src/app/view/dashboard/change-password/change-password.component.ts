import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  username: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.username = localStorage.getItem("user")||'';
    this.loginForm = this.fb.group({
      username: [this.username, Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.changePassword(username, password).then(response => {
        alert('Password has updated successfully!');
        this.router.navigate(['/dashboard']);
      }).catch(error => {
        console.error(error);
        this.errorMessage = 'something went wrong!';
      });
    }else{
      this.errorMessage = 'please enter new password';
    }
  }
}

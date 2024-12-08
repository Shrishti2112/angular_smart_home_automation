import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-automation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-edit-automation.component.html',
  styleUrl: './add-edit-automation.component.css'
})
export class AddEditAutomationComponent {
  automationForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.automationForm = this.fb.group({
      automationId: [0, Validators.required],
      deviceId: ['', Validators.required],
      triggerEvent: ['', Validators.required],
      action: ['', Validators.required],
      timeSchedule: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.automationForm.valid) {
      const automation = this.automationForm.value;
      this.authService.addAutomation(automation).then(response => {
        alert('Automation and Scheduling added successfully!');
        this.router.navigate(['/dashboard/automation-management']);
      }).catch(error => {
        console.error(error);
    this.errorMessage = 'Failed to add automation and scheduling!';
    });
    } else {
    this.errorMessage = 'Please fill in all required fields!';
    }
    }
}

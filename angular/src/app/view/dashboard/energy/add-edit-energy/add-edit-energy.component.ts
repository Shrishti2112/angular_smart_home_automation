import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-energy',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-edit-energy.component.html',
  styleUrl: './add-edit-energy.component.css'
})
export class AddEditEnergyComponent {
  energyConsumptionForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.energyConsumptionForm = this.fb.group({
      usageId: [0, Validators.required],
      deviceId: ['', Validators.required],
      consumption: ['', Validators.required],
      timePeriod: ['', Validators.required],
      energyCost: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.energyConsumptionForm.valid) {
      const energyConsumption = this.energyConsumptionForm.value;
      this.authService.addEnergyConsumption(energyConsumption).then(response => {
        alert('Energy consumption added successfully!');
        this.router.navigate(['/dashboard/energy-management']);
      }).catch(error => {
        console.error(error);
        this.errorMessage = 'Failed to add energy consumption!';
      });
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }

}

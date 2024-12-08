import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-device-maintainance',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-edit-device-maintainance.component.html',
  styleUrl: './add-edit-device-maintainance.component.css'
})
export class AddEditDeviceMaintainanceComponent {
  energyMaintenanceForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.energyMaintenanceForm = this.fb.group({
      maintenanceId: [0, Validators.required],
      deviceId: ['', Validators.required],
      maintenanceType: ['', Validators.required],
      lastServiceDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.energyMaintenanceForm.valid) {
      const energyMaintenance = this.energyMaintenanceForm.value;
      this.authService.addEnergyMaintenance(energyMaintenance).then(response => {
        alert('Energy maintenance added successfully!');
        this.router.navigate(['/dashboard/device-maintainance']);
      }).catch(error => {
        console.error(error);
        this.errorMessage = 'Failed to add energy maintenance!';
      });
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }

}

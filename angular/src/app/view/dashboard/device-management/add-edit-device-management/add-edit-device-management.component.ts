import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-device-management',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-edit-device-management.component.html',
  styleUrl: './add-edit-device-management.component.css'
})
export class AddEditDeviceManagementComponent {
  deviceForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.deviceForm = this.fb.group({
      deviceId: [0, Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      location: ['', Validators.required],
      status: ['', Validators.required],
      configurationSettings: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger;
    if (this.deviceForm.valid) {
      const device = {
        deviceId: this.deviceForm.get('deviceId')?.value,
        name: this.deviceForm.get('name')?.value,
        type: this.deviceForm.get('type')?.value,
        location: this.deviceForm.get('location')?.value,
        status: this.deviceForm.get('status')?.value,
        configurationSettings: this.deviceForm.get('configurationSettings')?.value,
        lastUpdated: new Date(),
        roomId: 0,
        room: {
          roomId: 0,
          name: "",
          floor: 0,
          zoneId: 0,
          roomType: 0,
          zone: {
            zoneId: 0,
            name: "",
            rooms: [""]
          },
          devices: [""]
        },
        deviceMaintenances: [
          {
            maintenanceId: 0,
            deviceId: 0,
            device: "",
            maintenanceType: "",
            lastServiceDate: new Date(),
            status: ""
          }
        ]
      };
  
      this.authService.addDevice(device).then(response => {
        this.router.navigate(['/dashboard/device-management']);
      }).catch(error => {
        console.error(error);
        this.errorMessage = 'Failed to add device!';
      });
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }
  addDevice(){
    this.router.navigate(['/dashboard/add-edit-device']);
  }
}

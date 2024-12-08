import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-maintenance',
  standalone: true,
  imports: [NgFor],
  templateUrl: './device-maintenance.component.html',
  styleUrl: './device-maintenance.component.css'
})
export class DeviceMaintenanceComponent {
  energyMaintenances: any;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.getEnergyMaintenances().then(response => {
      this.energyMaintenances = response;
    }).catch(error => {
      console.error(error);
    });
  }

  addNew() {
    this.router.navigate(['/dashboard/add-edit-device-maintainance']);
  }

  editEnergyMaintenance(energyMaintenance: any) {
    // Implement edit logic here
  }

  deleteEnergyMaintenance(energyMaintenance: any) {
    // Implement delete logic here
  }
}

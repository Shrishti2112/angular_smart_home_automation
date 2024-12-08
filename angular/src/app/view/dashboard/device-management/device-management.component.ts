import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-device-management',
  standalone: true,
  imports: [NgFor],
  templateUrl: './device-management.component.html',
  styleUrl: './device-management.component.css'
})
export class DeviceManagementComponent {
  listData:any;
  constructor(private authService: AuthService, private router: Router) {
    this.getDeviceManagement();
  }

  getDeviceManagement(){
    debugger
    this.authService.getDeviceManagement().then(response => {
      this.listData = response;
    }).catch(error => {
      console.error(error);
      
    });
  }
  addDevice(){
    this.router.navigate(['/dashboard/add-edit-device']);
  }
  deleteRow(deviceId:number){
    this.authService.deleteDevice(deviceId).then(response => {
      this.getDeviceManagement();
    }).catch(error => {
      console.error(error);
      
    });
  }
}

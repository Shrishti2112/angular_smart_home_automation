import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-security-surveillance',
  standalone: true,
  imports: [NgFor],
  templateUrl: './security-surveillance.component.html',
  styleUrl: './security-surveillance.component.css'
})
export class SecuritySurveillanceComponent implements OnInit {
  securityDevices: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getSecurityDevices().then(response => {
      this.securityDevices = response;
    }).catch(error => {
      console.error(error);
    });
  }

  addNew() {
    // Implement add new logic here
  }

  editSecurityDevice(securityDevice: any) {
    // Implement edit logic here
  }

  deleteSecurityDevice(securityDevice: any) {
    // Implement delete logic here
  }
}

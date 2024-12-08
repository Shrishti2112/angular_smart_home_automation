import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private httpService: HttpService) { }
  // login(username: string, password: string): boolean {
  //   if (username === 'admin' && password === 'admin') {
  //     localStorage.setItem('user', 'admin');
  //     return true;
  //   }
  //   return false;
  // }
  register(username: string, password: string): Promise<any> {
    const body = { username, password };
    return this.httpService.post('Auth/register', body);
  }
  login(username: string, password: string): Promise<any> {
    const body = { username, password };
    return this.httpService.post('Auth/login', body);
  }
  getDeviceManagement(): Promise<any> {
    return this.httpService.get('Device');
  }
  addDevice(device: any): Promise<any> {
    return this.httpService.post('Device', device);
  }
  deleteDevice(deviceId: number): Promise<any> {
    return this.httpService.delete(`Device/${deviceId}`);
  }
  getRoomManagement(): Promise<any> {
    return this.httpService.get('Room');
  }
  addRoom(device: any): Promise<any> {
    return this.httpService.post('Room', device);
  }
  getEnergyConsumption(): Promise<any> {
    return this.httpService.get('Energy');
  }
  addEnergyConsumption(energyConsumption: any): Promise<any> {
    return this.httpService.post('Energy', energyConsumption);
  }
  
  getEnergyMaintenances(): Promise<any> {
    return this.httpService.get('DeviceMaintenance');
  }
  addEnergyMaintenance(energyConsumption: any): Promise<any> {
    return this.httpService.post('DeviceMaintenance', energyConsumption);
  }
  
  getSecurityDevices(): Promise<any> {
    return this.httpService.get('Security');
  }
  getAtomationManagement(): Promise<any> {
    return this.httpService.get('Automation');
  }
  addAutomation(automation: any): Promise<any> {
    return this.httpService.post('Automation', automation);
    }
 changePassword(username: string, newPassword: string): Promise<any> {
    const body = { username, newPassword };
    return this.httpService.post('Auth/change-password', body);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl("auth/login");
  }
}

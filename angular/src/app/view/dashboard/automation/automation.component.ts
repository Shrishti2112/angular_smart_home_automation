import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-automation',
  standalone: true,
  imports: [NgFor],
  templateUrl: './automation.component.html',
  styleUrl: './automation.component.css'
})
export class AutomationComponent {
  listData:any;
  constructor(private authService: AuthService, private router: Router) {
    this.getAtomationManagement();
  }

  getAtomationManagement(){
    this.authService.getAtomationManagement().then(response => {
      debugger
      this.listData = response;
    }).catch(error => {
      console.error(error);
      
    });
  }
  addNew(){
    this.router.navigate(['/dashboard/add-edit-automation']);
  }
}

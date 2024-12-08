import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [NgFor],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  listData:any;
  constructor(private authService: AuthService, private router: Router) {
    this.getRoomManagement();
  }

  getRoomManagement(){
    this.authService.getRoomManagement().then(response => {
      this.listData = response;
    }).catch(error => {
      console.error(error);
      
    });
  }
  addNew(){
    this.router.navigate(['/dashboard/add-edit-room']);
  }
}

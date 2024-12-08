import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-room',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-edit-room.component.html',
  styleUrl: './add-edit-room.component.css'
})
export class AddEditRoomComponent {
  roomForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.roomForm = this.fb.group({
      roomId: [0, Validators.required],
      name: ['', Validators.required],
      floor: ['', Validators.required],
      zoneId: ['', Validators.required],
      roomType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.roomForm.valid) {
      const room = this.roomForm.value;
      this.authService.addRoom(room).then(response => {
        alert('Room added successfully!');
        this.router.navigate(['/dashboard/room-management']);
      }).catch(error => {
        console.error(error);
        this.errorMessage = 'Failed to add room!';
      });
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }

}

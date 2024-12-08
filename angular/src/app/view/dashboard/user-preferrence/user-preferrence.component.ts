import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-preferrence',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-preferrence.component.html',
  styleUrl: './user-preferrence.component.css'
})
export class UserPreferrenceComponent {
  preferences:any;
}

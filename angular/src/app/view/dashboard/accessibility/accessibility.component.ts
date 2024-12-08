import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [NgFor],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.css'
})
export class AccessibilityComponent {
  reports:any;
}

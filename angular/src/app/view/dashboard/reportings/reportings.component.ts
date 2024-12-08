import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reportings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reportings.component.html',
  styleUrl: './reportings.component.css'
})
export class ReportingsComponent {
  reports:any;
}

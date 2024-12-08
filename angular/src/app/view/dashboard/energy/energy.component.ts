import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-energy',
  standalone: true,
  imports: [NgFor],
  templateUrl: './energy.component.html',
  styleUrl: './energy.component.css'
})
export class EnergyComponent implements OnInit {
  energyConsumptions: any;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.getEnergyConsumption().then(response => {
      this.energyConsumptions = response;
    }).catch(error => {
      console.error(error);
    });
  }

  editEnergyConsumption(energyConsumption: any) {
    // Implement edit logic here
  }

  deleteEnergyConsumption(energyConsumption: any) {
    // Implement delete logic here
  }
  addNew(){
    this.router.navigate(['/dashboard/add-edit-energy']);
  }
}

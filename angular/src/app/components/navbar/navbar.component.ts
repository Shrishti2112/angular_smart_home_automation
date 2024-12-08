import { Component,inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username:string ='';
  constructor(private authService: AuthService) {
    this.username = localStorage.getItem("user")||'';
  }
  logout(){
    this.authService.logout();
  }
}

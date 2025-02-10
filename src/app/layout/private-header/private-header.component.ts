import { Component } from '@angular/core';
import { PrivateMenuComponent } from '../private-menu/private-menu.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [PrivateMenuComponent],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  getUsername() {
    return this.authService.getUserName();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}

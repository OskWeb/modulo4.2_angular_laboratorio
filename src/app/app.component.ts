import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { AuthService } from './services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PublicHeaderComponent,
    FooterComponent,
    PrivateHeaderComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'modulo4.2_angular_basico';

  constructor(private authService: AuthService) {}

  isLogged() {
    return this.authService.isLogged();
  }
}

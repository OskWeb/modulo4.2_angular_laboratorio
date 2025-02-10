import { Component } from '@angular/core';
import { PublicMenuComponent } from '../public-menu/public-menu.component';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [PublicMenuComponent],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {}
